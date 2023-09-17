import { RiClipboardFill, RiGithubFill, RiMailFill, RiMap2Fill } from 'react-icons/ri';
import {
  SiBootstrap,
  SiDirectus,
  SiDiscord,
  SiDjango,
  SiDocker,
  SiFigma,
  SiGit,
  SiInstagram,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiPlausibleanalytics,
  SiPostgresql,
  SiPycharm,
  SiSvelte,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVuedotjs,
  SiWebstorm,
  SiWhatsapp
} from 'react-icons/si';

export const siteName = 'BARAUS';
export const siteDescription =
  'Looking for a freelance web developer to take your website to the next level? I am a freelance full stack web developer based in Brazil.';
export const siteKeywords = 'portfolio, web developer, full stack, freelance';
export const siteUrl = 'https://www.baraus.dev';

export const contact = [
  {
    label: 'Email',
    action: (toast: Function) => {
      navigator.clipboard
        .writeText('me@baraus.dev')
        .then(() => {
          toast({
            label: (
              <p className='space-x-2'>
                <RiClipboardFill className='inline-block text-xl' />
                <span>Copied to clipboard!</span>
              </p>
            )
          });
        })
        .catch(() => {
          toast({
            variant: 'destructive',
            label: (
              <p className='space-x-2'>
                <RiClipboardFill className='inline-block text-xl' />
                <span>Failed to copy to clipboard!</span>
              </p>
            )
          });
        });
    },
    content: 'me@baraus.dev'
  },
  {
    label: 'Phone',
    action: (toast: Function) => {
      navigator.clipboard
        .writeText('+5562993794290')
        .then(() => {
          toast({
            label: (
              <p className='space-x-2'>
                <RiClipboardFill className='inline-block text-xl' />
                <span>Copied to clipboard!</span>
              </p>
            )
          });
        })
        .catch(() => {
          toast({
            variant: 'destructive',
            label: (
              <p className='space-x-2'>
                <RiClipboardFill className='inline-block text-xl' />
                <span>Failed to copy to clipboard!</span>
              </p>
            )
          });
        });
    },
    content: '+55 62 99379-4290'
  }
];
export const socialLinks = [
  {
    label: 'devbaraus',
    title: 'GitHub',
    icon: RiGithubFill,
    href: 'https://github.com/devbaraus',
    footer: true
  },
  {
    label: 'devbaraus',
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/devbaraus',
    icon: SiLinkedin,
    footer: true
  },
  {
    label: '@devbaraus',
    title: 'Instagram',
    href: 'https://instagram.com/devbaraus',
    icon: SiInstagram,
    footer: true
  },
  {
    label: 'baraus.dev',
    title: 'Discord',
    href: 'https://discord.com/users/765572736214761512',
    icon: SiDiscord,
    footer: true
  },
  {
    label: 'me@baraus.dev',
    title: 'Email',
    href: 'mailto:me@baraus.dev',
    icon: RiMailFill
  },
  {
    label: '+55 62 99379-4290',
    title: 'Phone',
    href: 'https://api.whatsapp.com/send?phone=+5562993794290&text=Hello%20BARAUS!',
    icon: SiWhatsapp
  },
  {
    label: 'Anápolis, Goiás, Brazil',
    title: 'Location',
    icon: RiMap2Fill
  }
];

export const serviceStack = [
  [
    {
      label: 'Postgres',
      icon: SiPostgresql
    },
    {
      label: 'MongoDB',
      icon: SiMongodb
    },
    {
      label: 'Django',
      icon: SiDjango
    },
    {
      label: 'NextJS',
      icon: SiNextdotjs
    }
  ],
  [
    {
      label: 'VueJS',
      icon: SiVuedotjs
    },
    {
      label: 'Svelte',
      icon: SiSvelte
    },
    {
      label: 'TailwindCSS',
      icon: SiTailwindcss
    },
    {
      label: 'Bootstrap',
      icon: SiBootstrap
    }
  ],
  [
    {
      label: 'WebStorm',
      icon: SiWebstorm
    },
    {
      label: 'PyCharm',
      icon: SiPycharm
    },
    {
      label: 'Visual Studio Code',
      icon: SiVisualstudiocode
    },
    {
      label: 'Git',
      icon: SiGit
    }
  ],
  [
    {
      label: 'Directus',
      icon: SiDirectus
    },
    {
      label: 'Figma',
      icon: SiFigma
    },
    {
      label: 'Plausible Analytics',
      icon: SiPlausibleanalytics
    },
    {
      label: 'Docker',
      icon: SiDocker
    }
  ]
];
