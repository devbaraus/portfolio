import Link from 'next/link';
import { socialLinks } from '@/site.config';

import { Badge } from '@/components/ui/badge';
import BadgeLink from '@/components/ui/badge-link';

type Props = {};
export default function AboutSection(props: Props) {
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
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <li>
                  <Link
                    href={href}
                    target='_blank'
                  >
                    <BadgeLink
                      label={label}
                      Icon={Icon}
                    />
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
