'use client';

import { motion } from 'framer-motion';

export default function CommunitySection() {
  return (
    <section className="relative">
      {/* Gradient Background */}
      <div className="bg-gradient-to-b from-white via-indigo-200/50 to-primary-600 py-44 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl leading-8"
          >
            <span>community at </span>
            <span className="uppercase">knbl</span>
            <span> is where marketing minds meet to learn, share, and grow together. </span>
            <span className="text-indigo-50">
              through marketing masters, hands-on sessions, and open talks, we turn shared knowledge into real progress.
              it&apos;s a space built on collaboration, learning, and collective movement forward.
            </span>
          </motion.p>
        </div>
      </div>

      {/* Purple Background Extension */}
      <div className="bg-primary-600 h-96 rounded-b-[32px]" />

      {/* Video Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] max-w-6xl"
      >
        <div className="relative h-[600px] bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl overflow-hidden">
          {/* Glassmorphism Card */}
          <div className="absolute bottom-6 left-6 max-w-lg">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 space-y-6">
              <div className="space-y-2">
                <p className="text-neutral-300 text-sm">50 min</p>
                <h3 className="text-4xl font-medium text-white">KNBL Masters</h3>
                <p className="text-neutral-200 text-lg leading-normal">
                  Meet the minds shaping tomorrow&apos;s marketing. Real talks, shared knowledge, and ideas that move brands forward.
                </p>
              </div>

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center group"
              >
                <svg className="w-6 h-6 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 bg-primary-900 rounded-full flex items-center justify-center text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 bg-primary-900 rounded-full flex items-center justify-center text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
