'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import locales from '@/locales/about/cards';
import { GitHubUser } from '@/types';
import { RiFolder2Fill, RiFolderFill, RiUserFollowFill } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';

import { useLocale } from '@/hooks/use-locale';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import IconAnimated from '@/components/motion/icon-animated';

type Props = {};

export default function GithubCard(props: Props) {
  const [data, setData] = useState<GitHubUser>();

  const locale = useLocale();

  useEffect(() => {
    fetch('https://api.github.com/users/devbaraus')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return null;

  return (
    <Card className='w-full overflow-hidden bg-foreground text-background'>
      <CardContent className='relative h-32 overflow-hidden p-0'>
        <Image
          src={
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500'
          }
          alt='Muggs Shop'
          className='absolute left-0 top-0 w-full rounded object-cover object-center brightness-75'
          width={500}
          height={500}
        />
      </CardContent>
      <CardFooter className='relative block space-y-4'>
        <Image
          src={data.avatar_url}
          alt='Avatar Bruno de Araújo Alves'
          className='absolute -top-20 left-1/2 aspect-video h-24 w-24 -translate-x-1/2 rounded-full object-cover'
          width={500}
          height={500}
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
            <IconAnimated
              className='hover-bg-secondary/80 rounded bg-secondary'
              iconVisible={SiGithub}
              iconAppear={SiGithub}
            />
          </Link>
        </div>
        <Separator className='bg-secondary' />
        <div className='flex flex-wrap gap-4'>
          <Badge
            variant='secondary'
            className='space-x-2'
          >
            <RiUserFollowFill />
            <span>
              {data.followers} {locales[locale].github.followers}
            </span>
          </Badge>
          <Badge
            variant='secondary'
            className='space-x-2'
          >
            <RiFolder2Fill />
            <span>
              {data.public_repos} {locales[locale].github.repositories}
            </span>
          </Badge>
          <Badge
            variant='secondary'
            className='space-x-2'
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
