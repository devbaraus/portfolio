import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import Section from '@/components/layout/section';

type Props = {};
export default function ProjectSection(props: Props) {
  const projects = [
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
      parentClassName='bg-muted/30'
      id='projects'
      title='A few selected works'
      description='Our web design projects showcases the exceptional work that we have delivered. Have a look into our portfolio, highlighting the diverse range of web design projects for various industries.'
      subtitle='My works'
    >
      <div className='grid gap-20 md:grid-cols-2 md:gap-8'>
        {projects.map(({ title, description, image, href }) => (
          <Card
            key={href}
            className='group cursor-pointer border-none bg-transparent'
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
                  className='hidden md:inline-flex'
                >
                  view
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
