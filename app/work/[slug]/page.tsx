'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Play } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Projects data - in a real app this would come from a CMS or database
const projects: Record<string, {
  title: string;
  logo: string;
  description: string;
  socialLinks: { type: 'instagram' | 'tiktok' | 'facebook'; url: string }[];
  galleries: {
    title: string;
    type: 'carousel' | 'video';
    images?: string[];
    videoThumbnail?: string;
    videoUrl?: string;
  }[];
}> = {
  'ho-brands': {
    title: 'H&O Brands Collection',
    logo: '/images/partners/ho.png',
    description: 'We are proud to lead 360 advertising management for one of the biggest retailers in Israel: TV, Radio, Outdoor, BTL, POC, Digital, Social Media, Production',
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'tiktok', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    galleries: [
      {
        title: 'Summer 2025',
        type: 'carousel',
        images: [
          '/images/projects/project-1.webp',
          '/images/projects/project-2.webp',
          '/images/projects/project-3.webp',
          '/images/projects/project-4.webp',
          '/images/projects/project-5.webp',
        ],
      },
      {
        title: 'Winter 2025',
        type: 'video',
        videoThumbnail: '/images/projects/project-6.webp',
        videoUrl: '#',
      },
      {
        title: 'Fall 2024',
        type: 'carousel',
        images: [
          '/images/projects/project-3.webp',
          '/images/projects/project-4.webp',
          '/images/projects/project-5.webp',
          '/images/projects/project-1.webp',
          '/images/projects/project-2.webp',
        ],
      },
    ],
  },
  'nova-fashion': {
    title: 'Electra',
    logo: '/images/partners/el.png',
    description: 'Complete brand refresh and digital marketing strategy for an emerging fashion brand targeting Gen Z consumers.',
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'tiktok', url: '#' },
    ],
    galleries: [
      {
        title: 'Brand Launch Campaign',
        type: 'carousel',
        images: [
          '/images/projects/project-2.webp',
          '/images/projects/project-3.webp',
          '/images/projects/project-4.webp',
        ],
      },
    ],
  },
  'tech-startup': {
    title: 'Roladin',
    logo: '/images/partners/rol.png',
    description: 'Full-funnel marketing strategy and execution for a B2B SaaS platform, including content marketing and paid acquisition.',
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    galleries: [
      {
        title: 'Product Launch',
        type: 'carousel',
        images: [
          '/images/projects/project-4.webp',
          '/images/projects/project-5.webp',
          '/images/projects/project-6.webp',
        ],
      },
    ],
  },
};

function SocialIcon({ type }: { type: 'instagram' | 'tiktok' | 'facebook' }) {
  const icons = {
    instagram: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    tiktok: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    facebook: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  };
  return icons[type];
}

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-[200px] pb-[120px] px-6 text-center">
          <h1 className="text-4xl font-medium mb-4">Project not found</h1>
          <p className="text-neutral-400">The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Project Header */}
      <section className="pt-[120px] pb-[60px] px-6 md:px-[120px]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-16 items-start"
          >
            {/* Logo */}
            <div className="w-[120px] h-[120px] bg-neutral-50 rounded-3xl flex items-center justify-center p-6 flex-shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src={project.logo}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-[40px] font-medium tracking-[-0.03em] mb-7">
                {project.title}
              </h1>
              <p className="text-neutral-300 text-xl leading-relaxed mb-8 max-w-[600px]">
                {project.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-5">
                {project.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-[34px] h-[34px] bg-neutral-300 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                  >
                    <SocialIcon type={link.type} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Galleries */}
      <section className="pb-[120px] px-6 md:px-[120px]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {project.galleries.map((gallery, galleryIndex) => (
            <motion.div
              key={galleryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: galleryIndex * 0.1 }}
              className="flex flex-col gap-6"
            >
              {gallery.type === 'carousel' && gallery.images && (
                <div className="flex gap-6 h-[450px] overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {gallery.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative flex-shrink-0 w-[500px] h-full rounded-3xl overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${gallery.title} - Image ${imageIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="500px"
                      />
                    </div>
                  ))}
                </div>
              )}

              {gallery.type === 'video' && gallery.videoThumbnail && (
                <div className="relative w-full h-[700px] rounded-3xl overflow-hidden">
                  <Image
                    src={gallery.videoThumbnail}
                    alt={gallery.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  {/* Play Button */}
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-primary-600 ml-1" fill="currentColor" />
                  </button>
                </div>
              )}

              <p className="text-neutral-500 text-2xl tracking-[-0.01em]">
                {gallery.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
