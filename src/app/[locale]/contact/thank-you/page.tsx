import Link from 'next/link';
import locales from '@/locales/contact/thank-you';

import { useLocaleServer } from '@/hooks/use-locale-server';
import { Button } from '@/components/ui/button';
import SectionDescription from '@/components/section/section-description';
import SectionTitle from '@/components/section/section-title';

export const metadata = {
  title: 'Thank you for contacting me!',
  description: 'Thank you for contacting me!',
  robots: {
    index: false
  }
};

export default function ContactThankYouPage() {
  const locale = useLocaleServer();

  return (
    <>
      <main className='container mb-16'>
        <div className='flex h-screen flex-col items-center justify-center gap-4'>
          <SectionTitle className='text-center text-4xl font-bold'>
            {locales[locale].title}
          </SectionTitle>
          <SectionDescription className='text-center text-lg'>
            {locales[locale].description}
          </SectionDescription>
          <Link
            href='/'
            className='mt-8'
          >
            <Button>{locales[locale].goBackButton}</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
