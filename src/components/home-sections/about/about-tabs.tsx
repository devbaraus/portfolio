'use client';

import { useEffect, useRef, useState } from 'react';
import { SiGithub, SiSpotify } from 'react-icons/si';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GithubCard from '@/components/home-sections/about/github-card';
import SpotifyCard from '@/components/home-sections/about/spotify-card';

type Props = {};

export default function AboutTabs(props: Props) {
  const [currentTab, setCurrentTab] = useState(0);
  const timer = useRef<NodeJS.Timeout>();

  const cards = [
    // {
    //   label: 'Discord',
    //   key: 'discord',
    //   icon: SiDiscord,
    //   content: DiscordCard
    // },
    {
      label: 'Spotify',
      key: '_spotify',
      icon: SiSpotify,
      content: SpotifyCard
    },
    {
      label: 'GitHub',
      key: 'github',
      icon: SiGithub,
      content: GithubCard
    }
  ];

  const cardCurrent = cards[currentTab];

  function handleCLick(index: number) {
    timer.current && clearInterval(timer.current);
    setCurrentTab(index);
  }

  useEffect(() => {
    timer.current = setInterval(() => setCurrentTab((prev) => (prev + 1) % cards.length), 15000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <Tabs
      defaultValue={cards[0].key}
      value={cardCurrent.key}
      className='w-full space-x-2 md:flex'
    >
      <TabsList className='flex items-start justify-start gap-4 bg-transparent md:flex-col '>
        {cards.map(({ label, key, icon: Icon }, index) => (
          <TabsTrigger
            key={key}
            value={key}
            onClick={() => handleCLick(index)}
            asChild
          >
            <Button
              variant='outline'
              className='items-center gap-2 data-[state="active"]:border-none data-[state="active"]:bg-primary data-[state="active"]:text-white'
            >
              <Icon />
              <span>{label}</span>
            </Button>
          </TabsTrigger>
        ))}
      </TabsList>

      {cards.map(({ content: Content, key }) => (
        <TabsContent
          key={key}
          value={key}
          className='w-full data-[state="active"]:block data-[state="inactive"]:hidden'
          forceMount
        >
          <Content />
        </TabsContent>
      ))}
    </Tabs>
  );
}
