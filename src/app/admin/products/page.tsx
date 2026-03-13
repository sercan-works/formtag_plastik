import Link from 'next/link';
import { getProducts } from '@/app/lib/repositories/products';

export const dynamic = 'force-dynamic';

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Ürünler</h2>
        <Link
          href="/admin/products/new"
          className="py-2 px-4 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
        >
          Yeni Ürün
        </Link>
      </div>
      <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-3 py-2 text-left font-medium">ID</th>
              <th className="px-3 py-2 text-left font-medium">Ad</th>
              <th className="px-3 py-2 text-left font-medium">Kod</th>
              <th className="px-3 py-2 text-left font-medium">Kategori</th>
              <th className="px-3 py-2 text-left font-medium">Oluşturulma</th>
              <th className="px-3 py-2 text-right font-medium">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-slate-200 dark:border-slate-800">
                <td className="px-3 py-2">{p.id}</td>
                <td className="px-3 py-2">{p.name}</td>
                <td className="px-3 py-2">{p.code}</td>
                <td className="px-3 py-2">{p.category_name ?? '-'}</td>
                <td className="px-3 py-2">
                  {new Date(p.created_at).toLocaleDateString('tr-TR')}
                </td>
                <td className="px-3 py-2 text-right space-x-2">
                  <Link
                    href={`/admin/products/${p.id}`}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Düzenle
                  </Link>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td className="px-3 py-4 text-center text-slate-500" colSpan={6}>
                  Henüz ürün yok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

