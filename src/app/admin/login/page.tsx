import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { isAdminCredentials, getSessionSecret } from '@/app/lib/auth';

async function loginAction(formData: FormData): Promise<void> {
  'use server';

  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '');

  if (!username || !password) {
    redirect('/admin/login?error=empty');
  }

  if (!isAdminCredentials(username, password)) {
    redirect('/admin/login?error=invalid');
  }

  const cookieStore = await cookies();
  cookieStore.set('admin_session', getSessionSecret(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect('/admin');
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-slate-800 rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-4 text-center">Admin Giriş</h1>
        <p className="text-slate-500 mb-6 text-center">
          Formtag Plastik yönetim paneline giriş yapın.
        </p>
        {error === 'empty' && (
          <p className="mb-4 text-sm text-amber-600">Kullanıcı adı ve şifre zorunludur.</p>
        )}
        {error === 'invalid' && (
          <p className="mb-4 text-sm text-red-600">Geçersiz kullanıcı adı veya şifre.</p>
        )}
        <form action={loginAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              Kullanıcı adı
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Şifre
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
