'use client';

import { motion } from 'framer-motion';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';

const blogs = [
  {
    title: 'How AI Is Redefining Brand Creativity',
    excerpt: 'From automated storytelling to adaptive design systems - explore how artificial intelligence is reshaping the creative process.',
    date: 'Oct 14, 2025',
    category: 'AI',
  },
  {
    title: 'The End of "One-Size-Fits-All" Marketing',
    excerpt: 'Why brands that personalize their message around real human behavior are winning - and how to start doing it right.',
    date: 'Sep 28, 2025',
    category: 'Data',
  },
  {
    title: 'When Trends Become Strategy',
    excerpt: "Understanding cultural signals is more than following hype - it's how smart brands build lasting relevance.",
    date: 'Aug 19, 2025',
    category: 'Culture',
  },
];

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
              <span className="text-primary-600">What&apos;s New</span>
              {' in Strategy, Creativity & Tech.'}
            </h2>
            <p className="text-2xl text-neutral-300">
              In a noisy world, we look for signals - insights, patterns, and shifts shaping how brands think, create, and grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button>View All Articles</Button>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog: { title: string; excerpt: string; date: string; category: string }, index: number) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-indigo-50 rounded-3xl p-4 cursor-pointer group"
            >
              <div className="space-y-6">
                {/* Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <Tag variant={blog.category.toLowerCase() as any}>{blog.category}</Tag>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <p className="text-neutral-300 text-sm">{blog.date}</p>
                  <h3 className="text-2xl font-medium leading-tight">{blog.title}</h3>
                  <p className="text-neutral-400 leading-normal">{blog.excerpt}</p>

                  {/* Arrow Button */}
                  <div className="flex justify-end">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center text-white"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
