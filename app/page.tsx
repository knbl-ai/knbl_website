import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import { JsonLd } from './components/JsonLd';

export const metadata: Metadata = {
  title: 'Creative Agency for Ambitious Brands',
  description: "We're KNBL — a strategy-driven creative collective built for what's next. AI-powered storytelling, precision marketing, and brand strategy that turns insights into impact.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'KNBL — Outshine the Noise',
    description: "Strategy-driven creative collective. AI-powered marketing for ambitious brands.",
    url: '/',
  },
};

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KNBL',
    url: 'https://knbl.co',
    logo: 'https://knbl.co/images/logo/knbl.png',
    description: 'Strategy-driven creative collective that turns insights into impact. Creative marketing and AI-powered productions for ambitious brands.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '114 Derech Menachem Begin',
      addressLocality: 'Tel Aviv',
      addressCountry: 'IL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+972-3-632-2242',
      contactType: 'customer service',
      email: 'info@knbl360.com',
    },
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KNBL',
    url: 'https://knbl.co',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://knbl.co/work?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does KNBL offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KNBL offers brand strategy, creative direction, AI-powered video productions, digital campaigns, social media marketing, motion design, and data-driven storytelling for ambitious brands.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is AI Productions at KNBL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Productions at KNBL uses generative AI to create commercial video content, virtual spokespersons, motion design, and immersive brand experiences that would be impossible or prohibitively expensive with traditional production methods.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is KNBL located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KNBL is located at 114 Derech Menachem Begin, Tel Aviv, Israel. We serve clients both locally and internationally.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact KNBL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach KNBL by email at info@knbl360.com, by phone at +972 3 632 2242, or by visiting our contact page at https://knbl.co/contact.',
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <HomePageClient />
    </>
  );
}
