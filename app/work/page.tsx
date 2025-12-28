'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WorkProjectsGrid from './components/WorkProjectsGrid';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-200 text-xl mb-5"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[56px] font-medium tracking-[-0.03em]"
          >
            The Brands We&apos;ve{' '}
            <span className="text-primary-600">Grown.</span>
          </motion.h1>
        </div>
      </section>

      {/* Projects Grid */}
      <WorkProjectsGrid />

      <Footer />
    </main>
  );
}
