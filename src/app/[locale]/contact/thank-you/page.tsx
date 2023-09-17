import Link from 'next/link';

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
  return (
    <>
      <main className='container mb-16'>
        <div className='flex h-screen flex-col items-center justify-center gap-4'>
          <SectionTitle className='text-center text-4xl font-bold'>Thank you!</SectionTitle>
          <SectionDescription className='text-center text-lg'>
            We will get back to you as soon as possible.
          </SectionDescription>
          <Link
            href='/'
            className='mt-8'
          >
            <Button>Go back to home</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
