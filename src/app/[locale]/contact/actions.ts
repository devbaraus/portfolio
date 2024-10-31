'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function formSubmit(formData: FormData) {
  'use server';
  const nextHeaders = await headers();
  const nextCookies = await cookies();

  const ip = nextHeaders.get('x-real-ip') || nextHeaders.get('x-forwarded-for') || '';
  const locale = nextCookies.get('locale')?.value || '';

  const body = Object.fromEntries(formData.entries());

  const res = await fetch(process.env.NEXT_PRIVATE_FORM_HOOK!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: `:e_mail: Novo contato via Website :e_mail:\n--\n**Nome:** ${body.name}\n**Email:** ${body.email}\n**Telefone:** ${body.phone}\n**Mensagem:** ${body.message}\n\n**IP:** ${ip}\n**Locale:** ${locale}`,
      embeds: null,
      attachments: []
    })
  });

  if (!res.ok) {
    return false;
  }

  redirect('/contact/thank-you');
}
