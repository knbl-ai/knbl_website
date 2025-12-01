import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['www.figma.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
    ],
  },
};

export default nextConfig;
