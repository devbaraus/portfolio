import Link from 'next/link';
import { Project } from '@/gql/graphql';
import locales from '@/locales/projects';
import gql from 'graphql-tag';
import { RiExternalLinkFill } from 'react-icons/ri';

import { cn, fetcherGQL } from '@/lib/utils';
import { useLocaleServer } from '@/hooks/use-locale-server';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

type Props = {};

const query = gql`
  query QueryProjectSection {
    project(filter: { status: { _eq: "published" } }, sort: ["-date_finished"], limit: 100) {
      id
      title
      description
      published_on
      links
      date_finished_func {
        year
      }
      cover {
        id
      }
      tags
      type
    }
  }
`;

export default async function ProjectTable(props: Props) {
  const locale = useLocaleServer();
  const tableLocale = locales[locale].table;

  const { project: projects } = await fetcherGQL<{
    project: Project[];
  }>(query);

  function kindBorderColor(kind: string) {
    return {
      work: 'border-l-primary',
      side_project: 'border-l-blue-500',
      college: 'border-l-green-500'
    }[kind];
  }

  function kindBackgroundColor(kind: string) {
    return {
      work: 'bg-primary hover:bg-primary/80',
      side_project: 'bg-blue-500 hover:bg-blue-500/80',
      college: 'bg-green-500 hover:bg-green/80'
    }[kind];
  }

  function prettifyLink(link: string) {
    return link.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '');
  }

  function sortAlphabetically(a: string, b: string) {
    return a.localeCompare(b);
  }

  return (
    <Table>
      <TableCaption>
        {tableLocale.caption}
        {Object.entries(tableLocale.kinds).map(([key, value]) => (
          <Badge
            className={cn('mr-2', kindBackgroundColor(key))}
            key={key}
          >
            {value}
          </Badge>
        ))}
      </TableCaption>
      <TableHeader>
        <TableRow className='[&_>_td]:py-4'>
          <TableHead>{tableLocale.columns.project}</TableHead>
          <TableHead className='text-center'>{tableLocale.columns.year}</TableHead>
          <TableHead>{tableLocale.columns.tools}</TableHead>
          <TableHead className='hidden md:table-cell'>{tableLocale.columns.link}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow
            className={cn(
              '!border-l-2 hover:border-opacity-80 [&_>_td]:py-4',
              kindBorderColor(project.type as string)
            )}
            key={project.id}
          >
            <TableCell className='font-medium'>
              <>
                <p className='hidden md:inline'>{project.title}</p>
                <p className='w-[320px] md:hidden'>
                  {project.published_on ? (
                    <Link
                      className='w-full space-x-2 hover:text-primary'
                      href={project.published_on}
                      target='_blank'
                    >
                      <span>{project.title}</span>
                      <RiExternalLinkFill className='inline-block' />
                    </Link>
                  ) : (
                    project.title
                  )}
                </p>
              </>
            </TableCell>
            <TableCell className='text-center'>{project.date_finished_func?.year ?? '~'}</TableCell>
            <TableCell>
              <div className='flex gap-1'>
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
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              {project.published_on ? (
                <Link
                  className='space-x-2 hover:text-primary'
                  href={project.published_on}
                  target='_blank'
                >
                  <span>{prettifyLink(project.published_on)}</span>
                  <RiExternalLinkFill className='inline-block' />
                </Link>
              ) : null}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
