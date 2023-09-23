import Image, { ImageProps } from 'next/image';

import { directusImageLoader } from '@/lib/utils';

type Props = { alt: string } & ImageProps;
export default function DirectusImage({ alt, ...props }: Props) {
  return (
    <Image
      alt={alt}
      loader={directusImageLoader}
      {...props}
    />
  );
}
