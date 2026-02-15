import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KNBL - Outshine the noise. We make brands unforgettable',
  description: 'Creative marketing for ambitious brands. Strategy-driven creative collective that turns insights into impact.',
  keywords: ['creative agency', 'marketing', 'strategy', 'branding', 'design'],
  icons: {
    icon: '/images/logo/knbl.png',
  },
};

import BackToTop from './components/BackToTop';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>

      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
