import { RiDiscordFill, RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

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
