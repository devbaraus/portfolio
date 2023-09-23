import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { IconType } from 'react-icons';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ServiceCardContainerVariant = {
  hidden: { y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 * i }
  })
};

export const SerivceCardChildVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
};

type Service = {
  label: string;
  description: string;
  icon: IconType;
};

type Props = {
  service: Service;
  variants: Variants;
} & HTMLMotionProps<'div'>;

export default function ServiceCard({
  service: { label, description, icon: Icon },
  className,
  variants,
  ...props
}: Props) {
  return (
    <motion.div
      className={cn('sticky', className)}
      variants={variants}
      {...props}
    >
      <Card>
        <CardHeader>
          <div className='flex gap-4'>
            <Badge className='aspect-square'>
              <Icon className='text-4xl' />
            </Badge>
            <div>
              <CardTitle className='text-2xl'>{label}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </Card>
    </motion.div>
  );
}
