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
      className="bg-indigo-50 p-4 cursor-pointer group rounded-[32px] hover:rounded-[44px] transition-all duration-500 ease-in-out"
    >
      <div className="space-y-4">
        {/* Image */}
        <div className="relative h-64 overflow-hidden rounded-[24px] group-hover:rounded-[36px] transition-all duration-500 ease-in-out">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <motion.div
            animate={{
              x: isHovered ? 8 : 0,
              y: isHovered ? 8 : 0
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-4 left-4 z-10"
          >
            <Tag variant={blog.category.toLowerCase() as 'ai' | 'data' | 'culture'}>{blog.category}</Tag>
          </motion.div>
        </div>

        {/* Content */}
        <div className="pt-6 px-4 pb-4 flex justify-between items-end gap-4">
          <div className="flex flex-col">
            <p className="text-neutral-300 text-sm mb-4">{blog.date}</p>
            <h3 className="text-[21px] font-medium leading-tight mb-2">{blog.title}</h3>
            <p className="text-neutral-400 leading-[1.3] font-normal">{blog.excerpt}</p>
          </div>

          {/* Arrow Button */}
          <div className="flex-shrink-0 mb-1">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white overflow-hidden">
              <div className="relative w-5 h-5">
                {/* Unity Rail System for perfect alignment */}
                <motion.div
                  animate={{ x: isHovered ? -120 : 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="flex absolute left-0 top-0 h-full items-center"
                >
                  {/* Arrow 1 */}
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                  {/* Spacing (Aligns with 60px steps) */}
                  <div className="w-[40px]" />

                  {/* Arrow 2 */}
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                  {/* Spacing */}
                  <div className="w-[40px]" />

                  {/* Arrow 3 */}
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
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
            className="space-y-6 max-w-3xl text-black"
          >
            <h2 className="text-4xl md:text-[56px] font-medium leading-[1.1]">
              <span className="text-primary-600">Our signals</span>
              {' in Strategy, Creative & Innovation'}
            </h2>
            <p className="text-2xl opacity-70">
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
