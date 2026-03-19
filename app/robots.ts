import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/submission/', '/api/'],
    },
    sitemap: 'https://knbl.co/sitemap.xml',
  };
}
