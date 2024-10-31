'use client';

import { RiArrowRightLine, RiMenu2Fill } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import IconAnimated from '@/components/motion/icon-animated';
import ButtonTheme from '@/components/layout/button-theme';
import LangSwitcher from '@/components/locale-switcher';
import { Separator } from '@/components/ui/separator';
import NavLink from '@/components/layout/navlink';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';
import Logo from '@/components/layout/logo';
import { siteName } from '@/site.config';
import locales from '@/locales/navbar';
import { cn } from '@/lib/utils';

const FloatingButton = () => {
  'use client';

  const pathname = usePathname();

  return (
    <Link
      className={cn(
        'fixed bottom-0 right-0 z-50 m-4 md:hidden',
        pathname === '/contact' && 'hidden'
      )}
      href='/contact'
    >
      <Button size='icon'>
        <span className='sr-only'>Get in touch</span>
        <RiArrowRightLine className='text-2xl' />
      </Button>
    </Link>
  );
};

export default function Navbar() {
  const locale = useLocale();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const links = [
    { href: '/', label: locales[locale].home },
    { href: '/contact', label: locales[locale].contact },
    { href: '/projects', label: locales[locale].projects }
  ];

  return (
    <>
      <header className='fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-center border-b bg-background/80 py-4 backdrop-blur'>
        <nav className='container flex w-full md:gap-4'>
          <div className='flex flex-1 items-center justify-start'>
            <Link
              className='inline-flex items-center gap-2 text-xl font-bold uppercase'
              href='/'
            >
              <Logo className='block h-6 text-primary' />
              {siteName}
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
            <LangSwitcher />
            <Separator className='w-8 rotate-90' />
            <NavLink
              className='text-primary-foreground'
              href='/contact'
              variant='default'
            >
              {locales[locale].button}
              <IconAnimated
                iconAppear={RiArrowRightLine}
                iconVisible={RiArrowRightLine}
              />
            </NavLink>
          </div>
          <div className='flex md:hidden'>
            <ButtonTheme />
            <LangSwitcher />
          </div>

          <Sheet
            onOpenChange={(open) => setMobileNavOpen(open)}
            open={mobileNavOpen}
          >
            <SheetTrigger
              asChild
              className='md:hidden'
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
              className='space-y-4'
              side='right'
            >
              <menu className='space-y-4'>
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <NavLink
                      className='justify-start'
                      href={href}
                      onClickCapture={() => setMobileNavOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <NavLink
                  className='mt-4 justify-start text-primary-foreground'
                  href='/contact'
                  onClickCapture={() => setMobileNavOpen(false)}
                  variant='default'
                >
                  {locales[locale].button}
                </NavLink>
              </menu>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
      <FloatingButton />
    </>
  );
}
