import { redirect } from 'next/navigation';
import { getCategoryById, updateCategory, deleteCategory } from '@/app/lib/repositories/categories';

interface Props {
  params: { id: string };
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
}

async function updateCategoryAction(id: number, formData: FormData) {
  'use server';

  const name = String(formData.get('name') || '').trim();
  let slug = String(formData.get('slug') || '').trim();

  if (!name) return;
  if (!slug) slug = slugify(name);

  await updateCategory(id, { name, slug });
  redirect('/admin/categories');
}

async function deleteCategoryAction(id: number) {
  'use server';
  await deleteCategory(id);
  redirect('/admin/categories');
}

export default async function EditCategoryPage({ params }: Props) {
  const id = Number(params.id);
  const category = await getCategoryById(id);

  if (!category) {
    redirect('/admin/categories');
  }

  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-xl font-semibold">Kategori Düzenle</h2>
      <form action={updateCategoryAction.bind(null, id)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Ad
          </label>
          <input
            id="name"
            name="name"
            defaultValue={category.name}
            className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="slug">
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            defaultValue={category.slug}
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
          <form action={deleteCategoryAction.bind(null, id)}>
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

