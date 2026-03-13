import { NextRequest, NextResponse } from 'next/server';

const ADMIN_LOGIN_PATH = '/admin/login';
const ADMIN_SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'formtag-admin-oturum';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(ADMIN_LOGIN_PATH)) {
    return NextResponse.next();
  }

  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get('admin_session')?.value;
  if (sessionCookie !== ADMIN_SESSION_SECRET) {
    const url = request.nextUrl.clone();
    url.pathname = ADMIN_LOGIN_PATH;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
