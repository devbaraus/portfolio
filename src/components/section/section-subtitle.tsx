import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type Props = {} & HTMLAttributes<HTMLSpanElement>;

export default function SectionSubtitle({ children, className, ...props }: Props) {
  return (
    <span
      className={cn('uppercase text-secondary/60', className)}
      {...props}
    >
      {children}
    </span>
  );
}
