import Link from 'next/link';

import IconAnimated from '@/components/motion/icon-animated';
import { getLocaleServer } from '@/hooks/get-locale-server';
import Section from '@/components/section/section';
import { socialLinks } from '@/site.config';
import locales from '@/locales/contact';
import { cn } from '@/lib/utils';

type Props = {};

export default async function ContactSection(props: Props) {
  const locale = await getLocaleServer();

  return (
    <Section
      className='sticky top-44 p-0'
      description={locales[locale].description}
      subtitle={locales[locale].subtitle}
      title={locales[locale].title}
    >
      <ul className='w-max space-y-4'>
        {socialLinks.map(({ label, href, icon: Icon, id }) => {
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
