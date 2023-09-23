import Image from 'next/image';
import Link from 'next/link';
import { SiDiscord } from 'react-icons/si';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {};

export default function DiscordCard(props: Props) {
  return (
    <Card className='w-full bg-foreground text-background'>
      <CardHeader>
        <CardTitle>Current activity</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <Image
          alt='Muggs Shop'
          className='aspect-square h-full w-full rounded object-cover'
          height={500}
          src='https://source.unsplash.com/random/?mockup&1'
          width={500}
        />
      </CardContent>
      <CardFooter className='justify-between'>
        <div>
          <p>Husk My Love</p>
          <p>Bruno de Araújo Alves</p>
        </div>
        <Button size='icon'>
          <Link href='https://discord.gg/2YzYz2Y'>
            <span className='sr-only'>Discord link</span>
            <SiDiscord />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
