'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/ui/Tag';
import { blogs } from '@/data/blogs';

const BlogCard = ({ blog, index }: { blog: typeof blogs[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/insights/${blog.slug}`}>
      <motion.article
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-primary-50 p-4 cursor-pointer group rounded-[24px] hover:rounded-[32px] transition-all duration-500 ease-in-out h-full flex flex-col"
      >
        <div className="flex flex-col h-full space-y-6">
          {/* Image */}
          <div className="relative h-64 overflow-hidden rounded-[14px] group-hover:rounded-[24px] flex-shrink-0 transition-all duration-500 ease-in-out">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-4 left-4 z-10">
              <Tag>{blog.category}</Tag>
            </div>
          </div>

          {/* Content */}
          <div className="px-2 pb-4 flex flex-col flex-1">
            <div className="space-y-3 flex-1">
              <p className="text-neutral-300 text-xs">{blog.date}</p>
              <h3 className="text-xl font-medium leading-tight tracking-[-0.03em] line-clamp-2">{blog.title}</h3>
              <p className="text-neutral-400 text-base leading-relaxed line-clamp-3">{blog.excerpt}</p>
            </div>

            {/* Arrow Button */}
            <div className="flex justify-end pt-6">
              <div className="w-[52px] h-[52px] bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden flex-shrink-0">
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
    </Link>
  );
};

interface BlogGridProps {
  activeCategories: string[];
}

export default function BlogGrid({ activeCategories }: BlogGridProps) {
  const filteredBlogs = activeCategories.includes('View all')
    ? blogs
    : blogs.filter(blog => activeCategories.includes(blog.category));

  return (
    <section className="px-6 md:px-[120px] pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Blog Grid - 3 columns */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={`${blog.title}-${index}`} blog={blog} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
