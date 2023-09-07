import { HTMLAttributes } from 'react';
import { motion, Variants } from 'framer-motion';
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
  title: string;
  description: string;
  icon: IconType;
};

type Props = {
  service: Service;
  variants: Variants;
} & HTMLAttributes<HTMLDivElement>;

export default function ServiceCard({
  service: { title, description, icon: Icon },
  className,
  variants,
  ...props
}: Props) {
  return (
    <motion.div variants={variants}>
      <Card
        className={cn('sticky', className)}
        {...props}
      >
        <CardHeader>
          <div className='flex gap-4'>
            <Badge className='aspect-square'>
              <Icon className='text-4xl' />
            </Badge>
            <div>
              <CardTitle className='text-2xl'>{title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </Card>
    </motion.div>
  );
}
