'use client';

import { useState } from 'react';
import { RiArrowRightLine, RiMenu2Fill } from 'react-icons/ri';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavLink from '@/components/layout/navlink';

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    {
      href: '/contact',
      label: 'Get in touch',
      className: 'bg-primary text-primary-foreground hover:bg-primary/90',
      icon: <RiArrowRightLine className='ml-2 inline-block ' />
    }
  ];

  return (
    <>
      <header className='fixed left-0 top-0 flex w-full items-center justify-center border-b py-4 backdrop-blur'>
        <nav>
          <menu className='hidden gap-4 md:flex'>
            {links.map(({ href, label, className, icon }) => (
              <li key={href}>
                <NavLink
                  href={href}
                  className={className}
                >
                  {label}
                  {icon}
                </NavLink>
              </li>
            ))}
          </menu>
          <Sheet
            open={mobileNavOpen}
            onOpenChange={(open) => setMobileNavOpen(open)}
          >
            <SheetTrigger className='md:hidden'>
              <RiMenu2Fill />
            </SheetTrigger>
            <SheetContent side='right'>
              <menu className='space-y-4'>
                {links.map(({ href, label, className, icon }) => (
                  <li key={href}>
                    <NavLink
                      onClickCapture={() => setMobileNavOpen(false)}
                      href={href}
                      className={className}
                    >
                      {label}
                      {icon}
                    </NavLink>
                  </li>
                ))}
              </menu>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
}
