'use server';

import { redirect } from 'next/navigation';

export async function formSubmit(formData: FormData) {
  'use server';

  const body = Object.fromEntries(formData.entries());

  const res = await fetch(process.env.NEXT_PRIVATE_API_CONTACT_FORM!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    return false;
  }

  redirect('/contact/thank-you');
}
