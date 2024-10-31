'use client';

import { motion } from 'framer-motion';

import ServiceCard, {
  SerivceCardChildVariant,
  ServiceCardContainerVariant
} from '@/components/home/service/service-card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import SectionDescription from '@/components/section/section-description';
import SectionSubtitle from '@/components/section/section-subtitle';
import SectionTitle from '@/components/section/section-title';
import localeServiceCards from '@/locales/service/cards';
import Section from '@/components/section/section';
import { useLocale } from '@/hooks/use-locale';
import { Badge } from '@/components/ui/badge';
import { serviceStack } from '@/site.config';
import { cn } from '@/lib/utils';
import locales from '@/locales';

type Props = {};

export default function ServiceSection(props: Props) {
  const locale = useLocale();
  const serviceCards = localeServiceCards[locale];

  return (
    <Section
      id='services'
      parentClassName='bg-foreground text-background'
    >
      <div className='grid gap-12 md:grid-cols-2 md:gap-8'>
        <div>
          <div className='sticky top-24 space-y-12'>
            <div className='space-y-4'>
              <SectionSubtitle className='text-background/60'>
                {locales[locale].service.subtitle}
              </SectionSubtitle>
              <SectionTitle className='text-3xl font-bold text-primary'>
                {locales[locale].service.title}
              </SectionTitle>
              <SectionDescription className='text-background/80 md:w-full'>
                {locales[locale].service.description}
              </SectionDescription>
            </div>
            <div className='space-y-4'>
              <h3 className='mb-4 mt-12 text-2xl font-bold text-primary'>
                {locales[locale].service.stackMessage}
              </h3>
              <ul className='space-y-4'>
                {serviceStack.map((tools, index) => (
                  <li key={index}>
                    <ul className='flex flex-wrap gap-4'>
                      {tools.map(({ label, icon: Icon }, jindex) => (
                        <li key={jindex}>
                          <Tooltip>
                            <TooltipTrigger className='cursor-default'>
                              <Badge
                                className='aspect-square p-2 '
                                variant='secondary'
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
          className='grid grid-rows-1 gap-8'
          initial='hidden'
          variants={ServiceCardContainerVariant}
          viewport={{ once: true, amount: 0 }}
          whileInView='visible'
        >
          {serviceCards.map((service, index) => (
            <ServiceCard
              className={cn(
                index === 0 && 'top-24',
                index === 1 && 'top-28',
                index === 2 && 'top-32',
                index === 3 && 'top-36',
                index === 4 && 'top-40'
              )}
              key={index}
              service={service}
              variants={SerivceCardChildVariant}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
