'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RiArrowRightLine, RiMenu2Fill } from 'react-icons/ri';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ButtonTheme from '@/components/layout/button-theme';
import NavLink from '@/components/layout/navlink';

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' }
  ];

  return (
    <>
      <header className='fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-center border-b bg-background/80 py-4 backdrop-blur'>
        <nav className='container flex w-full space-x-4'>
          <div className='flex flex-1 items-center justify-start'>
            <Link
              href=''
              className='text-lg font-bold uppercase'
            >
              baraus
            </Link>
          </div>
          <menu className='hidden items-center gap-4 justify-self-center md:flex'>
            {links.map(({ href, label }) => (
              <li key={href}>
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </menu>
          <div className='hidden flex-1 items-center justify-end md:flex'>
            <ButtonTheme />
            <Separator className='w-8 rotate-90' />
            <NavLink
              href='/contact'
              variant='default'
            >
              Get in touch
              <RiArrowRightLine className='ml-2 inline-block ' />
            </NavLink>
          </div>
          <ButtonTheme className='md:hidden' />
          <Sheet
            open={mobileNavOpen}
            onOpenChange={(open) => setMobileNavOpen(open)}
          >
            <SheetTrigger
              className='md:hidden'
              asChild
            >
              <Button
                size='icon'
                variant='ghost'
              >
                <span className='sr-only'>Toggle Mobile Navbar</span>
                <RiMenu2Fill />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='space-y-4'
            >
              <menu className='space-y-4'>
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <NavLink
                      className='justify-start'
                      onClickCapture={() => setMobileNavOpen(false)}
                      href={href}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <NavLink
                  href='/contact'
                  variant='default'
                  className='justify-start'
                  onClickCapture={() => setMobileNavOpen(false)}
                >
                  Get in touch
                </NavLink>
              </menu>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
}
