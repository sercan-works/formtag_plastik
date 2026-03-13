import { sql } from '@vercel/postgres';
import products from '../src/app/Data/products.json';

async function main() {
  console.log('Seeding categories and products...');

  const categoryMap = new Map<string, number>();

  for (const p of products) {
    if (!categoryMap.has(p.category)) {
      const result = await sql<{ id: number }>`
        INSERT INTO categories (name, slug)
        VALUES (${p.category}, ${p.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')})
        ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
        RETURNING id
      `;
      categoryMap.set(p.category, result.rows[0].id);
    }
  }

  for (const p of products) {
    const categoryId = categoryMap.get(p.category) ?? null;
    await sql`
      INSERT INTO products (name, code, description, image_url, category_id)
      VALUES (${p.name}, ${p.code}, ${p.description}, ${p.image}, ${categoryId})
      ON CONFLICT (code) DO NOTHING
    `;
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@formtag.com';
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminPasswordHash) {
    console.warn(
      'ADMIN_PASSWORD_HASH tanımlı değil. Admin kullanıcısı için bcrypt hash üretip bu değişkene koymalısınız.'
    );
  } else {
    await sql`
      INSERT INTO admin_users (email, password_hash)
      VALUES (${adminEmail}, ${adminPasswordHash})
      ON CONFLICT (email) DO NOTHING
    `;
    console.log(`Admin kullanıcısı (${adminEmail}) hazır.`);
  }

  console.log('Seed tamamlandı.');
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

