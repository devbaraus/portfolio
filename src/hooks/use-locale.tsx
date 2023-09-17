'use client';

import { useParams } from 'next/navigation';
import { Lang } from '@/types';

export function useLocale() {
  const params = useParams();
  return params!.locale as Lang;
}
