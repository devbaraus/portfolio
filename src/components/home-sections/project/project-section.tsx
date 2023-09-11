import { Project } from '@/gql/graphql';
import gql from 'graphql-tag';

import { fetcherGQL } from '@/lib/utils';
import ProjectCard from '@/components/home-sections/project/project-card';
import Section from '@/components/section/section';

type Props = {};

const query = gql`
  query QueryProjectSection {
    project(filter: { status: { _eq: "published" } }, limit: 4) {
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

  return (
    <Section
      parentClassName='bg-muted/30'
      id='projects'
      title='A few selected works'
      description='My web projects showcases the work that I have delivered. Have a look into my portfolio, highlighting the diverse range of websites projects for various clients.'
      subtitle='Check it out'
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
