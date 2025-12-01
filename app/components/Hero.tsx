'use client';

import { motion } from 'framer-motion';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white pt-24">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium leading-tight">
            <span className="block">Cut the noise.</span>
            <span className="block">
              <span className="text-primary-600">Be impossible</span>
              {' '}
              <span>to ignore</span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-neutral-300 font-normal"
          >
            Creative marketing for ambitious brands
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <ScrollIndicator />
        </motion.div>
      </div>

      {/* Floating Badge Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-32 left-24 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
          <p className="text-sm font-normal">20 years of experience</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-32 right-24 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
          <p className="text-sm font-normal">50+ campaigns launched</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-16 left-32 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
          <p className="text-sm font-normal">Creative teams in TLV</p>
        </div>
      </motion.div>
    </section>
  );
}
