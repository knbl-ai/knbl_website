import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/submission/', '/api/', '/privacy/', '/terms/', '/cookie-policy/'],
    },
    sitemap: 'https://knbl.co/sitemap.xml',
  };
}
