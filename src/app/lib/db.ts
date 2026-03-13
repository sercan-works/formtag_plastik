import { sql } from '@vercel/postgres';

/**
 * Basit bağlantı testi.
 * Uygulama açılırken çağrılmasına gerek yok, sadece geliştirme sırasında kullanılabilir.
 */
export async function pingDatabase() {
  await sql`SELECT 1`;
}

export { sql };

