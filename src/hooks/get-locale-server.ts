import { cookies } from 'next/headers';
import 'server-only';

import { defaultLocalePrefix } from '@/middleware';
import { Lang } from '@/types';

export async function getLocaleServer() {
  return ((await cookies()).get('locale')?.value || defaultLocalePrefix) as Lang;
}
