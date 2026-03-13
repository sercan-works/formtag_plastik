import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from './app/lib/auth';

const ADMIN_LOGIN_PATH = '/admin/login';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(ADMIN_LOGIN_PATH)) {
    return NextResponse.next();
  }

  const isAdminRoute = pathname.startsWith('/admin');
  if (!isAdminRoute) {
    return NextResponse.next();
  }

  const token = request.cookies.get('admin_token')?.value;
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = ADMIN_LOGIN_PATH;
    return NextResponse.redirect(url);
  }

  const payload = verifyAdminToken(token);
  if (!payload) {
    const url = request.nextUrl.clone();
    url.pathname = ADMIN_LOGIN_PATH;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

