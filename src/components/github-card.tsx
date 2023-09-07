import Image from 'next/image';
import { RiFolder2Fill, RiStarFill, RiUserFollowFill } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type Props = {};

export default function GithubCard(props: Props) {
  return (
    <Card className='w-full overflow-hidden bg-foreground text-background'>
      <CardContent className='relative h-32 overflow-hidden p-0'>
        <Image
          src={
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500'
          }
          alt='Muggs Shop'
          className='absolute left-0 top-0 w-full rounded object-cover object-center'
          width={500}
          height={500}
        />
      </CardContent>
      <CardFooter className='relative block space-y-4'>
        <Image
          src={'https://avatars.githubusercontent.com/u/43019623?v=4'}
          alt='Muggs Shop'
          className='absolute -top-20 left-1/2 aspect-video h-24 w-24 -translate-x-1/2 rounded-full object-cover'
          width={500}
          height={500}
        />
        <div className='flex w-full justify-between pt-8'>
          <div>
            <p>@devbaraus</p>
            <p>Bruno de Araújo Alves</p>
          </div>
          <Button size='icon'>
            <SiGithub />
          </Button>
        </div>
        <Separator className='bg-secondary' />
        <div className='flex gap-4'>
          <Badge
            variant='secondary'
            className='space-x-2'
          >
            <RiUserFollowFill />
            <span>96 Followers</span>
          </Badge>
          <Badge
            variant='secondary'
            className='space-x-2'
          >
            <RiFolder2Fill />
            <span>26 Repositories</span>
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
