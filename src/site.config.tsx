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
import { RiGithubFill, RiMailFill, RiMap2Fill } from 'react-icons/ri';
import { v7 } from 'uuid';

export const siteName = 'BARAUS';
export const siteDescription = {
  en: 'Looking for a freelance software engineer to take your website to the next level? I am a full stack web developer based in Brazil.',
  pt: 'Procurando um engenheiro de software freelance para levar seu site para o próximo nível? Sou um desenvolvedor web full stack no Brasil.'
};

export const siteKeywords = 'portfolio, web developer, software engineer, full stack, freelance';
export const siteUrl = 'https://www.baraus.dev';

export const siteTitle = {
  en: `Full Stack Software Engineer • ${siteName}`,
  pt: `Engenheiro de Software Full Stack • ${siteName}`
};

export const socialLinks = [
  {
    id: v7(),
    label: 'devbaraus',
    title: 'GitHub',
    icon: RiGithubFill,
    href: 'https://github.com/devbaraus',
    footer: true
  },
  {
    id: v7(),
    label: 'devbaraus',
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/devbaraus',
    icon: SiLinkedin,
    footer: true
  },
  {
    id: v7(),
    label: 'devbaraus',
    title: 'Instagram',
    href: 'https://instagram.com/devbaraus',
    icon: SiInstagram,
    footer: true
  },
  {
    id: v7(),
    label: 'baraus.dev',
    title: 'Discord',
    href: 'https://discord.com/users/765572736214761512',
    icon: SiDiscord,
    footer: true
  },
  {
    id: v7(),
    label: 'me@baraus.dev',
    title: 'Email',
    href: 'mailto:me@baraus.dev',
    icon: RiMailFill
  },
  {
    id: v7(),
    label: '+55 62 99964-9042',
    title: 'Phone',
    href: 'https://api.whatsapp.com/send?phone=+5562999649042&text=Hello%20BARAUS!',
    icon: SiWhatsapp
  },
  {
    id: v7(),
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
