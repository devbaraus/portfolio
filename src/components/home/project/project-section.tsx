import Link from 'next/link';

import ProjectCard from '@/components/home/project/project-card';
import { getLocaleServer } from '@/hooks/get-locale-server';
import Section from '@/components/section/section';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data';
import { cn } from '@/lib/utils';
import locales from '@/locales';

type Props = {};

export default async function ProjectSection(props: Props) {
  const projects = projectsData.filter((project) => project.featured && project.status);
  const locale = await getLocaleServer();

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
          'md:grid-cols-2': projects.length % 2 === 0,
          'md:grid-cols-3': projects.length % 3 === 0
        })}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}
