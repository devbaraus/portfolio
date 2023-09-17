import locales from '@/locales';

import { useLocaleServer } from '@/hooks/use-locale-server';

export default function HeroSection() {
  const locale = useLocaleServer();

  return (
    <section className='container flex min-h-screen flex-col justify-center space-y-4 bg-cover py-20'>
      <span className='self-start text-lg animate-in'>{locales[locale].hero.lead}</span>
      <h1 className='text-5xl font-bold uppercase tracking-tight md:text-8xl'>
        {locales[locale].hero.title}
      </h1>
      <p className='text-lg'>{locales[locale].hero.subtitle}</p>
    </section>
  );
}
