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
      {
        '@type': 'Question',
        name: 'How does generative AI change marketing content production?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generative AI has collapsed the cost of content production to near zero, which paradoxically makes content quality more important, not less. When any brand can produce unlimited content cheaply, audiences become more selective and the threshold for what earns attention rises. The brands winning with AI are not out-producing competitors — they are using AI to execute a clear creative and strategic direction faster. AI handles production volume; human judgment determines what is worth producing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is precision marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Precision marketing means producing less content but ensuring each piece could only come from your brand — drawing on specific category expertise, original insight, and genuine depth. It contrasts with volume-driven approaches where brands publish generic content at scale. As AI-generated content floods every channel, precision — saying something specific, accurate, and genuinely useful — has become the primary competitive differentiator. Research from Forrester found the perceived value of data-grounded human expertise rose roughly 30% as AI content proliferated.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is last-click attribution no longer a reliable way to measure marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Last-click attribution credits only the final touchpoint before a purchase, ignoring the full sequence of brand interactions that built the customer relationship. The mechanism that made it workable — persistent cross-site tracking via third-party cookies — has been dismantled by browser restrictions, Apple privacy changes, and regulation. 69% of senior marketing leaders now report pressure to prove ROI more precisely than their current tools allow. The shift is toward first-party data and multi-touch models that distribute credit across the actual customer journey.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is employee advocacy and why does it outperform branded content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Employee advocacy is the practice of employees sharing brand content or professional perspectives from their personal accounts. Content shared by individual employees generates approximately 8 times more engagement than the same content posted from a company page, because audiences extend greater trust to people than to institutions. In an era where AI can generate unlimited branded content, the genuine perspective of a person with specific industry experience stands out as inherently more credible and differentiated.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a marketing campaign and marketing infrastructure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A marketing campaign is an expense: it produces activity during its runtime and little beyond it. Marketing infrastructure is an asset: content that surfaces in organic search for years, communities that generate peer-to-peer trust without media spend, internal thought leaders whose credibility accumulates over time. Research from the Ehrenberg-Bass Institute shows brands that maintain consistent presence — not just during campaign windows — grow faster than competitors relying on burst strategies. The goal is to own attention over time, not rent it campaign by campaign.',
        },
      },
      {
        '@type': 'Question',
        name: 'What skills does a CMO need in the AI era?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most durable marketing leaders in the AI era are those who function as navigators rather than executors. AI can automate content production, media buying, and campaign optimization. What it cannot replicate is brand direction — the ability to read a market clearly, identify what is genuinely true about a company\'s competitive position, and hold that strategic line under pressure. The scarcest skills are category expertise, the ability to distill business truth into a coherent brand narrative, and the judgment to know what is worth producing at all.',
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
