import Link from 'next/link';

import SectionDescription from '@/components/section/section-description';
import SectionTitle from '@/components/section/section-title';
import { getLocaleServer } from '@/hooks/get-locale-server';
import locales from '@/locales/contact/thank-you';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Thank you for contacting me!',
  description: 'Thank you for contacting me!',
  robots: {
    index: false
  }
};

export default async function ContactThankYouPage() {
  const locale = await getLocaleServer();

  return (
    <main className='container mb-16'>
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
        <SectionTitle className='text-center text-4xl font-bold'>
          {locales[locale].title}
        </SectionTitle>
        <SectionDescription className='text-center text-lg'>
          {locales[locale].description}
        </SectionDescription>
        <Link
          className='mt-8'
          href='/'
        >
          <Button>{locales[locale].goBackButton}</Button>
        </Link>
      </div>
    </main>
  );
}
