import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="container mx-auto flex items-center justify-between py-4">
          <h1 className="text-xl font-semibold">Formtag Plastik Admin</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/admin/products" className="text-sm hover:text-indigo-600">
              Ürünler
            </Link>
            <Link href="/admin/categories" className="text-sm hover:text-indigo-600">
              Kategoriler
            </Link>
            <Link href="/admin/logout" className="text-sm text-red-600 hover:text-red-700">
              Çıkış
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8">{children}</main>
    </div>
  );
}

