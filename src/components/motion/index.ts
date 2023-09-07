import { Variants } from 'framer-motion';

export const CardVariants: Variants = {
  offscreen: {
    x: 0
  },
  onscreen: {
    x: '-100%',
    transition: {
      duration: 0.5
    }
  }
};
