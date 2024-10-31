import { HTMLAttributes, ReactNode } from 'react';

import SectionDescription from '@/components/section/section-description';
import SectionSubtitle from '@/components/section/section-subtitle';
import SectionTitle from '@/components/section/section-title';
import { cn } from '@/lib/utils';

type Props = {
  subtitle?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  actionChild?: ReactNode;
  parentClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Section({
  subtitle,
  title,
  description,
  children,
  parentClassName,
  actionChild,
  className,
  ...props
}: Props) {
  return (
    <div className={cn('py-12 md:py-32', parentClassName)}>
      <section
        {...props}
        className={cn('container scroll-mt-32 space-y-4', className)}
      >
        {subtitle ? <SectionSubtitle>{subtitle}</SectionSubtitle> : null}
        {title ? <SectionTitle>{title}</SectionTitle> : null}
        {description ? <SectionDescription>{description}</SectionDescription> : null}

        {children}
        {actionChild ? (
          <div className='mt-8 flex items-center justify-center'>{actionChild}</div>
        ) : null}
      </section>
    </div>
  );
}
