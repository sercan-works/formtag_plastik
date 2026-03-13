import { redirect } from 'next/navigation';
import { getCategories } from '@/app/lib/repositories/categories';
import { getProductById, updateProduct, deleteProduct } from '@/app/lib/repositories/products';

interface Props {
  params: { id: string };
}

async function updateProductAction(id: number, formData: FormData) {
  'use server';

  const name = String(formData.get('name') || '').trim();
  const code = String(formData.get('code') || '').trim();
  const description = String(formData.get('description') || '').trim();
  const image_url = String(formData.get('image_url') || '').trim();
  const categoryIdRaw = String(formData.get('category_id') || '').trim();
  const category_id = categoryIdRaw ? Number(categoryIdRaw) : null;

  if (!name || !code) {
    return;
  }

  await updateProduct(id, {
    name,
    code,
    description: description || undefined,
    image_url: image_url || undefined,
    category_id: category_id || undefined,
  });

  redirect('/admin/products');
}

async function deleteProductAction(id: number) {
  'use server';
  await deleteProduct(id);
  redirect('/admin/products');
}

export default async function EditProductPage({ params }: Props) {
  const id = Number(params.id);
  const [product, categories] = await Promise.all([
    getProductById(id),
    getCategories(),
  ]);

  if (!product) {
    redirect('/admin/products');
  }

  return (
    <div className="max-w-xl space-y-4">
      <h2 className="text-xl font-semibold">Ürün Düzenle</h2>

      <form action={updateProductAction.bind(null, id)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Ürün Adı
          </label>
          <input
            id="name"
            name="name"
            defaultValue={product.name}
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
            defaultValue={product.code}
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
            defaultValue={product.category_id ?? ''}
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
            defaultValue={product.image_url ?? ''}
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
            defaultValue={product.description ?? ''}
            className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="py-2 px-4 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
          >
            Kaydet
          </button>
          <form action={deleteProductAction.bind(null, id)}>
            <button
              type="submit"
              className="py-2 px-4 rounded-md bg-red-600 text-white text-sm font-semibold hover:bg-red-700"
            >
              Sil
            </button>
          </form>
        </div>
      </form>
    </div>
  );
}

