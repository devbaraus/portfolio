import { RequestCookies, ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const defaultLocale = 'en-US';
export const defaultLocalePrefix = defaultLocale.split('-')[0];

const locales = [defaultLocale, 'pt-BR'];
const localesPrefixes = locales.map((locale) => locale.split('-')[0]);
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
  }

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);
  const response = NextResponse.rewrite(newUrl);
  response.cookies.set(cookieName, locale, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)
  });
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
};
