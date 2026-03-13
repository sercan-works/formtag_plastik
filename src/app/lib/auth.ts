/**
 * Basit admin oturumu: env'deki kullanıcı adı/şifre ile giriş,
 * cookie'de sadece oturum secret'ı tutulur. JWT yok.
 */

const ADMIN_SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'formtag-admin-oturum';

export function getSessionSecret(): string {
  return ADMIN_SESSION_SECRET;
}

export function isAdminCredentials(username: string, password: string): boolean {
  const envUser = process.env.ADMIN_USER || 'suamb';
  const envPass = process.env.ADMIN_PASSWORD || 'Ankara06';
  return username === envUser && password === envPass;
}
