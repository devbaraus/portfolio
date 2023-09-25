import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BARAUS',
    short_name: 'BARAUS',
    description:
      'Looking for a freelance software engineer to take your website to the next level? I am a full stack web developer based in Brazil.',

    theme_color: '#F97317',
    background_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
    start_url: '/',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  };
}
