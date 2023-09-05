'use client';

import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type Props = {
  action?: Function;
} & LinkProps &
  PropsWithChildren &
  HTMLAttributes<HTMLAnchorElement>;
export default function NavLink({ children, className, action, ...props }: Props) {
  const pathname = usePathname();
  const isCurrent = props.href === pathname;

  return (
    <Link
      {...props}
      onClick={() => action?.()}
      className={cn(
        'flex items-center rounded-full px-4 py-1 uppercase transition-colors duration-300 ease-in-out hover:bg-muted',
        isCurrent && 'md:border',
        className
      )}
    >
      {children}
    </Link>
  );
}
