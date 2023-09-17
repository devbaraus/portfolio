import { RequestCookies, ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const defaultLocale = 'en-US';
const locales = [defaultLocale, 'pt-BR'];
const localesPrefixes = ['en', 'pt'];
const cookieName = 'locale';

export function getLocaleFromCookies(cookies: ResponseCookies | RequestCookies) {
  const locale = cookies.get(cookieName)?.value;

  if (locale && localesPrefixes.includes(locale)) {
    return locale;
  }

  return null;
}

export function getLocaleFromHeaders(headers: Headers) {
  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages(locales);

  return match(languages, locales, defaultLocale);
}

function getLocale(request: NextRequest) {
  const headers = new Headers(request.headers);
  return getLocaleFromHeaders(headers);
}

export function middleware(request: NextRequest) {
  let locale = getLocaleFromCookies(request.cookies);
  const pathname = request.nextUrl.pathname;

  if (!locale) {
    locale = getLocale(request);
    locale = locale.replace(/-\w*/g, '');

    if (!request.cookies.has(cookieName)) {
      const response = NextResponse.next();
      response.cookies.set(cookieName, locale);
      return response;
    }
  }

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);
  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
};
