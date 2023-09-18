'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function formSubmit(formData: FormData) {
  'use server';

  const ip = headers().get('x-real-ip') || headers().get('x-forwarded-for') || '';
  const locale = cookies().get('locale')?.value || '';

  const body = Object.fromEntries(formData.entries());

  const res = await fetch(process.env.NEXT_PRIVATE_API_CONTACT_FORM!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...body,
      ip,
      locale
    })
  });

  if (!res.ok) {
    return false;
  }

  redirect('/contact/thank-you');
}
