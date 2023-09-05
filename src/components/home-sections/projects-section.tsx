import Link from 'next/link';
import { RiDiscordFill, RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

import { Badge } from '@/components/ui/badge';

type Props = {};
export default function AboutSection(props: Props) {
  const socials = [
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

  return (
    <section
      id='about'
      className='container'
    >
      <div className='grid grid-cols-2 gap-8'>
        <div className='flex flex-col justify-between'>
          <Badge className='w-max uppercase'>About</Badge>
          <div className='space-y-4'>
            <p className='uppercase'>Social Links</p>
            <ul className='flex items-center gap-4'>
              {socials.map(({ label, icon: Icon, href }) => (
                <li>
                  <Link
                    href={href}
                    target='_blank'
                    className='inline-flex items-center rounded-full border px-4 py-1 transition-colors hover:text-primary'
                  >
                    <Icon className='mr-2 inline-block text-lg' />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p>
            Welcome to my world! I am Daniel, a dedicated and creative freelance web designer and
            Webflow developer based in Bournemouth, UK striving to create projects that I can be
            proud of. I am a member of the Awwwards young jury, Webflow professional partner and I
            specialise in delivering digital services including bespoke web design and Webflow
            development.
          </p>
          <p>
            With a passion for technology and a focus on web design and Webflow development, I
            create beautiful digital experiences that drive value for my clients and their
            customers. I believe in taking a collaborative approach to my work and I work closely
            with my clients to ensure that every project meets their unique needs and exceeds their
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
