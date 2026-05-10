'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Tag from '@/components/ui/Tag';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { TextReveal } from '@/components/ui/text-reveal';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogs } from '@/app/data/blogs';

const categories = [
  'View all',
  'AI & Tech',
  'Strategy',
];

const BlogCard = ({ blog, index }: { blog: typeof blogs[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Link href={`/insights/${blog.slug}`}>
      <motion.article
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-indigo-50 p-4 cursor-pointer group rounded-[32px] hover:rounded-[44px] transition-all duration-500 ease-in-out h-full flex flex-col"
      >
        <div className="space-y-4 flex-1 flex flex-col">
          {/* Image */}
          <div className="relative h-56 md:h-64 overflow-hidden rounded-[24px] group-hover:rounded-[36px] transition-all duration-500 ease-in-out flex-shrink-0">
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
              <Tag>{blog.category}</Tag>
            </motion.div>
          </div>

          {/* Content */}
          <div className="pt-6 px-4 pb-4 flex flex-col md:flex-row justify-between items-end gap-4 flex-1">
            <div className="flex flex-col">
              <p className="text-neutral-300 text-sm mb-4">{blog.date}</p>
              <h3 className="text-[18px] md:text-[21px] font-medium leading-tight mb-2">{blog.title}</h3>
              <p className="text-neutral-500 text-[14px] md:text-base leading-[1.3] font-light py-0">
                {blog.excerpt}
              </p>
            </div>

            {/* Arrow Button */}
            <div className="flex-shrink-0 mb-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white overflow-hidden">
                <motion.div
                  className="relative w-5 h-5 origin-center"
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  style={{ originX: 0.5, originY: 0.5 }}
                >
                  {/* Unity Rail System for perfect alignment */}
                  <motion.div
                    animate={{ x: !isMobile && isHovered ? -180 : 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
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

                    {/* Spacing */}
                    <div className="w-[40px]" />

                    {/* Arrow 4 */}
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default function BlogSection() {
  const [activeCategories, setActiveCategories] = useState<string[]>(['View all']);

  const toggleCategory = (category: string) => {
    if (category === 'View all') {
      setActiveCategories(['View all']);
      return;
    }

    setActiveCategories((prev) => {
      const isAlreadyActive = prev.includes(category);
      let next: string[];

      if (isAlreadyActive) {
        next = prev.filter((c) => c !== category);
        if (next.length === 0) next = ['View all'];
      } else {
        next = prev.filter((c) => c !== 'View all');
        next.push(category);
      }

      return next;
    });
  };

  const latestBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  const filteredBlogs = activeCategories.includes('View all')
    ? latestBlogs
    : latestBlogs.filter(blog => activeCategories.includes(blog.category));

  return (
    <section id="insights" className="pt-24 pb-16 md:py-44 px-6 md:px-[120px]">
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
            <TextReveal
              startEarly
              initialColor="#CFCFD3"
              revealedColor="#000000"
              className="text-xl md:text-2xl font-normal py-0 max-w-2xl"
            >
              In a noisy world, we add clarity. Explore our latest articles, insights, and perspectives.
            </TextReveal>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4"
          >
            <InteractiveHoverButton
              onClick={() => window.dispatchEvent(new CustomEvent('open-newsletter'))}
              className="px-6 py-3 bg-black text-white rounded-full font-medium"
            >
              Newsletter Sign-Up
            </InteractiveHoverButton>
            <Link href="/insights">
              <InteractiveHoverButton className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium">
                View All Articles
              </InteractiveHoverButton>
            </Link>
          </motion.div>
        </div>

        {/* Filter Tags */}
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center gap-4">
          <span className="text-neutral-400 text-sm font-medium whitespace-nowrap">Filter by:</span>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategories.includes(category)
                  ? 'bg-primary-600 text-white border-primary-600 shadow-lg scale-105'
                  : 'bg-white text-neutral-400 border-neutral-200 hover:border-primary-600 hover:text-primary-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.title} blog={blog} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-4 md:hidden"
        >
          <InteractiveHoverButton
            onClick={() => window.dispatchEvent(new CustomEvent('open-newsletter'))}
            className="w-full max-w-[280px] py-4 bg-black text-white rounded-full font-medium"
          >
            Newsletter Sign-Up
          </InteractiveHoverButton>
          <Link href="/insights" className="w-full max-w-[280px]">
            <InteractiveHoverButton className="w-full py-4 bg-primary-600 text-white rounded-full font-medium whitespace-nowrap">
              View All Articles
            </InteractiveHoverButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
