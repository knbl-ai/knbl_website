'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogFilterTags from './components/BlogFilterTags';
import BlogGrid from './components/BlogGrid';

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-12 px-6 md:px-[120px]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-200 text-xl mb-5"
          >
            Our Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[56px] font-medium tracking-[-0.03em]"
          >
            <span className="text-primary-600">What&apos;s New</span>
            {' in Strategy, Creativity & Tech.'}
          </motion.h1>
        </div>
      </section>

      {/* Filter Tags */}
      <BlogFilterTags />

      {/* Blog Grid */}
      <BlogGrid />

      <Footer />
    </main>
  );
}
