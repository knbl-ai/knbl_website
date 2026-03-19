import type { Metadata } from 'next';
import InsightsPageClient from './InsightsPageClient';

export const metadata: Metadata = {
  title: 'Insights — Strategy, Creativity & Tech',
  description: "KNBL's blog on brand strategy, AI in marketing, cultural intelligence, and data-driven storytelling. Expert insights from Israel's leading creative agency.",
  alternates: { canonical: '/insights' },
  openGraph: {
    title: "What's New in Strategy, Creativity & Tech | KNBL Insights",
    description: "Expert perspectives on brand strategy, AI marketing, cultural intelligence, and data-driven storytelling.",
    url: '/insights',
  },
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
