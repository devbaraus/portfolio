import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  subtitle?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  parentClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Section({
  subtitle,
  title,
  description,
  children,
  parentClassName,
  className,
  ...props
}: Props) {
  return (
    <div className={cn('py-12 md:py-32', parentClassName)}>
      <section
        {...props}
        className={cn('container space-y-4', className)}
      >
        {subtitle ? <span className='uppercase text-secondary/60'>{subtitle}</span> : null}
        {title ? <h2 className='text-3xl font-bold text-primary'>{title}</h2> : null}
        {description ? <p className='text-lg text-secondary/80 md:w-1/2'>{description}</p> : null}
        {children}
      </section>
    </div>
  );
}
