import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';
import SectionDescription from '@/components/section/section-description';
import SectionSubtitle from '@/components/section/section-subtitle';
import SectionTitle from '@/components/section/section-title';

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
        {subtitle ? <SectionSubtitle>{subtitle}</SectionSubtitle> : null}
        {title ? <SectionTitle>{title}</SectionTitle> : null}
        {description ? <SectionDescription>{description}</SectionDescription> : null}
        {children}
      </section>
    </div>
  );
}
