import { ImgHTMLAttributes } from 'react';

import { directusImageAsset, generateImageSrcSet } from '@/lib/utils';

type Props = {
  id: string;
  widths?: number[];
  alt: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'>;

export default function DirectusImage({ id, widths = [128, 256, 384, 512, 640], ...props }: Props) {
  return (
    <img
      src={directusImageAsset(id)}
      srcSet={generateImageSrcSet(id, widths)}
      {...props}
    />
  );
}
