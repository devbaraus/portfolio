'use client';

import { HTMLAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type Props = {} & HTMLMotionProps<'p'> & HTMLAttributes<HTMLParagraphElement>;
export default function SectionDescription({ children, className, ...props }: Props) {
  return (
    <motion.p
      className={cn('text-lg text-secondary/80 md:w-1/2', className)}
      initial={{
        opacity: 0,
        y: 20
      }}
      viewport={{ once: true, amount: 0.5 }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      {...props}
    >
      {children}
    </motion.p>
  );
}
