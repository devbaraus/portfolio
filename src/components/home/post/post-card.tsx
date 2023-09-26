'use client';

import Link from 'next/link';
import { Article } from '@/gql/graphql';
import { motion, Variants } from 'framer-motion';
import { RiBookmark3Fill } from 'react-icons/ri';

import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import DirectusImage from '@/components/directus-image';
import IconAnimated from '@/components/motion/icon-animated';

type Props = {
  article: Article;
};

const cardVariants: Variants = {
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

export default function PostCard({ article: { title, lead, cover, published_on } }: Props) {
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
              className='absolute left-0 top-0 z-20 h-full w-full skew-x-12 bg-background'
              variants={cardVariants}
            />
            <DirectusImage
              alt={`Thumbnail of ${title}`}
              className='z-10 aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
              height={300}
              src={cover!.id}
              title={title!}
              width={500}
            />
            <IconAnimated
              className='absolute bottom-4 right-4 h-12 w-12 rounded-full bg-background'
              iconAppear={RiBookmark3Fill}
              iconVisible={RiBookmark3Fill}
              iconsClassName='text-2xl'
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

            <CardDescription className='mt-auto line-clamp-4 text-base'>{lead}</CardDescription>
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
