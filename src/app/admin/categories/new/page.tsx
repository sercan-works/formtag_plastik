import { redirect } from 'next/navigation';
import { createCategory } from '@/app/lib/repositories/categories';

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
}

async function createCategoryAction(formData: FormData) {
  'use server';

  const name = String(formData.get('name') || '').trim();
  let slug = String(formData.get('slug') || '').trim();

  if (!name) return;
  if (!slug) slug = slugify(name);

  await createCategory({ name, slug });
  redirect('/admin/categories');
}

export default function NewCategoryPage() {
  return (
    <div className="max-w-md">
      <h2 className="text-xl font-semibold mb-4">Yeni Kategori</h2>
      <form action={createCategoryAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Ad
          </label>
          <input
            id="name"
            name="name"
            className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="slug">
            Slug (opsiyonel)
          </label>
          <input
            id="slug"
            name="slug"
            placeholder="Boş bırakırsanız otomatik oluşturulur"
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

