'use client';

import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import TextAnimatedAppear, {
  TextAnimatedAppearVariant
} from '@/components/motion/text-animated-appear';

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
