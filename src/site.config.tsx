import { RiGithubFill, RiMailFill, RiMap2Fill } from 'react-icons/ri';
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
export const siteDescription = {
  en: 'Looking for a freelance web developer to take your website to the next level? I am a full stack web developer based in Brazil.',
  pt: 'Procurando um desenvolvedor web freelance para levar seu site para o próximo nível? Sou um desenvolvedor web full stack no Brasil.'
};

export const siteKeywords = 'portfolio, web developer, full stack, freelance';
export const siteUrl = 'https://www.baraus.dev';

export const siteTitle = {
  en: `Full Stack Web Developer | ${siteName}`,
  pt: `Desenvolvedor Web Full Stack | ${siteName}`
};

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
