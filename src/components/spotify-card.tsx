import Image from 'next/image';
import { RiFolder2Fill, RiUserFollowFill } from 'react-icons/ri';
import { SiGithub, SiSpotify } from 'react-icons/si';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type Props = {};

export default function SpotifyCard(props: Props) {
  return (
    <Card className='w-full overflow-hidden bg-foreground text-background'>
      <CardContent className='relative h-32 overflow-hidden p-0'>
        <Image
          src={'https://i.scdn.co/image/ab67616d0000b27394604284f4f96ee0374eef8c'}
          alt='Muggs Shop'
          className='absolute left-0 top-0 w-full rounded object-cover object-center'
          width={500}
          height={500}
        />
      </CardContent>
      <CardFooter className='relative block space-y-4'>
        <Image
          src={'https://i.scdn.co/image/ab6761610000e5eb1b8f08f741213f04e4c3a25a'}
          alt='Muggs Shop'
          className='absolute -top-20 left-1/2 aspect-video h-24 w-24 -translate-x-1/2 rounded-full object-cover'
          width={500}
          height={500}
        />
        <div className='flex w-full justify-between pt-8'>
          <div>
            <p>Devil Like Me</p>
            <p>Rainbow Kitten Surprise</p>
          </div>
          <Button size='icon'>
            <SiSpotify />
          </Button>
        </div>
        {/*<Separator className='bg-secondary' />*/}
        {/*<div className='flex gap-4'>*/}
        {/*  <Badge*/}
        {/*    variant='secondary'*/}
        {/*    className='space-x-2'*/}
        {/*  >*/}
        {/*    <RiUserFollowFill />*/}
        {/*    <span>96 Followers</span>*/}
        {/*  </Badge>*/}
        {/*  <Badge*/}
        {/*    variant='secondary'*/}
        {/*    className='space-x-2'*/}
        {/*  >*/}
        {/*    <RiFolder2Fill />*/}
        {/*    <span>26 Repositories</span>*/}
        {/*  </Badge>*/}
        {/*</div>*/}
      </CardFooter>
    </Card>
  );
}
