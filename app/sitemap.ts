import { MetadataRoute } from 'next';

const baseUrl = 'https://knbl.co';

const workSlugs = [
  'ho-brands', 'rafael', 'xiaomi', 'roladin', 'carters', 'safari',
  'anker', 'lod', 'electra-precise', 'takeda', 'reuth-hospital', 'aion', 'trans-israel',
];

const insightSlugs = [
  'how-ai-is-redefining-brand-creativity',
  'the-end-of-one-size-fits-all-marketing',
  'when-trends-become-strategy',
  'the-rise-of-micro-communities',
  'data-driven-storytelling',
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

  const insightRoutes = insightSlugs.map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
