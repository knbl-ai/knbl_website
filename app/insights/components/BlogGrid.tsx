'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/ui/Tag';

const blogs = [
  {
    title: 'B2G Defense Marketing: Strategic Social Media for Weapons Systems',
    excerpt: 'Defense contractors face unique B2G marketing challenges where every word matters and security trumps engagement. Here\'s how Rafael Defense Systems navigates social media for weapons that protect nations.',
    date: 'Mar 24, 2026',
    category: 'Strategy',
    image: '/images/blog/2026-03-24_b2g-defense-marketing-social-media-weapons_header.webp',
    slug: 'b2g-defense-marketing-social-media-weapons',
  },
  {
    title: 'B2G Defense Marketing: Managing Social Media for Advanced Defense Systems',
    excerpt: 'Defense companies need social media for demand generation, talent acquisition, and public trust — not brand decoration. Here\'s how we built Rafael\'s global digital presence.',
    date: 'Mar 24, 2026',
    category: 'Strategy',
    image: '/images/blog/2026-03-24_b2g-defense-marketing-social-media-strategy_header.webp',
    slug: 'b2g-defense-marketing-social-media-strategy',
  },
  {
    title: 'B2G Defense Marketing: Managing Social Media for Advanced Defense Systems',
    excerpt: 'Defense companies need social media for demand generation, talent acquisition, and public trust — not brand decoration. Here\'s how we built Rafael\'s global digital presence.',
    date: 'Mar 24, 2026',
    category: 'Strategy',
    image: '/images/blog/2026-03-24_b2g-defense-marketing-social-media-strategy_header.webp',
    slug: 'b2g-defense-marketing-social-media-strategy',
  },
  {
    title: 'The Marketing Leader\'s Guide to Not Drowning in AI Tools',
    excerpt: 'There are more AI tools aimed at marketers than any team can meaningfully evaluate. The teams winning with AI are not the ones with the most tools. They are the ones with the clearest sense of which two or three are genuinely changing their output.',
    date: 'Dec 19, 2025',
    category: 'AI & Tech',
    image: '/images/blog/2025-12-19_marketers-guide-to-not-drowning-in-ai-tools_header.webp',
    slug: 'marketers-guide-to-not-drowning-in-ai-tools',
  },
  {
    title: 'Marketing Measurement Is Broken. Here\'s How to Fix It.',
    excerpt: 'Last-click attribution is dead. 69% of CMOs are now under pressure to prove ROI more precisely than their current tools allow. The teams that survive this shift will be the ones who rebuild from first-party data up.',
    date: 'Nov 19, 2025',
    category: 'Data',
    image: '/images/blog/2025-11-19_marketing-measurement-is-broken_header.webp',
    slug: 'marketing-measurement-is-broken',
  },
  {
    title: 'You Have 90 Seconds. Authenticity Is the Only Strategy That Works.',
    excerpt: 'The brain makes purchase decisions in 90 seconds. Consumers today are manipulation-literate — they recognize a gimmick instantly. The brands that win the 90-second window do something simpler and harder: they are genuinely honest.',
    date: 'Oct 19, 2025',
    category: 'Brand Strategy',
    image: '/images/blog/2025-10-19_ninety-seconds-authenticity-is-the-only-strategy_header.webp',
    slug: 'ninety-seconds-authenticity-is-the-only-strategy',
  },
  {
    title: 'Precision Is the New Competitive Moat',
    excerpt: 'The easier it becomes to produce content, the less any individual piece is worth. The marketers winning now are not out-producing AI. They are being precise.',
    date: 'Mar 15, 2026',
    category: 'Strategy',
    image: '/images/blog/2026-03-15_precision-is-the-new-competitive-moat_header.webp',
    slug: 'precision-is-the-new-competitive-moat',
  },
  {
    title: 'Your Best Influencers Are Already on Payroll',
    excerpt: 'Content shared by employees generates 8x more engagement than the same post from a company page. Your most credible voices are not for hire — they already show up to work every day.',
    date: 'Feb 19, 2026',
    category: 'Content',
    image: '/images/blog/2026-02-19_your-best-influencers-are-already-on-payroll_header.webp',
    slug: 'your-best-influencers-are-already-on-payroll',
  },
  {
    title: 'Stop Renting Attention: Why Marketing Infrastructure Outlasts Every Campaign',
    excerpt: 'Most marketing budgets are structured like short-term rentals. The moment the spend stops, so does your presence. The brands that win long-term are the ones building assets, not buying impressions.',
    date: 'Mar 17, 2026',
    category: 'Strategy',
    image: '/images/blog/2026-03-17_stop-renting-attention_header.webp',
    slug: 'stop-renting-attention',
  },
  {
    title: 'The CMO as Navigator: Why Brand Direction Is the Scarcest Skill in the AI Era',
    excerpt: 'AI has collapsed the cost of content creation, but judgment, direction, and brand clarity have never been more expensive. The marketers who last won\'t be the ones who generate the most. They\'ll be the ones who know where they\'re going.',
    date: 'Mar 19, 2026',
    category: 'AI & Tech',
    image: '/images/blog/2026-03-19_the-cmo-as-navigator_header.webp',
    slug: 'the-cmo-as-navigator',
  },
];

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
