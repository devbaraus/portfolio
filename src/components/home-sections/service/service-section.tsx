import { RiEye2Fill, RiLayout2Fill } from 'react-icons/ri';
import {
  SiBootstrap,
  SiDjango,
  SiFigma,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPycharm,
  SiSvelte,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVuedotjs,
  SiWebstorm
} from 'react-icons/si';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Section from '@/components/layout/section';

type Props = {};
export default function ServiceSection(props: Props) {
  const cards = [
    {
      title: 'Web Development',
      description:
        'Your website is the face of your business, which is why you need to invest as much energy into it as you do into the look and feel. That is why we focus on creating websites that are adaptable and customer-focused so they perfectly suit the needs of your business.',
      tags: ['Functional Design', 'Landing pages', 'Optimization'],
      icon: RiLayout2Fill
    },
    {
      title: 'Web Development',
      description:
        'Your website is the face of your business, which is why you need to invest as much energy into it as you do into the look and feel. That is why we focus on creating websites that are adaptable and customer-focused so they perfectly suit the needs of your business.',
      tags: ['Functional Design', 'Landing pages', 'Optimization'],
      icon: RiEye2Fill
    },
    {
      title: 'Web Development',
      description:
        'Your website is the face of your business, which is why you need to invest as much energy into it as you do into the look and feel. That is why we focus on creating websites that are adaptable and customer-focused so they perfectly suit the needs of your business.',
      tags: ['Functional Design', 'Landing pages', 'Optimization'],
      icon: RiLayout2Fill
    },
    {
      title: 'Web Development',
      description:
        'Your website is the face of your business, which is why you need to invest as much energy into it as you do into the look and feel. That is why we focus on creating websites that are adaptable and customer-focused so they perfectly suit the needs of your business.',
      tags: ['Functional Design', 'Landing pages', 'Optimization'],
      icon: RiLayout2Fill
    }
  ];

  const stack = [
    [
      {
        label: 'Postgres',
        icon: SiPostgresql
      },
      {
        label: 'MongoDB',
        icon: SiMongodb
      },
      {
        label: 'Django',
        icon: SiDjango
      }
    ],
    [
      {
        label: 'NextJS',
        icon: SiNextdotjs
      },
      {
        label: 'VueJS',
        icon: SiVuedotjs
      },
      {
        label: 'Svelte',
        icon: SiSvelte
      },
      {
        label: 'TailwindCSS',
        icon: SiTailwindcss
      },
      {
        label: 'Bootstrap',
        icon: SiBootstrap
      }
    ],
    [
      {
        label: 'Figma',
        icon: SiFigma
      },
      {
        label: 'WebStorm',
        icon: SiWebstorm
      },
      {
        label: 'PyCharm',
        icon: SiPycharm
      },
      {
        label: 'Visual Studio Code',
        icon: SiVisualstudiocode
      }
    ]
  ];

  return (
    <Section
      parentClassName='bg-foreground text-background'
      id='services'
    >
      <div className='grid gap-20 md:grid-cols-2 md:gap-8'>
        <div>
          <div className='sticky top-24 space-y-12'>
            <div className='space-y-4'>
              <span className='uppercase text-background/60'>Services</span>
              <h2 className='text-3xl font-bold text-primary'>How Can I Help</h2>
              <p className='text-lg text-background/80'>
                We specialise in offering bespoke web design and Webflow development services to
                small and big businesses alike. Our aim is to help businesses establish a strong
                online presence and connect with their target audience effectively.
              </p>
            </div>
            <div className='space-y-4'>
              <h3 className='mb-4 mt-12 text-2xl font-bold text-primary'>Tools I might use</h3>
              <ul className='space-y-4'>
                {stack.map((tools, index) => (
                  <li key={index}>
                    <ul className='flex flex-wrap gap-4'>
                      {tools.map(({ label, icon: Icon }, jindex) => (
                        <li key={jindex}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge
                                variant='secondary'
                                className='aspect-square p-2 '
                              >
                                <span className='sr-only'>{label}</span>
                                <Icon className='text-4xl' />
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>{label}</TooltipContent>
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='grid grid-rows-1 gap-8'>
          {cards.map(({ title, description, icon: Icon, tags }, index) => (
            <Card
              key={index}
              className={cn(
                'sticky',
                index === 0 && 'top-24',
                index === 1 && 'top-28',
                index === 2 && 'top-32',
                index === 3 && 'top-36'
              )}
            >
              <CardHeader>
                <div className='flex gap-4'>
                  <Badge className='aspect-square'>
                    <Icon className='text-4xl' />
                  </Badge>
                  <div>
                    <CardTitle className='text-2xl'>{title}</CardTitle>
                    {/*<div className='space-x-2 overflow-hidden'>*/}
                    {/*  <ServiceTags tags={tags} />*/}
                    {/*</div>*/}
                  </div>
                </div>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
