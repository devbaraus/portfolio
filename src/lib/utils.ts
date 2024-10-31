import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cloudinaryImageLoader({
  src,
  width,
  quality
}: {
  src: string;
  width?: number;
  quality?: number;
}) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/assets/${src}`);

  const options = {
    format: 'webp',
    width,
    quality: quality || 75
  };

  url.search = new URLSearchParams(options as Record<string, any>).toString();

  return url.toString();
}

export function prettifyLink(link: string) {
  return link.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '');
}

export function sortAlphabetically(a: string, b: string) {
  return a.localeCompare(b);
}
