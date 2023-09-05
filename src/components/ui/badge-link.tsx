import { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { cn } from '@/lib/utils';

type Props = {
  label: string;
  Icon?: IconType;
  type?: 'button' | 'submit' | 'reset' | 'div';
} & HTMLAttributes<HTMLDivElement | HTMLButtonElement>;
export default function BadgeLink({ label, Icon, className, type, ...props }: Props) {
  if (type === 'button' || type === 'submit' || type === 'reset') {
    return (
      <button
        {...props}
        type={type}
        className={cn(
          'inline-flex items-center rounded-full border px-4 py-1 text-sm transition-colors hover:text-primary',

          className
        )}
      >
        {Icon ? <Icon className='mr-2 inline-block text-base' /> : null}
        <span>{label}</span>
      </button>
    );
  }

  return (
    <div
      {...props}
      className={cn(
        'inline-flex items-center rounded-full border px-4 py-1 text-sm transition-colors hover:text-primary',
        className
      )}
    >
      {Icon ? <Icon className='mr-2 inline-block text-base' /> : null}
      <span>{label}</span>
    </div>
  );
}
