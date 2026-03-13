import Link from 'next/link';

export default function AdminHome() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Yönetim Paneli</h2>
      <p className="text-slate-500">
        Buradan Formtag Plastik ürün ve kategorilerini yönetebilirsiniz.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/admin/products"
          className="py-2 px-4 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
        >
          Ürünleri Yönet
        </Link>
        <Link
          href="/admin/categories"
          className="py-2 px-4 rounded-md bg-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-300"
        >
          Kategorileri Yönet
        </Link>
      </div>
    </div>
  );
}

