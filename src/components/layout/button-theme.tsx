'use client';

import { HTMLAttributes } from 'react';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import { cn } from '@/lib/utils';

type Props = HTMLAttributes<HTMLButtonElement>;
export default function ButtonTheme(props: Props) {
  const { setTheme, theme } = useTheme();

  return (
    <button
      {...props}
      className={cn('p-4', props.className)}
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
    >
      {theme == 'dark' ? <RiMoonFill className='text-xl' /> : <RiSunFill className='text-xl' />}
      <span className='sr-only'>Toggle theme</span>
    </button>
  );
}
