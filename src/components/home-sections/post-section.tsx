import Image from 'next/image';
import { RiEye2Fill, RiEye2Line } from 'react-icons/ri';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import Section from '@/components/layout/section';

type Props = {};

export default function PostSection(props: Props) {
  const posts = [
    {
      title: 'Spotiminy',
      description: 'A Spotify mini player for macOS',
      image: 'https://source.unsplash.com/random/?mockup&1',
      href: ''
    },
    {
      title: 'Muggs Shop',
      description: 'A Spotify mini player for macOS',
      image: 'https://source.unsplash.com/random/?mockup&2',
      href: ''
    },
    {
      title: 'Spotiminy',
      description: 'A Spotify mini player for macOS',
      image: 'https://source.unsplash.com/random/?mockup&1',
      href: ''
    },
    {
      title: 'Muggs Shop',
      description: 'A Spotify mini player for macOS',
      image: 'https://source.unsplash.com/random/?mockup&2',
      href: ''
    }
  ];

  return (
    <Section
      id='posts'
      title='Some written stuff'
      description='I write about web development, design and other stuff.'
      subtitle='My posts'
    >
      <div className='grid gap-20 md:grid-cols-4 md:gap-8'>
        {posts.map(({ title, description, image, href }) => (
          <Card
            key={href}
            className='cursor-pointer border-none bg-transparent'
          >
            <CardContent className='mb-6 overflow-hidden rounded p-0'>
              <Image
                src={image}
                alt='Muggs Shop'
                className='aspect-video h-full w-full object-cover transition-transform duration-300 hover:scale-105'
                width={500}
                height={300}
              />
            </CardContent>
            <CardFooter className='flex-col items-start px-0'>
              <div className='flex w-full items-center justify-between'>
                <CardTitle className='text-2xl uppercase'>{title}</CardTitle>
                <Button
                  size='sm'
                  variant='outline'
                  className='group hidden md:inline-flex'
                >
                  read
                </Button>
              </div>
              <CardDescription className='text-base'>{description}</CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
