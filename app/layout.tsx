import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://knbl.co'),
  title: {
    default: 'KNBL — Outshine the Noise',
    template: '%s | KNBL',
  },
  description: 'KNBL is a strategy-driven creative collective that turns insights into impact. Creative marketing and AI-powered productions for ambitious brands.',
  keywords: ['creative agency', 'marketing', 'brand strategy', 'AI productions', 'video production', 'Tel Aviv', 'branding', 'design', 'digital marketing'],
  authors: [{ name: 'KNBL' }],
  creator: 'KNBL',
  publisher: 'KNBL',
  openGraph: {
    type: 'website',
    siteName: 'KNBL',
    locale: 'en_US',
    url: 'https://knbl.co',
    title: 'KNBL — Outshine the Noise',
    description: 'Strategy-driven creative collective. AI-powered marketing for ambitious brands.',
    images: [
      {
        url: '/og_banner.png',
        width: 1200,
        height: 630,
        alt: 'KNBL — Outshine the Noise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@knbl',
    title: 'KNBL — Outshine the Noise',
    description: 'Strategy-driven creative collective. AI-powered marketing for ambitious brands.',
    images: ['/og_banner.png'],
  },
  icons: {
    icon: '/images/logo/knbl.png',
  },
};

import BackToTop from './components/BackToTop';

import SmoothScroll from '@/components/ui/SmoothScroll';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N7VP8RX');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7VP8RX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <BackToTop />
      </body>
    </html>
  );
}
