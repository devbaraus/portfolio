import { cookies } from 'next/headers';

import 'server-only';

import { Lang } from '@/types';

export function useLocaleServer() {
  return cookies().get('locale')!.value as Lang;
}
