import './globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteDescription, siteKeywords, siteLanguage, siteName, siteUrl } from '@/site.config';

import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

const poppins = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName
  },
  description: siteDescription,
  keywords: siteKeywords,
  openGraph: {
    type: 'website',
    locale: siteLanguage,
    url: `${siteUrl}/logo-light.png`,
    siteName: siteName
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html lang={siteLanguage}>
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
