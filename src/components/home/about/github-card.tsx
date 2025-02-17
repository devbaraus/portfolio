'use client';

import { RiFolder2Fill, RiFolderFill, RiUserFollowFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import IconAnimated from '@/components/motion/icon-animated';
import { Separator } from '@/components/ui/separator';
import { useLocale } from '@/hooks/use-locale';
import { Badge } from '@/components/ui/badge';
import locales from '@/locales/about/cards';
import { GitHubUser } from '@/types';

type Props = {};

export default function GithubCard(props: Props) {
  const [data, setData] = useState<GitHubUser>();

  const locale = useLocale();

  useEffect(() => {
    fetch('https://api.github.com/users/devbaraus', {
      next: {
        revalidate: 60 * 60 * 12
      }
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return null;

  return (
    <Card className='w-full overflow-hidden bg-foreground text-background'>
      <CardContent className='relative h-32 overflow-hidden p-0'>
        <Image
          alt='Muggs Shop'
          className='absolute left-0 top-0 w-full rounded object-cover object-center brightness-75'
          height={500}
          src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500'
          width={500}
        />
      </CardContent>
      <CardFooter className='relative block space-y-4'>
        <Image
          alt='Avatar Bruno de Araújo Alves'
          className='absolute -top-20 left-1/2 aspect-video size-24 -translate-x-1/2 rounded-full object-cover'
          height={500}
          src={data.avatar_url}
          width={500}
        />
        <div className='flex w-full justify-between pt-8'>
          <div>
            <p>@{data.login}</p>
            <p>{data.name}</p>
          </div>
          <Link
            href={data.html_url}
            target='_blank'
          >
            <span className='sr-only'>Github Link</span>
            <IconAnimated
              className='hover-bg-secondary/80 rounded bg-secondary'
              iconAppear={SiGithub}
              iconVisible={SiGithub}
            />
          </Link>
        </div>
        <Separator className='bg-secondary' />
        <div className='flex flex-wrap gap-4'>
          <Badge
            className='space-x-2'
            variant='secondary'
          >
            <RiUserFollowFill />
            <span>
              {data.followers} {locales[locale].github.followers}
            </span>
          </Badge>
          <Badge
            className='space-x-2'
            variant='secondary'
          >
            <RiFolder2Fill />
            <span>
              {data.public_repos} {locales[locale].github.repositories}
            </span>
          </Badge>
          <Badge
            className='space-x-2'
            variant='secondary'
          >
            <RiFolderFill />
            <span>
              {data.public_gists} {locales[locale].github.gists}
            </span>
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
