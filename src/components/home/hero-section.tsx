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
            className='w-full'
            variant='outline'
          >
            {locales[locale].hero.buttonLearnMore}
          </Button>
        </Link>
        <Link href='/contact'>
          <Button
            className='w-full'
            variant='default'
          >
            {locales[locale].hero.buttonContact}
          </Button>
        </Link>
        <a
          download
          href={`/${locale}/curriculum.pdf`}
        >
          <Button
            className='w-full'
            variant='secondary'
          >
            {locales[locale].hero.buttonCV}
          </Button>
        </a>
      </div>
    </section>
  );
}
