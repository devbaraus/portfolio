'use client';

import { RiArrowRightLine } from 'react-icons/ri';
import Link from 'next/link';

import SectionDescription from '@/components/section/section-description';
import SectionSubtitle from '@/components/section/section-subtitle';
import SectionTitle from '@/components/section/section-title';
import IconAnimated from '@/components/motion/icon-animated';
import Section from '@/components/section/section';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';
import { socialLinks } from '@/site.config';
import { cn } from '@/lib/utils';
import locales from '@/locales';

type Props = {};

export default function ServiceSection(props: Props) {
  const locale = useLocale();

  return (
    <Section id='contact'>
      <div className='grid gap-4 md:grid-cols-2'>
        <div>
          <SectionSubtitle>{locales[locale].contact.subtitle}</SectionSubtitle>
          <SectionTitle>{locales[locale].contact.title}</SectionTitle>
          <SectionDescription>{locales[locale].contact.description}</SectionDescription>
        </div>
        <Link
          className='self-end md:ml-auto'
          href='/contact'
        >
          <Button>
            {locales[locale].contact.button}
            <IconAnimated
              iconAppear={RiArrowRightLine}
              iconVisible={RiArrowRightLine}
            />
          </Button>
        </Link>
      </div>
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
        {socialLinks
          .filter((i) => i.footer)
          .map(({ label, href, icon: Icon, id }) => {
            const render = () => (
              <>
                <IconAnimated
                  className={cn(
                    'size-12 rounded bg-secondary text-2xl text-background ',
                    href && 'transition-colors duration-500 group-hover:bg-primary'
                  )}
                  iconAppear={Icon}
                  iconVisible={Icon}
                />
                <span
                  className={cn(href && 'transition-colors duration-500 group-hover:text-primary')}
                >
                  {label}
                </span>
              </>
            );

            return (
              <li key={id}>
                {href ? (
                  <Link
                    className='group flex items-center space-x-4'
                    href={href}
                    target='_blank'
                  >
                    {render()}
                  </Link>
                ) : (
                  <div className='group flex items-center space-x-4'>{render()}</div>
                )}
              </li>
            );
          })}
      </ul>
    </Section>
  );
}
