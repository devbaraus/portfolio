'use client';

import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { contact, socialLinks } from '@/site.config';
import { RiCopyrightLine } from 'react-icons/ri';

import { cn } from '@/lib/utils';
import BadgeLink from '@/components/ui/badge-link';
import { useToast } from '@/components/ui/use-toast';

type Props = HTMLAttributes<HTMLDivElement>;

export default function Footer({ className, ...props }: Props) {
  const { toast } = useToast();

  return (
    <footer
      {...props}
      className={cn('my-8', className)}
    >
      <div className='container grid divide-y rounded-t border md:grid-cols-2 md:divide-x md:divide-y-0 md:border-b-0 [&_>_div]:py-8'>
        {/*<div className='flex flex-col justify-between space-y-4 pr-4 '>*/}
        {/*  <Link*/}
        {/*    href='/'*/}
        {/*    className='text-lg font-bold uppercase'*/}
        {/*  >*/}
        {/*    baraus*/}
        {/*  </Link>*/}
        {/*</div>*/}
        <div className='space-y-4 md:px-4'>
          <p className='uppercase'>Contact Me</p>
          <ul className='space-y-4'>
            {contact.map(({ action, content }, index) => (
              <li key={index}>
                <button
                  onClick={() => action(toast)}
                  className='hover:text-primary'
                >
                  {content}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='space-y-4 md:px-4'>
          <p className='uppercase'>Social Links</p>

          <ul className='space-y-4'>
            {socialLinks.map(({ label, href }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  target='_blank'
                  className='underline hover:text-primary'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/*<p className='uppercase'>Quick Links</p>*/}
          {/*<ul className='space-y-4'>*/}
          {/*  {contact.map(({ action, content }, index) => (*/}
          {/*    <li key={index}>*/}
          {/*      <BadgeLink*/}
          {/*        type='button'*/}
          {/*        label={content}*/}
          {/*        onClick={action}*/}
          {/*      />*/}
          {/*    </li>*/}
          {/*  ))}*/}
          {/*</ul>*/}
        </div>
      </div>
      <div className='container mt-8 flex flex-wrap-reverse gap-4 rounded-b md:mt-0 md:border md:[&_>_div]:py-8'>
        <div className='flex justify-start pr-4 md:flex-1'>
          <p>
            <span className='text-primary'>
              <RiCopyrightLine className='inline-block' /> {new Date().getFullYear()}
            </span>{' '}
            - Bruno de Araújo Alves. All rights reserved.
          </p>
        </div>
        <div className='flex justify-center md:flex-1'>
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
              href='https://ui.shadcn.com/'
              target='_blank'
            >
              shadcn/ui
            </Link>
            , deployed at{' '}
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
