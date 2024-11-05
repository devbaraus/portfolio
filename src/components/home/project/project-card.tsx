'use client';

import { RiEyeFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import IconAnimated from '@/components/motion/icon-animated';
import CloudinaryImage from '@/components/cloudinary-image';
import { CardVariants } from '@/components/motion';

type Props = {
  project: Project;
};

export default function ProjectCard({ project: { title, cover, published_on } }: Props) {
  function renderCard() {
    return (
      <Card className='group border-none bg-transparent'>
        <motion.div
          initial='offscreen'
          viewport={{ once: true, amount: 0.5 }}
          whileInView='onscreen'
        >
          <CardContent className='relative z-0 mb-6 overflow-hidden rounded p-0'>
            <motion.div
              className='absolute left-0 top-0 z-20 size-full skew-x-12 bg-background'
              variants={CardVariants}
            />
            <CloudinaryImage
              alt={`Mockup of ${title}`}
              className='z-10 aspect-video size-full object-cover transition-transform duration-500 group-hover:scale-105'
              height={300}
              src={cover!}
              title={title}
              width={500}
            />
            <IconAnimated
              className='absolute bottom-4 right-4 size-12 rounded-full bg-secondary text-background md:size-16'
              iconAppear={RiEyeFill}
              iconVisible={RiEyeFill}
              iconsClassName='text-2xl md:text-3xl'
            />
          </CardContent>
        </motion.div>
        <CardFooter className='flex-col items-start px-0'>
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5
              }
            }}
          >
            <CardTitle className='line-clamp-2 text-xl uppercase transition-colors duration-500 group-hover:text-primary'>
              {title}
            </CardTitle>

            {/*<CardDescription className='mt-auto line-clamp-4 text-base'>*/}
            {/*  {description}*/}
            {/*</CardDescription>*/}
          </motion.div>
        </CardFooter>
      </Card>
    );
  }

  return published_on ? (
    <Link
      href={published_on}
      target='_blank'
    >
      {renderCard()}
    </Link>
  ) : (
    renderCard()
  );
}
