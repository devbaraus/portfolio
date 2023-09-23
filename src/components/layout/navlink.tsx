'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

export type NavLinkProps = {
  action?: Function;
  href: string;
} & ButtonProps;
export default function NavLink({
  children,
  className,
  action,
  href,
  variant = 'ghost',
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isCurrent = href === pathname;

  return (
    <Link href={href}>
      <Button
        {...props}
        className={cn(
          'group flex items-center rounded p-4 uppercase transition-colors duration-500 ease-in-out',
          isCurrent && 'text-primary',
          className
        )}
        onClick={() => action?.()}
        variant={variant}
      >
        {children}
      </Button>
    </Link>
  );
}
