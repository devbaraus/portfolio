import Link from 'next/link';
import { Project } from '@/gql/graphql';
import locales from '@/locales';
import gql from 'graphql-tag';

import { cn, fetcherGQL } from '@/lib/utils';
import { useLocaleServer } from '@/hooks/use-locale-server';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/home/project/project-card';
import Section from '@/components/section/section';

type Props = {};

const query = gql`
  query QueryProjectSection {
    project(filter: { status: { _eq: "published" }, featured: { _eq: true } }, limit: 4) {
      id
      title
      published_on
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

  const actionChild = (
    <Link href='/projects'>
      <Button>{locales[locale].project.action}</Button>
    </Link>
  );

  return (
    <Section
      actionChild={actionChild}
      description={locales[locale].project.description}
      id='projects'
      parentClassName='bg-muted/30'
      subtitle={locales[locale].project.subtitle}
      title={locales[locale].project.title}
    >
      <div
        className={cn('grid gap-12 md:gap-8', {
          'md:grid-cols-2': project.length % 2 === 0,
          'md:grid-cols-3': project.length % 3 === 0
        })}
      >
        {project.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}
