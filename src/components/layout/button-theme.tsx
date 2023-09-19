'use client';

import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

type Props = ButtonProps;

type Theme = 'dark' | 'light' | 'system';

export default function ButtonTheme({ className, ...props }: Props) {
  const { setTheme, theme, systemTheme } = useTheme();

  let oppositeTheme: Theme;

  if (theme === 'system') {
    oppositeTheme = systemTheme === 'dark' ? 'light' : 'dark';
  } else {
    oppositeTheme = theme === 'dark' ? 'light' : 'dark';
  }

  console.log(oppositeTheme);

  return (
    <Button
      {...props}
      className={cn('rounded-full', className)}
      variant='ghost'
      size='icon'
      onClick={() => setTheme(oppositeTheme)}
    >
      {oppositeTheme != 'light' ? (
        <RiMoonFill className='text-xl' />
      ) : (
        <RiSunFill className='text-xl' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
