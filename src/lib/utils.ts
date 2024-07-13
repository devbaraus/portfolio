import { clsx, type ClassValue } from 'clsx';
import { DocumentNode, print } from 'graphql/language';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function directusImageLoader({
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
      revalidate: 60 * 60 * 12
    },
    ...options
  });

  if (!res.ok) throw new Error(await res.text());

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }
  return json.data as T;
}

export function prettifyLink(link: string) {
  return link.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '');
}

export function sortAlphabetically(a: string, b: string) {
  return a.localeCompare(b);
}
