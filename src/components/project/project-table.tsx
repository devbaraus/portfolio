import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { Project } from '@/gql/graphql';
import locales from '@/locales/projects';
import { RiExternalLinkFill } from 'react-icons/ri';

import { cn, prettifyLink, sortAlphabetically } from '@/lib/utils';
import { getLocaleServer } from '@/hooks/get-locale-server';
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
import { kindBackgroundColor, kindBorderColor } from '@/components/project/shared';

type Props = {
  projects: Project[];
} & HTMLAttributes<HTMLTableElement>;

export default async function ProjectTable({ projects, ...props }: Props) {
  const locale = await getLocaleServer();
  const tableLocale = locales[locale].table;

  return (
    <Table {...props}>
      <TableCaption className='text-left'>
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
          <TableHead>{tableLocale.columns.link}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow
            className={cn(
              'whitespace-nowrap !border-l-2 hover:border-opacity-80 [&_>_td]:py-4',
              kindBorderColor(project.type as string)
            )}
            key={project.id}
          >
            <TableCell className='font-medium'>{project.title}</TableCell>
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
            <TableCell>
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
