import locales from '@/locales/projects';
import { PageParams } from '@/types';

import { useLocaleServer } from '@/hooks/use-locale-server';
import ContactSection from '@/components/home/contact-section';
import ProjectTable from '@/components/project/project-table';
import Section from '@/components/section/section';

type Props = {};
export function generateMetadata({ params: { locale } }: PageParams) {
  return {
    title: locales[locale].title,
    description: locales[locale].description
  };
}

export default async function Page(props: Props) {
  const locale = useLocaleServer();

  return (
    <main className='my-16'>
      <Section
        className='md:py-12'
        description={locales[locale].description}
        title={locales[locale].title}
      >
        <ProjectTable />
      </Section>
      <ContactSection />
    </main>
  );
}
