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

  const baseUrl = 'https://knbl.co';
  const org = { '@type': 'Organization', name: 'KNBL', url: baseUrl };

  const teamSchemas = [
    {
      name: 'Raz',
      jobTitle: 'Co-Founder',
      description: 'The operational backbone at KNBL. Raz oversees operations, financial performance, and workflow execution — ensuring every strategy the agency deploys is delivered with precision.',
      image: `${baseUrl}/images/team/raz.jpg`,
    },
    {
      name: 'Ravit',
      jobTitle: 'Co-Founder',
      description: 'Visionary and business development lead at KNBL. Ravit drives innovation and keeps the agency at the intersection of marketing and emerging technology.',
      image: `${baseUrl}/images/team/ravit.jpg`,
    },
    {
      name: 'Hadar',
      jobTitle: 'VP Clients',
      description: 'Strategic lead for client partnerships at KNBL. Hadar translates brand visions into growth roadmaps and oversees every client relationship from brief to result.',
      image: `${baseUrl}/images/team/hadar.jpg`,
    },
    {
      name: 'Daniel',
      jobTitle: 'Head of Content',
      description: 'Head of Content at KNBL. Daniel architects brand stories — turning strategic insight into content that defines a brand\'s voice and leaves a lasting impression.',
      image: `${baseUrl}/images/team/daniel.jpg`,
    },
    {
      name: 'Michelle',
      jobTitle: 'Client Manager',
      description: 'Client Manager at KNBL, bridging brand goals with agency execution to ensure every project delivers measurable results.',
      image: `${baseUrl}/images/team/michelle.jpg`,
    },
    {
      name: 'Niv',
      jobTitle: 'Client Manager',
      description: 'Client Manager at KNBL, managing the journey from strategy to results with a focus on seamless, human-centred project delivery.',
      image: `${baseUrl}/images/team/niv.jpg`,
    },
    {
      name: 'Omer',
      jobTitle: 'Client Manager',
      description: 'Client Manager and market analyst at KNBL. Omer brings analytical rigour to every project, aligning creative strategy with real-time market intelligence.',
      image: `${baseUrl}/images/team/omer.jpg`,
    },
    {
      name: 'Noya',
      jobTitle: 'Content Manager',
      description: 'Content Manager at KNBL combining strategic creativity with a dynamic, audience-first approach to brand communications.',
      image: `${baseUrl}/images/team/noya.jpg`,
    },
    {
      name: 'Daniella',
      jobTitle: 'Content Manager',
      description: 'Content Manager at KNBL with expertise in creative output and brand engagement, ensuring every piece of content performs as well as it connects.',
      image: `${baseUrl}/images/team/daniella.jpg`,
    },
    {
      name: 'Noa',
      jobTitle: 'Content Manager',
      description: 'Content Manager at KNBL specialising in finding the signal in the noise — crafting content that speaks directly to audience intent and drives real engagement.',
      image: `${baseUrl}/images/team/noa.jpg`,
    },
    {
      name: 'Ido',
      jobTitle: 'Media Manager',
      description: 'Media Manager at KNBL. Ido leads performance media strategy, optimising campaigns through data to ensure brands reach the right audience at the right moment.',
      image: `${baseUrl}/images/team/ido.jpg`,
    },
    {
      name: 'Vladi',
      jobTitle: 'CTO and AI Producer',
      description: 'CTO and AI Producer at KNBL. Vladi builds the technical infrastructure powering the agency while leading AI video productions — fusing deep engineering with generative AI creativity.',
      image: `${baseUrl}/images/team/vladi.jpg`,
    },
    {
      name: 'Ronit',
      jobTitle: 'Studio Manager',
      description: 'Studio Manager at KNBL, orchestrating creative production timelines and studio operations to ensure every project meets the agency\'s quality standards.',
      image: `${baseUrl}/images/team/ronit.jpg`,
    },
    {
      name: 'Roni',
      jobTitle: 'Graphic Designer',
      description: 'Graphic Designer and front-end developer at KNBL, blending high-end visual design with precise front-end code to create brand experiences that are as intuitive as they are impactful.',
      image: `${baseUrl}/images/team/roni.jpg`,
    },
    {
      name: 'Adi',
      jobTitle: 'Graphic Designer',
      description: 'Graphic Designer at KNBL translating abstract strategy into high-end visual identities and brand aesthetics that perform across every digital touchpoint.',
      image: `${baseUrl}/images/team/adi.jpg`,
    },
  ].map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.jobTitle,
    description: member.description,
    image: member.image,
    worksFor: org,
    url: `${baseUrl}/agency`,
  }));

  return (
    <>
      <JsonLd data={aboutPageSchema} />
      {teamSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <AgencyPageClient />
    </>
  );
}
