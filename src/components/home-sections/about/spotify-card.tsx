'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import locales from '@/locales/about/cards';
import { SpotifyData } from '@/types';
import { SiSpotify } from 'react-icons/si';

import { useLocale } from '@/hooks/use-locale';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SpotifyPlayBadge from '@/components/home-sections/about/spotify-play-badge';
import IconAnimated from '@/components/motion/icon-animated';

type Props = {};

export default function SpotifyCard(props: Props) {
  const [data, setData] = useState<SpotifyData>();
  const timer = useRef<NodeJS.Timeout>();

  const locale = useLocale();
  const dictionary = locales[locale];

  function fetchSpotifyData() {
    fetch('/api/spotify')
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        if (data.currentlyPlaying) {
          const duration = data?.currentlyPlaying?.duration_ms;

          timer.current = setTimeout(() => {
            fetchSpotifyData();
          }, duration / 2);
        }
      });
  }

  useEffect(() => {
    fetchSpotifyData();

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  if (!data) return null;

  const trackName = data?.currentlyPlaying?.name ?? data?.recentlyPlayed?.track.name;
  const trackArtists = data?.currentlyPlaying
    ? data?.currentlyPlaying?.artists?.map((i) => i.name).join(', ')
    : data?.recentlyPlayed?.track.artists?.map((i) => i.name).join(', ');
  const trackImage =
    data?.currentlyPlaying?.album.images[0].url ?? data?.recentlyPlayed?.track.album.images[0].url;

  return (
    <Card className='w-full overflow-hidden bg-foreground text-background'>
      <CardContent className='relative h-32 overflow-hidden p-0'>
        <Image
          src={trackImage}
          alt='Muggs Shop'
          className='absolute left-0 top-0 w-full rounded object-cover object-center brightness-75'
          width={500}
          height={500}
        />
        <Badge className='absolute left-2 top-2 bg-opacity-60'>
          {data.currentlyPlaying
            ? locales[locale].spotify.nowPlaying
            : locales[locale].spotify.recentlyPlayed}
        </Badge>
      </CardContent>
      <CardFooter className='relative block space-y-4'>
        <Image
          src={
            data.currentlyPlaying
              ? data.currentlyPlaying?.album.images[0].url
              : data.recentlyPlayed?.track.album.images[0].url
          }
          alt={trackName}
          className='absolute -top-20 left-1/2 aspect-video h-24 w-24 -translate-x-1/2 rounded-full object-cover'
          width={500}
          height={500}
        />

        <div className='flex w-full justify-between pt-8'>
          <div>
            <p>{trackName}</p>
            <p>{trackArtists}</p>
          </div>
          <Link
            href={
              data.currentlyPlaying
                ? data.currentlyPlaying?.external_urls.spotify
                : data.recentlyPlayed?.track.external_urls.spotify
            }
            target='_blank'
          >
            <IconAnimated
              className='hover-bg-secondary/80 rounded bg-secondary'
              iconVisible={SiSpotify}
              iconAppear={SiSpotify}
            />
          </Link>
        </div>
        <Separator className='bg-secondary' />
        <div className='flex flex-wrap gap-4'>
          <SpotifyPlayBadge
            url={
              data.currentlyPlaying
                ? data.currentlyPlaying?.preview_url
                : data.recentlyPlayed?.track.preview_url
            }
          />
        </div>
      </CardFooter>
    </Card>
  );
}
