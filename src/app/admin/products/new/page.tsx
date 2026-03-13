import { redirect } from 'next/navigation';
import { createProduct } from '@/app/lib/repositories/products';
import { getCategories } from '@/app/lib/repositories/categories';
import { uploadProductImage } from '@/app/lib/upload';

async function createProductAction(formData: FormData) {
  'use server';

  try {
    const name = String(formData.get('name') || '').trim();
    const code = String(formData.get('code') || '').trim();
    const description = String(formData.get('description') || '').trim();
    const categoryIdRaw = String(formData.get('category_id') || '').trim();
    const category_id = categoryIdRaw ? Number(categoryIdRaw) : null;

    let image_url: string | undefined;
    const imageFile = formData.get('image') as File | null;
    if (imageFile?.size && imageFile.size > 0) {
      const url = await uploadProductImage(imageFile);
      if (url) image_url = url;
    }
    if (!image_url) {
      const urlInput = String(formData.get('image_url') || '').trim();
      if (urlInput) image_url = urlInput;
    }

    if (!name || !code) {
      redirect('/admin/products/new?error=empty');
    }

    await createProduct({
      name,
      code,
      description: description || undefined,
      image_url,
      category_id: category_id || undefined,
    });

    redirect('/admin/products');
  } catch {
    redirect('/admin/products/new?error=server');
  }
}

export default async function NewProductPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const categories = await getCategories();

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Yeni Ürün</h2>
      {error === 'server' && (
        <p className="mb-4 p-3 rounded-md bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm">
          Kayıt sırasında bir hata oluştu. Ürün kodu benzersiz olmalıdır; veritabanı bağlantısını ve Blob ayarlarını kontrol edin.
        </p>
      )}
      {error === 'empty' && (
        <p className="mb-4 p-3 rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 text-sm">
          Ürün adı ve kodu zorunludur.
        </p>
      )}
      <form action={createProductAction} className="space-y-4" encType="multipart/form-data">
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
          <label className="block text-sm font-medium mb-1" htmlFor="image">
            Görsel (yükle veya URL gir)
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:bg-indigo-50 file:text-indigo-700 dark:file:bg-indigo-900/30 dark:file:text-indigo-300"
          />
          <input
            id="image_url"
            name="image_url"
            type="url"
            placeholder="veya görsel URL'si"
            className="mt-2 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
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

