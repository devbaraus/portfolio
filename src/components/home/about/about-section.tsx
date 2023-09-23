import locales from '@/locales';

import { useLocaleServer } from '@/hooks/use-locale-server';
import AboutTabs from '@/components/home/about/about-tabs';
import Section from '@/components/section/section';

type Props = {};
export default function AboutSection(props: Props) {
  const locale = useLocaleServer();

  return (
    <Section
      id='about'
      parentClassName='bg-muted/30'
      subtitle={locales[locale].about.subtitle}
      title={locales[locale].about.title}
    >
      <div className='grid gap-12 md:grid-cols-2 md:gap-8 2xl:grid-cols-3'>
        <div className='space-y-2 2xl:col-span-2'>{locales[locale].about.message}</div>
        <div>
          <AboutTabs />
        </div>
      </div>
    </Section>
  );
}
