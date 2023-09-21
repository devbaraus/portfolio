import { Project } from '@/gql/graphql';
import locales from '@/locales';
import gql from 'graphql-tag';

import { fetcherGQL } from '@/lib/utils';
import { useLocaleServer } from '@/hooks/use-locale-server';
import ProjectCard from '@/components/home-sections/project/project-card';
import Section from '@/components/section/section';

type Props = {};

const query = gql`
  query QueryProjectSection {
    project(filter: { status: { _eq: "published" }, featured: { _eq: true } }, limit: 4) {
      id
      title
      description
      published_on
      links
      cover {
        id
      }
    }
  }
`;

export default async function ProjectSection(props: Props) {
  const { project } = await fetcherGQL<{
    project: Project[];
  }>(query);

  const locale = useLocaleServer();

  return (
    <Section
      parentClassName='bg-muted/30'
      id='projects'
      title={locales[locale].project.title}
      description={locales[locale].project.description}
      subtitle={locales[locale].project.subtitle}
    >
      <div className='grid gap-12 md:grid-cols-2 md:gap-8'>
        {project.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
          />
        ))}
      </div>
    </Section>
  );
}
