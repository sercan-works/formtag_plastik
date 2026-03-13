import { sql } from '../db';
import type { Product } from '../types';

export async function getProducts(): Promise<Product[]> {
  const result = await sql<Product>`
    SELECT
      p.*,
      c.name AS category_name
    FROM products p
    LEFT JOIN categories c ON c.id = p.category_id
    ORDER BY p.created_at DESC
  `;
  return result.rows;
}

export async function getProductById(id: number): Promise<Product | null> {
  const result = await sql<Product>`
    SELECT
      p.*,
      c.name AS category_name
    FROM products p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE p.id = ${id}
    LIMIT 1
  `;
  return result.rows[0] ?? null;
}

interface ProductInput {
  name: string;
  code: string;
  description?: string;
  image_url?: string;
  category_id?: number | null;
}

export async function createProduct(data: ProductInput): Promise<Product> {
  const result = await sql<Product>`
    INSERT INTO products (name, code, description, image_url, category_id)
    VALUES (
      ${data.name},
      ${data.code},
      ${data.description ?? null},
      ${data.image_url ?? null},
      ${data.category_id ?? null}
    )
    RETURNING *
  `;
  return result.rows[0];
}

export async function updateProduct(
  id: number,
  data: Partial<ProductInput>
): Promise<Product | null> {
  const existing = await getProductById(id);
  if (!existing) return null;

  const result = await sql<Product>`
    UPDATE products
    SET
      name = ${data.name ?? existing.name},
      code = ${data.code ?? existing.code},
      description = ${data.description ?? existing.description},
      image_url = ${data.image_url ?? existing.image_url},
      category_id = ${data.category_id ?? existing.category_id}
    WHERE id = ${id}
    RETURNING *
  `;
  return result.rows[0] ?? null;
}

export async function deleteProduct(id: number): Promise<void> {
  await sql`DELETE FROM products WHERE id = ${id}`;
}

