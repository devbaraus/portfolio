import locales from '@/locales/projects';

import { useLocaleServer } from '@/hooks/use-locale-server';
import ContactSection from '@/components/home/contact-section';
import ProjectTable from '@/components/project/project-table';
import Section from '@/components/section/section';

type Props = {};

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
