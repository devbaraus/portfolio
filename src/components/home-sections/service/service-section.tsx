'use client';

import { serviceCards, serviceStack } from '@/site.config';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import ServiceCard, {
  SerivceCardChildVariant,
  ServiceCardContainerVariant
} from '@/components/home-sections/service/service-card';
import Section from '@/components/section/section';
import SectionDescription from '@/components/section/section-description';
import SectionSubtitle from '@/components/section/section-subtitle';
import SectionTitle from '@/components/section/section-title';

type Props = {};

export default function ServiceSection(props: Props) {
  return (
    <Section
      parentClassName='bg-foreground text-background'
      id='services'
    >
      <div className='grid gap-12 md:grid-cols-2 md:gap-8'>
        <div>
          <div className='sticky top-24 space-y-12'>
            <div className='space-y-4'>
              <SectionSubtitle className='text-background/60'>Some services</SectionSubtitle>
              <SectionTitle className='text-3xl font-bold text-primary'>
                How Can I Help
              </SectionTitle>
              <SectionDescription className='text-background/80 md:w-full'>
                I specialise in offering bespoke web development services to small and medium
                businesses alike. My aim is to help businesses establish a online presence and
                connect with their target audience effectively.
              </SectionDescription>
            </div>
            <div className='space-y-4'>
              <h3 className='mb-4 mt-12 text-2xl font-bold text-primary'>Tools I might use</h3>
              <ul className='space-y-4'>
                {serviceStack.map((tools, index) => (
                  <li key={index}>
                    <ul className='flex flex-wrap gap-4'>
                      {tools.map(({ label, icon: Icon }, jindex) => (
                        <li key={jindex}>
                          <Tooltip>
                            <TooltipTrigger className='cursor-default'>
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
        <motion.div
          variants={ServiceCardContainerVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0 }}
          className='grid grid-rows-1 gap-8'
        >
          {serviceCards.map((service, index) => (
            <ServiceCard
              key={index}
              variants={SerivceCardChildVariant}
              className={cn(
                index === 0 && 'top-24',
                index === 1 && 'top-28',
                index === 2 && 'top-32',
                index === 3 && 'top-36'
              )}
              service={service}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
