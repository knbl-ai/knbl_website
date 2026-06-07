import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostPageClient from './BlogPostPageClient';
import { JsonLd } from '../../components/JsonLd';

// Metadata for each blog post (subset used for SEO)
const blogPostsMeta: Record<string, {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}> = {
  'intelligence-commodity-ai-future': {
    title: 'Intelligence Is Becoming a Commodity: What Comes Next',
    description: 'When everyone has access to AI intelligence, being the smartest person in the room becomes irrelevant. Success shifts to asking better questions and choosing the right ideas.',
    category: 'Strategy',
    date: '2026-06-07',
    image: '/images/blog/2026-06-07_intelligence-commodity-ai-future_header.webp',
  },

  'b2g-defense-marketing-social-media-strategy': {
    title: 'B2G Marketing: How Defense Companies Navigate Social Media Strategy',
    description: 'Defense companies face unique B2G marketing challenges that require specialized social media strategies. Here\'s how to build brand authority when your client is a government.',
    category: 'Strategy',
    date: '2026-03-24',
    image: '/images/blog/2026-03-24_b2g-defense-marketing-social-media-strategy_header.webp',
  },
  'marketers-guide-to-not-drowning-in-ai-tools': {
    title: 'The Marketing Leader\'s Guide to Not Drowning in AI Tools',
    description: 'There are more AI tools aimed at marketers than any team can meaningfully evaluate. The teams winning with AI are not the ones with the most tools. They are the ones with the clearest sense of which two or three are genuinely changing their output.',
    category: 'AI & Tech',
    date: '2025-12-19',
    image: '/images/blog/2025-12-19_marketers-guide-to-not-drowning-in-ai-tools_header.webp',
  },
  'marketing-measurement-is-broken': {
    title: 'Marketing Measurement Is Broken. Here\'s How to Fix It.',
    description: 'Last-click attribution is dead. 69% of CMOs are now under pressure to prove ROI more precisely than their current tools allow. The teams that survive this shift will be the ones who rebuild from first-party data up.',
    category: 'Data',
    date: '2025-11-19',
    image: '/images/blog/2025-11-19_marketing-measurement-is-broken_header.webp',
  },
  'ninety-seconds-authenticity-is-the-only-strategy': {
    title: 'You Have 90 Seconds. Authenticity Is the Only Strategy That Works.',
    description: 'The brain makes purchase decisions in 90 seconds. Consumers today are manipulation-literate — they recognize a gimmick instantly. The brands that win the 90-second window do something simpler and harder: they are genuinely honest.',
    category: 'Brand Strategy',
    date: '2025-10-19',
    image: '/images/blog/2025-10-19_ninety-seconds-authenticity-is-the-only-strategy_header.webp',
  },
  'precision-is-the-new-competitive-moat': {
    title: 'Precision Is the New Competitive Moat',
    description: 'The easier it becomes to produce content, the less any individual piece is worth. The marketers winning now are not out-producing AI. They are being precise.',
    category: 'Strategy',
    date: '2026-03-15',
    image: '/images/blog/2026-03-15_precision-is-the-new-competitive-moat_header.webp',
  },
  'your-best-influencers-are-already-on-payroll': {
    title: 'Your Best Influencers Are Already on Payroll',
    description: 'Content shared by employees generates 8x more engagement than the same post from a company page. Your most credible voices are not for hire — they already show up to work every day.',
    category: 'Content',
    date: '2026-02-19',
    image: '/images/blog/2026-02-19_your-best-influencers-are-already-on-payroll_header.webp',
  },
  'stop-renting-attention': {
    title: 'Stop Renting Attention: Why Marketing Infrastructure Outlasts Every Campaign',
    description: 'Most marketing budgets are structured like short-term rentals. The moment the spend stops, so does your presence. The brands that win long-term are the ones building assets, not buying impressions.',
    category: 'Strategy',
    date: '2026-03-17',
    image: '/images/blog/2026-03-17_stop-renting-attention_header.webp',
  },
  'the-cmo-as-navigator': {
    title: 'The CMO as Navigator: Why Brand Direction Is the Scarcest Skill in the AI Era',
    description: 'AI has collapsed the cost of content creation, but judgment, direction, and brand clarity have never been more expensive. The marketers who last won\'t be the ones who generate the most. They\'ll be the ones who know where they\'re going.',
    category: 'AI & Tech',
    date: '2026-03-19',
    image: '/images/blog/2026-03-19_the-cmo-as-navigator_header.webp',
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPostsMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsMeta[slug];

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/insights/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: `https://knbl.co${post.image}`,
          alt: post.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostsMeta[slug];

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `https://knbl.co/insights/${slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'KNBL',
      url: 'https://knbl.co',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KNBL',
      url: 'https://knbl.co',
      logo: {
        '@type': 'ImageObject',
        url: 'https://knbl.co/images/logo/knbl.png',
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `https://knbl.co${post.image}`,
    },
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://knbl.co',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Insights',
        item: 'https://knbl.co/insights',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://knbl.co/insights/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BlogPostPageClient slug={slug} />
    </>
  );
}
