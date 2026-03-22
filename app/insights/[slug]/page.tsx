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
  'how-ai-is-redefining-brand-creativity': {
    title: 'How AI Is Redefining Brand Creativity',
    description: 'From automated storytelling to adaptive design systems, artificial intelligence is reshaping the creative process in ways brands can no longer ignore.',
    category: 'AI',
    date: '2025-10-14',
    image: '/images/blog/blog-ai.webp',
  },
  'the-end-of-one-size-fits-all-marketing': {
    title: 'The End of "One-Size-Fits-All" Marketing',
    description: 'Why brands that personalize their message around real human behavior are winning — and how to start doing it right.',
    category: 'Data',
    date: '2025-09-28',
    image: '/images/blog/blog-data.webp',
  },
  'when-trends-become-strategy': {
    title: 'When Trends Become Strategy',
    description: "Understanding cultural signals is more than following hype — it's how smart brands build lasting relevance.",
    category: 'Culture',
    date: '2025-08-19',
    image: '/images/blog/blog-culture.webp',
  },
  'the-rise-of-micro-communities': {
    title: 'The Rise of Micro-Communities in Brand Building',
    description: 'Why smaller, engaged audiences are becoming more valuable than mass reach for modern brands.',
    category: 'Culture',
    date: '2025-10-10',
    image: '/images/blog/blog-culture.webp',
  },
  'data-driven-storytelling': {
    title: 'Data-Driven Storytelling: The New Creative Frontier',
    description: 'How combining analytics with narrative craft is creating more compelling brand stories.',
    category: 'Data',
    date: '2025-10-05',
    image: '/images/blog/blog-data.webp',
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
          url: post.image,
          alt: post.title,
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
