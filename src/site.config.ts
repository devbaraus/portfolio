import {
  RiBuilding2Fill,
  RiDiscordFill,
  RiEyeFill,
  RiGithubFill,
  RiLayout2Fill,
  RiLinkedinFill,
  RiRocketFill
} from 'react-icons/ri';
import {
  SiBootstrap,
  SiDjango,
  SiFigma,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPycharm,
  SiSvelte,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVuedotjs,
  SiWebstorm
} from 'react-icons/si';

export const siteLanguage = 'en';
export const siteName = 'My Site';
export const siteDescription = 'My site description';
export const siteKeywords = 'my,site,keywords';
export const siteUrl = 'https://my-site.com';
export const siteImage = `${siteUrl}/images/og-image.jpg`;

export const contact = [
  {
    label: 'Email',
    action: () => {},
    content: 'me@baraus.dev'
  },
  {
    label: 'Phone',
    action: () => {},
    content: '+55 11 99999-9999'
  }
];
export const socialLinks = [
  {
    label: 'GitHub',
    icon: RiGithubFill,
    href: 'https://github.com/devbaraus'
  },
  {
    label: 'LinkedIn',
    icon: RiLinkedinFill,
    href: 'https://discord.com/users/765572736214761512'
  },
  {
    label: 'Discord',
    icon: RiDiscordFill,
    href: 'https://discord.com/users/765572736214761512'
  }
];

export const serviceCards = [
  {
    title: 'Web Development',
    description:
      'Your website is the face of your business, which is why you need to invest as much energy into it as you do into the look and feel. That is why we focus on creating websites that are adaptable and customer-focused so they perfectly suit the needs of your business.',
    icon: RiLayout2Fill
  },
  {
    title: 'Website Audit',
    description:
      "Is your website not performing to your expectations, and isn't it delivering the results you desire? Allow me to provide you with a free website review and help you identify opportunities for improvement and get on the path to online success.",
    icon: RiEyeFill
  },
  {
    title: 'Helping You Grow',
    description:
      "Starting a business can be challenging, but your branding and website should not be one of them. That's where I come in. I provide thorough web design, Webflow development and branding services so startups can get ahead on their way to reaching their online goals.",
    icon: RiRocketFill
  },
  {
    title: 'Helping Established Businesses',
    description:
      "Established businesses recognise the significance of an impressive online presence to thrive in today's market. To support your journey towards digital success, I offer a suite of specialised services like web design, Webflow development, and website re-designs. Together, we can unlock your business's full potential and secure a prominent position in the digital realm.",
    icon: RiBuilding2Fill
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
    }
  ],
  [
    {
      label: 'NextJS',
      icon: SiNextdotjs
    },
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
      label: 'Figma',
      icon: SiFigma
    },
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
    }
  ]
];
