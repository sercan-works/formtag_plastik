import jwt from 'jsonwebtoken';

const ADMIN_JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'change-me-in-env';

/** Şifre doğrulama: env'deki düz şifre ile karşılaştırma (hash yok). */
export function checkPassword(password: string, storedPassword: string): boolean {
  return password === storedPassword;
}

export function signAdminToken(adminId: number): string {
  return jwt.sign({ sub: adminId }, ADMIN_JWT_SECRET, {
    expiresIn: '7d',
  });
}

export function verifyAdminToken(token: string): { sub: number } | null {
  try {
    const payload = jwt.verify(token, ADMIN_JWT_SECRET) as { sub: number };
    return payload;
  } catch {
    return null;
  }
}

