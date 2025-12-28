'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Tag from '@/components/ui/Tag';

const blogs = [
  {
    title: 'How AI Is Redefining Brand Creativity',
    excerpt: 'From automated storytelling to adaptive design systems - explore how artificial intelligence is reshaping the creative process.',
    date: 'Oct 14, 2025',
    category: 'AI',
    image: '/images/blog/blog-ai.webp',
  },
  {
    title: 'The End of "One-Size-Fits-All" Marketing',
    excerpt: 'Why brands that personalize their message around real human behavior are winning - and how to start doing it right.',
    date: 'Sep 28, 2025',
    category: 'Data',
    image: '/images/blog/blog-data.webp',
  },
  {
    title: 'When Trends Become Strategy',
    excerpt: "Understanding cultural signals is more than following hype - it's how smart brands build lasting relevance.",
    date: 'Aug 19, 2025',
    category: 'Culture',
    image: '/images/blog/blog-culture.webp',
  },
  // Row 2
  {
    title: 'The Future of Content Marketing',
    excerpt: 'How innovative brands are leveraging new content formats to capture attention in an increasingly crowded digital landscape.',
    date: 'Jul 15, 2025',
    category: 'Content',
    image: '/images/blog/blog-ai.webp',
  },
  {
    title: 'Breaking Through the Noise',
    excerpt: 'Strategies for creating disruptive campaigns that stand out and make a lasting impact on your audience.',
    date: 'Jun 22, 2025',
    category: 'Disruption',
    image: '/images/blog/blog-data.webp',
  },
  {
    title: 'Innovation in Brand Strategy',
    excerpt: 'How forward-thinking companies are reimagining brand strategy to stay ahead in a rapidly evolving market.',
    date: 'May 18, 2025',
    category: 'Innovation',
    image: '/images/blog/blog-culture.webp',
  },
  // Row 3
  {
    title: 'Data-Driven Decision Making',
    excerpt: 'The role of analytics and insights in shaping effective marketing strategies for modern brands.',
    date: 'Apr 10, 2025',
    category: 'Data',
    image: '/images/blog/blog-data.webp',
  },
  {
    title: 'Building Cultural Relevance',
    excerpt: 'How brands can authentically connect with culture and build meaningful relationships with their audience.',
    date: 'Mar 05, 2025',
    category: 'Culture',
    image: '/images/blog/blog-culture.webp',
  },
  {
    title: 'AI and the Creative Process',
    excerpt: 'Exploring the intersection of artificial intelligence and human creativity in modern marketing.',
    date: 'Feb 12, 2025',
    category: 'AI',
    image: '/images/blog/blog-ai.webp',
  },
];

const BlogCard = ({ blog, index }: { blog: typeof blogs[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-primary-50 p-4 cursor-pointer group rounded-[24px] hover:rounded-[32px] transition-all duration-500 ease-in-out"
    >
      <div className="space-y-6">
        {/* Image */}
        <div className="relative h-64 overflow-hidden rounded-[14px] group-hover:rounded-[24px] transition-all duration-500 ease-in-out">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute top-4 left-4 z-10">
            <Tag variant={blog.category.toLowerCase() as 'ai' | 'data' | 'culture'}>{blog.category}</Tag>
          </div>
        </div>

        {/* Content */}
        <div className="px-2 pb-4 space-y-3">
          <p className="text-neutral-300 text-xs">{blog.date}</p>
          <h3 className="text-xl font-medium leading-tight tracking-[-0.03em]">{blog.title}</h3>
          <p className="text-neutral-400 text-base leading-relaxed">{blog.excerpt}</p>

          {/* Arrow Button */}
          <div className="flex justify-end pt-2">
            <div className="w-[52px] h-[52px] bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden">
              <div className="relative w-6 h-6">
                {/* Arrow 1 (Starts center, exits left) */}
                <motion.div
                  animate={{ x: isHovered ? -120 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
                {/* Arrow 2 (Passes through) */}
                <motion.div
                  initial={{ x: 60 }}
                  animate={{ x: isHovered ? -60 : 60 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
                {/* Arrow 3 (Enters from right, stays center) */}
                <motion.div
                  initial={{ x: 120 }}
                  animate={{ x: isHovered ? 0 : 120 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function BlogGrid() {
  return (
    <section className="px-6 md:px-24 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Blog Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={`${blog.title}-${index}`} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
