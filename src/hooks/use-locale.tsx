'use client';

import { useParams } from 'next/navigation';
import { Lang } from '@/types';
import { defaultLocalePrefix } from '@/middleware';

export function useLocale() {
  const params = useParams();
  return (params!.locale || defaultLocalePrefix) as Lang;
}
