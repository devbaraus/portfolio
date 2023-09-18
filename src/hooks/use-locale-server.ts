import { cookies } from 'next/headers';

import 'server-only';

import { defaultLocalePrefix } from '@/middleware';
import { Lang } from '@/types';

export function useLocaleServer() {
  return (cookies().get('locale')?.value || defaultLocalePrefix) as Lang;
}
