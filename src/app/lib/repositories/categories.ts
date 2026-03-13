import { sql } from '../db';
import type { Category } from '../types';

export async function getCategories(): Promise<Category[]> {
  const result = await sql<Category>`SELECT id, name, slug FROM categories ORDER BY name ASC`;
  return result.rows;
}

export async function getCategoryById(id: number): Promise<Category | null> {
  const result = await sql<Category>`SELECT id, name, slug FROM categories WHERE id = ${id} LIMIT 1`;
  return result.rows[0] ?? null;
}

export async function createCategory(data: { name: string; slug: string }): Promise<Category> {
  const result = await sql<Category>`
    INSERT INTO categories (name, slug)
    VALUES (${data.name}, ${data.slug})
    RETURNING id, name, slug
  `;
  return result.rows[0];
}

export async function updateCategory(
  id: number,
  data: Partial<{ name: string; slug: string }>
): Promise<Category | null> {
  const existing = await getCategoryById(id);
  if (!existing) return null;

  const name = data.name ?? existing.name;
  const slug = data.slug ?? existing.slug;

  const result = await sql<Category>`
    UPDATE categories
    SET name = ${name}, slug = ${slug}
    WHERE id = ${id}
    RETURNING id, name, slug
  `;
  return result.rows[0] ?? null;
}

export async function deleteCategory(id: number): Promise<void> {
  await sql`DELETE FROM categories WHERE id = ${id}`;
}

