'use client';

import Link from 'next/link';
import { Project } from '@/gql/graphql';
import { motion, Variants } from 'framer-motion';
import { RiEyeFill } from 'react-icons/ri';

import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import DirectusImage from '@/components/directus-image';
import { CardVariants } from '@/components/motion';
import IconAnimated from '@/components/motion/icon-animated';
import TextAnimatedAppear, {
  TextAnimatedAppearVariant
} from '@/components/motion/text-animated-appear';

type Props = {
  project: Project;
};

export default function ProjectCard({
  project: { title, description, cover, published_on }
}: Props) {
  function renderCard() {
    return (
      <Card className='group border-none bg-transparent'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.5 }}
        >
          <CardContent className='relative z-0 mb-6 overflow-hidden rounded p-0'>
            <motion.div
              variants={CardVariants}
              className='absolute left-0 top-0 z-20 h-full w-full skew-x-12 bg-background'
            />
            <DirectusImage
              id={cover!.id}
              alt={title!}
              className='z-10 aspect-video h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
              width={500}
              height={300}
            />
            <IconAnimated
              className='absolute bottom-4 right-4 h-16 w-16 rounded-full bg-secondary text-background'
              iconVisible={RiEyeFill}
              iconAppear={RiEyeFill}
              iconsClassName='text-3xl'
            />
          </CardContent>
        </motion.div>

        <CardFooter className='flex-col items-start px-0'>
          <motion.div
            variants={TextAnimatedAppearVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
          >
            <CardTitle className='line-clamp-2 text-xl uppercase transition-colors duration-300 group-hover:text-primary'>
              <TextAnimatedAppear text={title!} />
            </CardTitle>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <CardDescription className='mt-auto line-clamp-4 text-base'>
              {description}
            </CardDescription>
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
