import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { Project } from '@/gql/graphql';
import locales from '@/locales/projects';
import { RiExternalLinkFill } from 'react-icons/ri';

import { cn, prettifyLink, sortAlphabetically } from '@/lib/utils';
import { getLocaleServer } from '@/hooks/get-locale-server';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { kindBackgroundColor, kindBorderColor } from '@/components/project/shared';

type Props = {
  projects: Project[];
} & HTMLAttributes<HTMLDivElement>;

export default async function ProjectCollapsible({ projects, ...props }: Props) {
  const locale = await getLocaleServer();
  const tableLocale = locales[locale].table;

  return (
    <div {...props}>
      {projects.map((project) => (
        <Collapsible
          className={cn(
            ' space-y-4 border-b border-l-2 px-2 py-4 hover:border-opacity-80',
            kindBorderColor(project.type as string)
          )}
          key={project.id}
        >
          <CollapsibleTrigger className='w-full text-left font-medium'>
            {project.title}
          </CollapsibleTrigger>
          <CollapsibleContent className='space-y-4 text-sm'>
            <div className='space-y-2'>
              <p className='text-left align-middle text-sm font-medium text-muted-foreground '>
                {tableLocale.columns.year}
              </p>
              <p>{project.date_finished_func?.year ?? '~'}</p>
            </div>
            {project.published_on ? (
              <div className='space-y-2'>
                <p className='text-left align-middle text-sm font-medium text-muted-foreground '>
                  {tableLocale.columns.link}
                </p>
                <Link
                  className='space-x-2 hover:text-primary'
                  href={project.published_on}
                  target='_blank'
                >
                  <span>{prettifyLink(project.published_on)}</span>
                  <RiExternalLinkFill className='inline-block' />
                </Link>
              </div>
            ) : null}
            <div className='space-y-2'>
              <p className='text-left align-middle text-sm font-medium text-muted-foreground '>
                {tableLocale.columns.tools}
              </p>
              <div className='flex flex-wrap gap-1'>
                {project.tags
                  ?.sort((a, b) => sortAlphabetically(a as string, b as string))
                  .map((item) => (
                    <Badge
                      key={item}
                      variant='secondary'
                    >
                      {item}
                    </Badge>
                  ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
      <div className='mt-4 text-sm text-muted-foreground'>
        {tableLocale.caption}
        {Object.entries(tableLocale.kinds).map(([key, value]) => (
          <Badge
            className={cn('mr-2', kindBackgroundColor(key))}
            key={key}
          >
            {value}
          </Badge>
        ))}
      </div>
    </div>
  );
}
