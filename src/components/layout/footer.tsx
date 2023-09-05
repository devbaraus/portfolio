'use client';

import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { contact, socialLinks } from '@/site.config';
import { RiCopyrightLine } from 'react-icons/ri';

import { cn } from '@/lib/utils';
import BadgeLink from '@/components/ui/badge-link';

type Props = HTMLAttributes<HTMLDivElement>;

export default function Footer({ className, ...props }: Props) {
  return (
    <footer
      {...props}
      className={cn('my-8', className)}
    >
      <div className='container grid grid-cols-4 divide-x border-x border-t [&_>_div]:py-8'>
        <div className='col-span-2 flex flex-col justify-between space-y-4 pr-4'>
          <p>Bruno de Araújo Alves</p>
          <p>
            Transform your home or office with our custom tailored furniture & interior design
            services. Create personalised designs that reflects your unique style. From custom-made
            furniture to complete room makeovers, we bring your vision to life. Contact us today!
          </p>
        </div>
        <div className='space-y-8 px-4'>
          <div className='space-y-4'>
            <p className='uppercase'>Contact Us</p>
            <ul className='space-y-4'>
              {contact.map(({ action, content }) => (
                <li>
                  <BadgeLink
                    type='button'
                    label={content}
                    onClick={action}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-4'>
            <p className='uppercase'>Social Links</p>

            <ul className='space-y-4'>
              {socialLinks.map(({ label, href }) => (
                <li>
                  <Link
                    href={href}
                    target='_blank'
                  >
                    <BadgeLink label={label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='space-y-4 px-4'>
          <p className='uppercase'>Quick Links</p>
          <ul className='space-y-4'>
            {contact.map(({ action, content }) => (
              <li>
                <BadgeLink
                  type='button'
                  label={content}
                  onClick={action}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='divide container flex border [&_>_div]:py-8'>
        <div className='flex flex-1 justify-start pr-4'>
          <p>
            <span className='text-primary'>
              <RiCopyrightLine className='inline-block' /> {new Date().getFullYear()}
            </span>{' '}
            - Bruno de Araújo Alves. All rights reserved.
          </p>
        </div>
        <div className='flex flex-1 justify-center'>
          <p className='[&_>_a]:underline hover:[&_>_a]:text-primary '>
            Built with{' '}
            <Link
              href='https://nextjs.org/'
              target='_blank'
            >
              Next.js
            </Link>{' '}
            and{' '}
            <Link
              href='https://tailwindcss.com/'
              target='_blank'
            >
              Tailwind CSS
            </Link>
            , deployed with{' '}
            <Link
              href='https://vercel.com/'
              target='_blank'
            >
              Vercel
            </Link>
            . All text is set in the{' '}
            <Link
              href='https://rsms.me/inter/'
              target='_blank'
            >
              Inter
            </Link>{' '}
            typeface.
          </p>
        </div>
        {/*<div className='flex flex-1 justify-end'></div>*/}
      </div>
    </footer>
  );
}
