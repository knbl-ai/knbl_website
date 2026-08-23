import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The dev-tools indicator has no focus styling of its own and reads as a
  // phantom keyboard-navigation gap; keep it off.
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
