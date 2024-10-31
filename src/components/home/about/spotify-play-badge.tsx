import { RiPauseFill, RiPlayFill } from 'react-icons/ri';
import { useRef, useState } from 'react';
import * as React from 'react';

import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Props = {
  url: string | null;
};

export default function SpotifyPlayBadge({ url }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackCurrentTime, setTrackCurrentTime] = useState(0);

  function handlePlay() {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }

  return (
    <>
      {url ? (
        <audio
          onDurationChange={(e) => {
            setTrackDuration(e.currentTarget.duration);
          }}
          onLoadedData={() => setLoaded(true)}
          onTimeUpdate={(e) => {
            setTrackCurrentTime(parseInt(e.currentTarget.currentTime.toString()));
          }}
          ref={audioRef}
          src={url ?? ''}
        />
      ) : null}

      <Badge
        className='w-full space-x-4 py-0 pl-0'
        variant='secondary'
      >
        <Button
          className='h-8 w-12'
          disabled={!loaded}
          onClick={handlePlay}
          size='icon'
        >
          <span className='sr-only'>Toggle play</span>
          {audioRef.current?.paused ? <RiPlayFill /> : <RiPauseFill />}
        </Button>
        <Progress
          aria-label='Track progress'
          className='grow'
          value={(trackCurrentTime * 100) / trackDuration}
        />
      </Badge>
    </>
  );
}
