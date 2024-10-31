import '../globals.css';

import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Script from 'next/script';
import { Metadata } from 'next';

import { siteDescription, siteKeywords, siteName, siteTitle, siteUrl } from '@/site.config';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { Lang, PageParams } from '@/types';

const poppins = Inter({
  subsets: ['latin']
});

const ogImages = (locale: Lang) => [
  {
    alt: siteDescription[locale],
    url: `${siteUrl}/${locale}/og-wide.png`,
    width: 1200,
    height: 630
  }
];

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  return {
    authors: [
      {
        name: 'Bruno de Araújo Alves',
        url: siteUrl
      }
    ],
    metadataBase: new URL('https://acme.com'),
    title: {
      template: `%s • ${siteName}`,
      default: siteTitle[locale]
    },
    description: siteDescription[locale],
    keywords: siteKeywords,
    robots: {
      follow: true,
      index: true
    },
    twitter: {
      title: siteTitle[locale],
      description: siteDescription[locale],
      images: ogImages(locale),
      creator: '@devbaraus',
      site: siteUrl
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: siteUrl,
      title: siteTitle[locale],
      images: ogImages(locale),
      description: siteDescription[locale],
      siteName: siteName
    },
    icons: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon'
      }
    ],
    manifest: 'manifest.webmanifest'
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
} & PageParams) {
  const { locale } = await params;
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body className={poppins.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          <TooltipProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        {isProduction ? (
          <>
            <script
              data-domain='baraus.dev'
              defer
              src='https://plausible.lab.baraus.dev/js/script.file-downloads.outbound-links.js'
            />
            <Script src='/main.js' />
          </>
        ) : null}
      </body>
    </html>
  );
}

export const revalidate = 86400;
