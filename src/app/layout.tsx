import './globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Aleo, Poppins } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
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
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
