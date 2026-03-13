/**
 * Veritabanı migration'ını çalıştırır.
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

const sqlPath = path.join(__dirname, '..', 'db', 'migrations', '001_init.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

async function run() {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    await client.query(sql);
    console.log('Migration tamamlandı: categories, products, admin_users tabloları oluşturuldu.');
  } catch (err) {
    console.error('Migration hatası:', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

run();
