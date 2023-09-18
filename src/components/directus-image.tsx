import Image, { ImageProps } from 'next/image';

import { directusImageLoader } from '@/lib/utils';

type Props = { alt: string } & ImageProps;
export default function DirectusImage({ alt, ...props }: Props) {
  return (
    <Image
      loader={directusImageLoader}
      alt={alt}
      {...props}
    />
  );
}
