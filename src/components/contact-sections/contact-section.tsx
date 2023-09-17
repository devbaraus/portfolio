import Link from 'next/link';
import locales from '@/locales/contact';
import { socialLinks } from '@/site.config';

import { cn } from '@/lib/utils';
import { useLocaleServer } from '@/hooks/use-locale-server';
import IconAnimated from '@/components/motion/icon-animated';
import Section from '@/components/section/section';

type Props = {};

export default function ContactSection(props: Props) {
  const locale = useLocaleServer();

  return (
    <>
      <Section
        className='sticky top-44 p-0'
        subtitle={locales[locale].subtitle}
        title={locales[locale].title}
        description={locales[locale].description}
      >
        <ul className='w-max space-y-4'>
          {socialLinks.map(({ label, href, icon: Icon }) => {
            const render = () => (
              <>
                <IconAnimated
                  className={cn(
                    'h-12 w-12 rounded bg-secondary text-2xl text-background ',
                    href && 'transition-colors duration-500 group-hover:bg-primary'
                  )}
                  iconVisible={Icon}
                  iconAppear={Icon}
                />
                <span
                  className={cn(href && 'transition-colors duration-500 group-hover:text-primary')}
                >
                  {label}
                </span>
              </>
            );

            return (
              <li key={label}>
                {href ? (
                  <Link
                    href={href}
                    target='_blank'
                    className='group flex items-center space-x-4'
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
    </>
  );
}
