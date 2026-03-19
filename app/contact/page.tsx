import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import { JsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with KNBL. We're based in Tel Aviv at 114 Derech Menachem Begin. Email info@knbl360.com or call +972 3 632 2242.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Let's Build Something That Works | Contact KNBL",
    description: "Reach KNBL in Tel Aviv — email info@knbl360.com or call +972 3 632 2242.",
    url: '/contact',
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact KNBL',
    description: 'Contact KNBL creative agency in Tel Aviv, Israel.',
    url: 'https://knbl.co/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'KNBL',
      url: 'https://knbl.co',
      telephone: '+972-3-632-2242',
      email: 'info@knbl360.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '114 Derech Menachem Begin',
        addressLocality: 'Tel Aviv',
        addressCountry: 'IL',
      },
    },
  };

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <ContactPageClient />
    </>
  );
}
