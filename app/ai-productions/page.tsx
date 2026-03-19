import type { Metadata } from 'next';
import AiProductionsPageClient from './AiProductionsPageClient';
import { JsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'AI Productions',
  description: 'KNBL AI Productions — Generative AI video content, virtual spokespersons, motion design, and immersive brand experiences. See our AI-powered campaigns for Electra, H&O, Xiaomi, Takeda, and more.',
  alternates: { canonical: '/ai-productions' },
  openGraph: {
    title: 'KNBL AI Productions — Generative AI Brand Content',
    description: 'AI-powered video productions, virtual spokespersons, and immersive brand experiences. Campaigns for Electra, H&O, Xiaomi, Takeda.',
    url: '/ai-productions',
  },
};

export default function AIProductionsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Productions',
    provider: {
      '@type': 'Organization',
      name: 'KNBL',
      url: 'https://knbl.co',
    },
    description: 'Generative AI video production, virtual spokespersons, motion design, and immersive brand experiences using cutting-edge AI technology.',
    url: 'https://knbl.co/ai-productions',
    serviceType: 'AI Video Production',
    areaServed: ['Israel', 'International'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Production Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Generative AI Video',
            description: 'Commercial video content created with generative AI technology',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Virtual Spokesperson',
            description: 'Photorealistic AI-generated brand spokespeople for campaigns',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Agents & Automation',
            description: 'Trends research agents, newsletter automation, and social media AI platforms',
          },
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <AiProductionsPageClient />
    </>
  );
}
