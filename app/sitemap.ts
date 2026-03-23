import { MetadataRoute } from 'next';

const baseUrl = 'https://knbl.co';

const workSlugs = [
  'ho-brands', 'rafael', 'xiaomi', 'roladin', 'carters', 'safari',
  'anker', 'lod', 'electra-precise', 'takeda', 'reuth-hospital', 'aion', 'trans-israel',
];

const insightArticles = [
  { slug: 'marketers-guide-to-not-drowning-in-ai-tools', date: '2025-12-19' },
  { slug: 'marketing-measurement-is-broken', date: '2025-11-19' },
  { slug: 'ninety-seconds-authenticity-is-the-only-strategy', date: '2025-10-19' },
  { slug: 'precision-is-the-new-competitive-moat', date: '2026-03-15' },
  { slug: 'your-best-influencers-are-already-on-payroll', date: '2026-02-19' },
  { slug: 'stop-renting-attention', date: '2026-03-17' },
  { slug: 'the-cmo-as-navigator', date: '2026-03-19' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/agency`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ai-productions`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const workRoutes = workSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const insightRoutes = insightArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
