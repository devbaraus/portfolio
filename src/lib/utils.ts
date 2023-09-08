import { clsx, type ClassValue } from 'clsx';
import { DocumentNode, print } from 'graphql/language';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function directusImageAsset(ID: string, options?: Record<string, any>) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/assets/${ID}`);

  options = {
    format: 'webp',
    ...options
  };

  url.search = new URLSearchParams(options).toString();

  return url.toString();
}

export function generateImageSrcSet(ID: string, widths: number[]) {
  const sources = widths.reduce(
    (acc, width) => {
      const url = directusImageAsset(ID, { width });
      return { ...acc, [width]: url };
    },
    {} as Record<string, number>
  );

  return Object.entries(sources)
    .map(([key, value]) => `${value} ${key}w`)
    .join(', ');
}

export async function fetcherGQL<T>(
  query: DocumentNode,
  variables?: Record<string, any>,
  options?: RequestInit
) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PRIVATE_API_TOKEN}`
    },
    body: JSON.stringify({ query: print(query), variables }),
    next: {
      revalidate: 60 * 5
    },
    ...options
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }
  return json.data as T;
}
