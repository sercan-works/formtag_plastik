/**
 * Veritabanı migration'larını sırayla çalıştırır.
 * Kullanım: node scripts/migrate.js
 * .env.local içinde POSTGRES_URL (veya DATABASE_URL) tanımlı olmalı.
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

const migrationsDir = path.join(__dirname, '..', 'db', 'migrations');
const files = fs.readdirSync(migrationsDir).filter((f) => f.endsWith('.sql')).sort();

async function run() {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    for (const file of files) {
      const sqlPath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(sqlPath, 'utf8');
      await client.query(sql);
      console.log('Çalıştırıldı:', file);
    }
    console.log('Tüm migration\'lar tamamlandı.');
  } catch (err) {
    console.error('Migration hatası:', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

run();
