import './globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Aleo, Inter, Poppins } from 'next/font/google';

import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

const poppins = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    template: '%s | baraus.dev',
    default: 'baraus.dev' // a default is required when creating a template
  },
  description: ''
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='pt'>
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
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
