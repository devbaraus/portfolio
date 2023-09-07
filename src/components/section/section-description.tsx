'use client';

import { HTMLAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type Props = {} & HTMLMotionProps<'p'> & HTMLAttributes<HTMLParagraphElement>;
export default function SectionDescription({ children, className, ...props }: Props) {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{ once: true, amount: 0.5 }}
      className={cn('text-lg text-secondary/80 md:w-1/2', className)}
      {...props}
    >
      {children}
    </motion.p>
  );
}
