import { CldImage, CldImageProps } from 'next-cloudinary';

export default function CloudinaryImage({ alt, ...props }: CldImageProps) {
  return (
    <CldImage
      alt={alt}
      {...props}
    />
  );
}
