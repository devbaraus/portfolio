import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { RiPauseFill, RiPlayFill } from 'react-icons/ri';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

type Props = {
  url: string | null;
};

export default function SpotifyPlayBadge(props: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackCurrentTime, setTrackCurrentTime] = useState(0);

  function onLoaded() {}

  function handlePlay() {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }

  useEffect(() => {
    console.log(props.url);
  }, [props.url]);

  return (
    <>
      <audio
        ref={audioRef}
        src={props.url}
        onTimeUpdate={(e) => {
          setTrackCurrentTime(parseInt(e.currentTarget.currentTime.toString()));
        }}
        onDurationChange={(e) => {
          setTrackDuration(e.currentTarget.duration);
        }}
        onLoadedData={() => setLoaded(true)}
      />
      <Badge
        variant='secondary'
        className='w-full space-x-4 py-0 pl-0'
      >
        <Button
          size='icon'
          className='h-8 w-12'
          disabled={!loaded}
          onClick={handlePlay}
        >
          {audioRef.current?.paused ? <RiPlayFill /> : <RiPauseFill />}
        </Button>
        <Slider
          className='grow'
          value={[trackCurrentTime]}
          max={trackDuration}
          disabled={!loaded}
          // onChange={(e) => {
          //   audioRef.current?.currentTime = Number(e.currentTarget.value);
          // }}
        ></Slider>
      </Badge>
    </>
  );
}
