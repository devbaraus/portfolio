'use client';

import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import { Button, ButtonProps } from '@/components/ui/button';

type Props = ButtonProps;
export default function ButtonTheme(props: Props) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      {...props}
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
    >
      {theme == 'dark' ? <RiMoonFill className='text-xl' /> : <RiSunFill className='text-xl' />}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
