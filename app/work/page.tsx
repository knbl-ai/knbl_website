import type { Metadata } from 'next';
import WorkPageClient from './WorkPageClient';
import { JsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'Our Work — Portfolio',
  description: 'Explore KNBL\'s portfolio of brand campaigns, AI productions, and cinematic storytelling for leading brands including H&O, Rafael, Xiaomi, Roladin, Carter\'s, Electra Group, and more.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'KNBL Work — Brands We\'ve Grown',
    description: 'Portfolio of brand campaigns and AI productions for H&O, Rafael, Xiaomi, Roladin, Carter\'s, Electra Group, and more.',
    url: '/work',
  },
};

export default function WorkPage() {
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'KNBL Work Portfolio',
    description: 'Portfolio of brand campaigns and AI productions by KNBL creative agency.',
    url: 'https://knbl.co/work',
    publisher: {
      '@type': 'Organization',
      name: 'KNBL',
      url: 'https://knbl.co',
    },
  };

  return (
    <>
      <JsonLd data={portfolioSchema} />
      <WorkPageClient />
    </>
  );
}
