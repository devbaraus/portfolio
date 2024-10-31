import { type HTMLMotionProps, motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

type Props = { text: string } & HTMLMotionProps<'span'> & HTMLAttributes<HTMLSpanElement>;

export const TextAnimatedAppearVariant = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 * i }
  })
};

export const ChildVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  },
  hidden: {
    opacity: 0,
    x: 40,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
};
export default function TextAnimatedAppear({ text, ...props }: Props) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={ChildVariant}
          {...props}
        >
          {word}{' '}
        </motion.span>
      ))}
    </>
  );
}
