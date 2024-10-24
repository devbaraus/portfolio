import { Project } from '@/gql/graphql';
import locales from '@/locales/projects';
import { PageParams } from '@/types';
import gql from 'graphql-tag';

import { fetcherGQL } from '@/lib/utils';
import { getLocaleServer } from '@/hooks/get-locale-server';
import ContactSection from '@/components/home/contact-section';
import ProjectCollapsible from '@/components/project/project-collapsible';
import ProjectTable from '@/components/project/project-table';
import Section from '@/components/section/section';

type Props = {};

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return {
    title: locales[locale].title,
    description: locales[locale].description
  };
}

const query = gql`
  query QueryProjectSection {
    project(filter: { status: { _eq: "published" } }, sort: ["-date_finished"], limit: 100) {
      id
      title
      published_on
      date_finished_func {
        year
      }
      tags
      type
    }
  }
`;

export default async function Page(props: Props) {
  const locale = await getLocaleServer();

  const { project: projects } = await fetcherGQL<{
    project: Project[];
  }>(query);

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
