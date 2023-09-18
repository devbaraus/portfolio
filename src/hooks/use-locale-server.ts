import { headers } from 'next/headers';

import 'server-only';

import { defaultLocalePrefix } from '@/middleware';
import { Lang } from '@/types';

export function useLocaleServer() {
  return (headers().get('x-locale') || defaultLocalePrefix) as Lang;
}
