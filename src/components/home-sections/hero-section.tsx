import Link from 'next/link';
import locales from '@/locales';

import { useLocaleServer } from '@/hooks/use-locale-server';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const locale = useLocaleServer();

  return (
    <section className='container flex min-h-screen flex-col justify-center space-y-4 bg-cover py-20'>
      <span className='self-start text-lg animate-in'>{locales[locale].hero.lead}</span>
      <h1 className='text-4xl font-bold uppercase tracking-tight md:text-8xl'>
        {locales[locale].hero.title}
      </h1>
      <p className='text-lg'>{locales[locale].hero.subtitle}</p>
      <div className='space-y-4 md:flex md:gap-4 md:space-y-0 [&_>_a]:block'>
        <Link href='/#projects'>
          <Button
            variant='outline'
            className='w-full'
          >
            {locales[locale].hero.buttonLearnMore}
          </Button>
        </Link>
        <Link href='/contact'>
          <Button
            variant='default'
            className='w-full'
          >
            {locales[locale].hero.buttonContact}
          </Button>
        </Link>
        <Link
          href='/download/cv.pdf'
          download
        >
          <Button
            variant='secondary'
            className='w-full'
          >
            {locales[locale].hero.buttonCV}
          </Button>
        </Link>
      </div>
    </section>
  );
}
