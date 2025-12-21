'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tag from '@/components/ui/Tag';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { useState } from 'react';

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
];

const BlogCard = ({ blog, index }: { blog: { title: string; excerpt: string; date: string; category: string; image: string }, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-indigo-50 p-4 cursor-pointer group rounded-[32px] hover:rounded-[64px] transition-all duration-500 ease-in-out"
    >
      <div className="space-y-6">
        {/* Image */}
        <div className="relative h-64 overflow-hidden rounded-[24px] group-hover:rounded-[48px] transition-all duration-500 ease-in-out">
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
        <div className="p-4 space-y-4">
          <p className="text-neutral-300 text-sm">{blog.date}</p>
          <h3 className="text-2xl font-medium leading-tight">{blog.title}</h3>
          <p className="text-neutral-400 leading-normal">{blog.excerpt}</p>

          {/* Arrow Button */}
          <div className="flex justify-end pt-4">
            <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden">
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

export default function BlogSection() {
  return (
    <section id="insights" className="py-44 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl font-medium">
              <span className="text-primary-600">Our signals</span>
              {' in Strategy, Creative & Innovation'}
            </h2>
            <p className="text-2xl text-neutral-300">
              In a noisy world, we add clarity. Explore our latest articles, insights, and perspectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <InteractiveHoverButton className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium">
              View All Articles
            </InteractiveHoverButton>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.title} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
