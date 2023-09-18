'use client';

import { useParams } from 'next/navigation';
import { defaultLocalePrefix } from '@/middleware';
import { Lang } from '@/types';

export function useLocale() {
  const params = useParams();
  return (params!.locale || defaultLocalePrefix) as Lang;
}
