import { sql } from '../db';
import type { AdminUser } from '../types';

export async function getAdminByEmail(email: string): Promise<AdminUser | null> {
  const result = await sql<AdminUser>`
    SELECT * FROM admin_users WHERE email = ${email} LIMIT 1
  `;
  return result.rows[0] ?? null;
}

export async function createAdminUser(data: {
  email: string;
  password_hash: string;
}): Promise<AdminUser> {
  const result = await sql<AdminUser>`
    INSERT INTO admin_users (email, password_hash)
    VALUES (${data.email}, ${data.password_hash})
    RETURNING *
  `;
  return result.rows[0];
}

