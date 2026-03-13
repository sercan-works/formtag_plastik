import { redirect } from 'next/navigation';
import { createProduct } from '@/app/lib/repositories/products';
import { getCategories } from '@/app/lib/repositories/categories';

async function createProductAction(formData: FormData) {
  'use server';

  const name = String(formData.get('name') || '').trim();
  const code = String(formData.get('code') || '').trim();
  const description = String(formData.get('description') || '').trim();
  const image_url = String(formData.get('image_url') || '').trim();
  const categoryIdRaw = String(formData.get('category_id') || '').trim();
  const category_id = categoryIdRaw ? Number(categoryIdRaw) : null;

  if (!name || !code) {
    // Basit doğrulama; ileri seviye UX için tekrar biçimlendirilebilir
    return;
  }

  await createProduct({
    name,
    code,
    description: description || undefined,
    image_url: image_url || undefined,
    category_id: category_id || undefined,
  });

  redirect('/admin/products');
}

export default async function NewProductPage() {
  const categories = await getCategories();

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Yeni Ürün</h2>
      <form action={createProductAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Ürün Adı
          </label>
          <input
            id="name"
            name="name"
            className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="code">
            Ürün Kodu
          </label>
          <input
            id="code"
            name="code"
            className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="category_id">
            Kategori
          </label>
          <select
            id="category_id"
            name="category_id"
            className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
          >
            <option value="">Seçilmedi</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="image_url">
            Görsel URL
          </label>
          <input
            id="image_url"
            name="image_url"
            className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="description">
            Açıklama
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
}

