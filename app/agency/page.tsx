import type { Metadata } from 'next';
import AgencyPageClient from './AgencyPageClient';
import { JsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'About the Agency',
  description: 'KNBL is a strategy-driven creative collective built for what\'s next. Meet the team, learn our story, and discover why ambitious brands choose us.',
  alternates: { canonical: '/agency' },
  openGraph: {
    title: 'About KNBL — Strategy-Driven Creative Collective',
    description: 'Meet the team behind KNBL. Strategy, creativity, and AI working together to build unforgettable brands.',
    url: '/agency',
  },
};

export default function AgencyPage() {
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About KNBL',
    description: 'KNBL is a strategy-driven creative collective that turns insights into impact.',
    url: 'https://knbl.co/agency',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'KNBL',
      description: 'Strategy-driven creative collective and AI-powered marketing agency.',
      url: 'https://knbl.co',
      telephone: '+972-3-632-2242',
      email: 'info@knbl360.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '114 Derech Menachem Begin',
        addressLocality: 'Tel Aviv',
        addressCountry: 'IL',
      },
      priceRange: '$$',
      areaServed: ['Israel', 'International'],
      serviceType: ['Creative Agency', 'Marketing Agency', 'AI Productions', 'Brand Strategy'],
    },
  };

  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <AgencyPageClient />
    </>
  );
}
