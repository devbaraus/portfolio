import Link from 'next/link';
import { RiMailFill, RiMapFill, RiPhoneFill, RiUserLocationFill } from 'react-icons/ri';
import { SiInstagram, SiLinkedin } from 'react-icons/si';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import IconAnimated from '@/components/motion/icon-animated';
import Section from '@/components/section/section';

type Props = {};

export default function ContactSection(props: Props) {
  const contact = [
    {
      label: 'devbaraus',
      href: 'https://linkedin.com/in/devbaraus',
      icon: SiLinkedin
    },
    {
      label: '@devbaraus',
      href: 'https://instagram.com/devbaraus',
      icon: SiInstagram
    },
    {
      label: 'me@baraus.dev',
      href: 'mailto:me@baraus.dev',
      icon: RiMailFill
    },
    {
      label: '+55 62 99379-4290',
      href: 'tel:+5562993794290',
      icon: RiPhoneFill
    },
    {
      label: 'Anápolis, Goiás, Brazil',
      icon: RiMapFill
    }
  ];

  return (
    <>
      <Section
        className='sticky top-44 p-0'
        subtitle='Have an idea?'
        title="Let's work together"
        description='Looking for a freelance web designer or developer to take your website to the next level? Get in touch today to learn more.'
      >
        <ul className='w-max space-y-4'>
          {contact.map(({ label, href, icon: Icon }) => {
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
