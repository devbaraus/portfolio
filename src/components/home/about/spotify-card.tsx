'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SiSpotify } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

import SpotifyPlayBadge from '@/components/home/about/spotify-play-badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import IconAnimated from '@/components/motion/icon-animated';
import { Separator } from '@/components/ui/separator';
import { useLocale } from '@/hooks/use-locale';
import { Badge } from '@/components/ui/badge';
import locales from '@/locales/about/cards';
import { SpotifyData } from '@/types';

type Props = {};

export default function SpotifyCard(props: Props) {
  const [data, setData] = useState<SpotifyData>();
  const timer = useRef<NodeJS.Timeout>();

  const locale = useLocale();

  const fetchSpotifyData = useCallback(() => {
    fetch('/api/spotify', {
      next: {
        revalidate: 60 * 60 * 12
      }
    })
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
  }, []);

  useEffect(() => {
    fetchSpotifyData();

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [fetchSpotifyData]);

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
          alt='Muggs Shop'
          className='absolute left-0 top-0 w-full rounded object-cover object-center brightness-75'
          height={500}
          src={trackImage}
          width={500}
        />
        <Badge className='absolute left-2 top-2 bg-opacity-60'>
          {data.currentlyPlaying
            ? locales[locale].spotify.nowPlaying
            : locales[locale].spotify.recentlyPlayed}
        </Badge>
      </CardContent>
      <CardFooter className='relative block space-y-4'>
        <Image
          alt={trackName}
          className='absolute -top-20 left-1/2 aspect-video size-24 -translate-x-1/2 rounded-full object-cover'
          height={500}
          src={
            data.currentlyPlaying
              ? data.currentlyPlaying?.album.images[0].url
              : data.recentlyPlayed?.track.album.images[0].url
          }
          width={500}
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
            <span className='sr-only'>Spotify track link</span>
            <IconAnimated
              className='hover-bg-secondary/80 rounded bg-secondary'
              iconAppear={SiSpotify}
              iconVisible={SiSpotify}
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
