/**
 * Veritabanına örnek kategoriler, ürünler ve (isteğe bağlı) admin kullanıcı ekler.
 * Kullanım: node scripts/seed.js
 * .env.local içinde POSTGRES_URL ve (admin için) ADMIN_EMAIL, ADMIN_PASSWORD tanımlı olmalı.
 */
require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error('Hata: POSTGRES_URL veya DATABASE_URL .env.local içinde tanımlı olmalı.');
  process.exit(1);
}

const productsPath = path.join(__dirname, '..', 'src', 'app', 'Data', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

async function main() {
  console.log('Seeding categories and products...');
  const client = new Client({ connectionString });
  await client.connect();

  const categoryMap = new Map();

  try {
    for (const p of products) {
      if (!categoryMap.has(p.category)) {
        const slug = p.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        const res = await client.query(
          `INSERT INTO categories (name, slug)
           VALUES ($1, $2)
           ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
           RETURNING id`,
          [p.category, slug]
        );
        categoryMap.set(p.category, res.rows[0].id);
      }
    }

    for (const p of products) {
      const categoryId = categoryMap.get(p.category) ?? null;
      await client.query(
        `INSERT INTO products (name, code, description, image_url, category_id)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (code) DO NOTHING`,
        [p.name, p.code, p.description || null, p.image || null, categoryId]
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@formtag.com';
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.warn(
        'ADMIN_PASSWORD tanımlı değil. .env.local içine ADMIN_EMAIL ve ADMIN_PASSWORD ekleyip seed\'i tekrar çalıştırın.'
      );
    } else {
      await client.query(
        `INSERT INTO admin_users (email, password_hash)
         VALUES ($1, $2)
         ON CONFLICT (email) DO NOTHING`,
        [adminEmail, adminPassword]
      );
      console.log('Admin kullanıcısı (' + adminEmail + ') hazır.');
    }

    console.log('Seed tamamlandı.');
  } finally {
    await client.end();
  }
}

main().then(
  () => process.exit(0),
  (err) => {
    console.error(err);
    process.exit(1);
  }
);
