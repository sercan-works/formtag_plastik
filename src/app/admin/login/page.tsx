import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getAdminByEmail } from '@/app/lib/repositories/adminUsers';
import { signAdminToken, checkPassword } from '@/app/lib/auth';

async function loginAction(formData: FormData) {
  'use server';

  const email = String(formData.get('email') || '').trim().toLowerCase();
  const password = String(formData.get('password') || '');

  if (!email || !password) {
    return { error: 'E-posta ve şifre zorunludur.' };
  }

  const admin = await getAdminByEmail(email);
  if (!admin) {
    return { error: 'Geçersiz e-posta veya şifre.' };
  }

  if (!checkPassword(password, admin.password_hash)) {
    return { error: 'Geçersiz e-posta veya şifre.' };
  }

  const token = signAdminToken(admin.id);
  const cookieStore = await cookies();
  cookieStore.set('admin_token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect('/admin');
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-slate-800 rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-4 text-center">Admin Giriş</h1>
        <p className="text-slate-500 mb-6 text-center">
          Formtag Plastik yönetim paneline giriş yapın.
        </p>
        <form action={loginAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
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

