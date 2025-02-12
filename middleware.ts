import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { I18nMiddleware } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};