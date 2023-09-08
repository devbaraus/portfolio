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
    url: siteUrl,
    siteName: siteName
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
