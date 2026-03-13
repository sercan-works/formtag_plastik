import Link from 'next/link';
import { getCategories } from '@/app/lib/repositories/categories';

export default async function AdminCategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Kategoriler</h2>
        <Link
          href="/admin/categories/new"
          className="py-2 px-4 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
        >
          Yeni Kategori
        </Link>
      </div>
      <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-3 py-2 text-left font-medium">ID</th>
              <th className="px-3 py-2 text-left font-medium">Ad</th>
              <th className="px-3 py-2 text-left font-medium">Slug</th>
              <th className="px-3 py-2 text-right font-medium">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id} className="border-t border-slate-200 dark:border-slate-800">
                <td className="px-3 py-2">{c.id}</td>
                <td className="px-3 py-2">{c.name}</td>
                <td className="px-3 py-2">{c.slug}</td>
                <td className="px-3 py-2 text-right space-x-2">
                  <Link
                    href={`/admin/categories/${c.id}`}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Düzenle
                  </Link>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td className="px-3 py-4 text-center text-slate-500" colSpan={4}>
                  Henüz kategori yok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

