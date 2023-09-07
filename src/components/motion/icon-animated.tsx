import { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { cn } from '@/lib/utils';

type Props = {
  iconVisible: IconType;
  iconAppear: IconType;
  iconsClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function IconAnimated({
  iconVisible: IconVisible,
  iconAppear: IconAppear,
  className,
  iconsClassName,
  ...props
}: Props) {
  return (
    <div
      className={cn('group relative aspect-square h-10 w-10 overflow-hidden', className)}
      {...props}
    >
      <IconVisible
        className={cn(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:top-full group-hover:translate-y-0',
          iconsClassName
        )}
      />

      <IconAppear
        className={cn(
          'absolute -top-full left-1/2 -translate-x-1/2 translate-y-0  transition-all duration-500 group-hover:top-1/2  group-hover:-translate-y-1/2',
          iconsClassName
        )}
      />
    </div>
  );
}
