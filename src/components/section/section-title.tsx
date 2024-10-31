'use client';

import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

import TextAnimatedAppear, {
  TextAnimatedAppearVariant
} from '@/components/motion/text-animated-appear';
import { cn } from '@/lib/utils';

type Props = {} & HTMLAttributes<HTMLHeadingElement>;

export default function SectionTitle({ children, className, ...props }: Props) {
  return (
    <motion.div
      initial='hidden'
      variants={TextAnimatedAppearVariant}
      viewport={{ once: true, amount: 0.5 }}
      whileInView='visible'
    >
      <h2
        className={cn('text-3xl font-bold uppercase text-primary', className)}
        {...props}
      >
        <TextAnimatedAppear text={children as string} />
      </h2>
    </motion.div>
  );
}
