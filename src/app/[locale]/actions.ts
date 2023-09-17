'use server';

import { cookies } from 'next/headers';

export async function switchLocale(formData: FormData) {
  'use server';
  const locale = formData.get('locale') as string;
  cookies().set('locale', locale);
}
