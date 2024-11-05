import ProjectCollapsible from '@/components/project/project-collapsible';
import ContactSection from '@/components/home/contact-section';
import ProjectTable from '@/components/project/project-table';
import { getLocaleServer } from '@/hooks/get-locale-server';
import Section from '@/components/section/section';
import locales from '@/locales/projects';
import { projectsData } from '@/data';
import { PageParams } from '@/types';

type Props = {};

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return {
    title: locales[locale].title,
    description: locales[locale].description
  };
}

export default async function Page(props: Props) {
  const locale = await getLocaleServer();
  const projects = projectsData
    .filter((p) => p.status)
    .sort((a, b) => {
      if (!a.date_finished) return -1;
      if (!b.date_finished) return 1;
      return Number(b.date_finished) - Number(a.date_finished);
    });

  return (
    <main className='my-16'>
      <Section
        className='md:py-12'
        description={locales[locale].description}
        title={locales[locale].title}
      >
        <ProjectTable
          className='hidden md:table'
          projects={projects}
        />
        <ProjectCollapsible
          className='md:hidden'
          projects={projects}
        />
      </Section>
      <ContactSection />
    </main>
  );
}
