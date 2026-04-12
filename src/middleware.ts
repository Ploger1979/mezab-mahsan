import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Public Paths
  const isAuthRoute = path.startsWith('/login') || path.startsWith('/forgot-password') || path.startsWith('/reset-password') || path.startsWith('/register');
  // Admin Paths
  const isAdminRoute = path.startsWith('/admin');

  // We look for a mock session token
  const token = request.cookies.get('admin_session')?.value;

  // Protect Admin routes: if no token, redirect to login
  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Prevent logged-in admins from accessing auth pages repeatedly
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }
  
  // Protect /admin/users route specifically for super_admin
  if (path.startsWith('/admin/users') && token) {
    try {
      // Very basic payload sniff, proper verification is done in APIs.
      // At this layer we just sniff role to prevent UI leaks.
      const payloadString = atob(token.split('.')[1]);
      const payload = JSON.parse(payloadString);
      if (payload.role !== 'super_admin') {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
    } catch (e) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Apply middleware only to these exact base paths matching Next.js execution
  matcher: ['/admin/:path*', '/login', '/forgot-password', '/reset-password', '/register'],
};
