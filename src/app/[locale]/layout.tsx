import '../globals.css';

import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { siteDescription, siteKeywords, siteName, siteUrl } from '@/site.config';
import { PageParams } from '@/types';

import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Inter({
  subsets: ['latin']
});

const ogImages = [
  {
    url: `${siteUrl}/og-wide.png`,
    width: 1200,
    height: 630
  },
  {
    url: `${siteUrl}/og-square.png`,
    width: 512,
    height: 512
  }
];

export function generateMetadata({ params: { locale } }: PageParams) {
  return {
    title: {
      template: `%s | ${siteName}`,
      default: `${
        { en: 'Full Stack Web Developer', pt: 'Desenvolvedor Web Full Stack' }[locale]
      } | ${siteName}`
    },
    description: siteDescription[locale],
    keywords: siteKeywords,
    robots: {
      follow: true,
      index: true
    },
    twitter: {
      title: siteName,
      description: siteDescription[locale],
      images: ogImages,
      creator: '@devbaraus',
      site: siteUrl
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: siteUrl,
      title: siteName,
      images: ogImages,
      siteName: siteName
    }
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
} & PageParams) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html lang={locale}>
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
            {isProduction ? (
              <script
                defer
                data-domain='baraus.dev'
                src='https://plausible.lab.baraus.dev/js/script.js'
              />
            ) : null}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
