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
    <Button
      {...props}
      variant={variant}
      asChild
      onClick={() => action?.()}
      className={cn(
        'group flex items-center rounded p-4 uppercase transition-colors duration-300 ease-in-out',
        isCurrent && 'text-primary',
        className
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
