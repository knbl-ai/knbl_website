'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    title: 'Strategy',
    description: 'Decoded by data. Built for clarity',
    gradient: 'from-primary-900 to-primary-600',
    image: '/images/services/strategy-bg.webp',
    expandedContent: '',
  },
  {
    title: 'Storytelling',
    description: 'Human narratives. Sharp signals',
    gradient: 'from-primary-700 to-primary-600',
    image: '/images/services/message-bg.webp',
    expandedContent: '',
  },
  {
    title: 'Creative & Tech',
    description: 'Where bold ideas meets smart code',
    gradient: 'from-primary-600 to-primary-700',
    image: '/images/services/creative-bg.webp',
    expandedContent: '',
  },
  {
    title: 'Media',
    description: 'Cross-channel precision. Optimized at scale',
    gradient: 'from-primary-600 to-primary-900',
    image: '/images/services/data-bg.webp',
    expandedContent: '',
  },
];

export default function ServicesGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleCardClick = (index: number) => {
    setExpandedIndex(index);
  };

  return (
    <section id="services" className="bg-neutral-900 px-6 md:px-24 pt-20 pb-44">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[56px] font-medium text-white mb-8 max-w-4xl tracking-[-0.03em]"
          >
            From Insight <span className="text-primary-600">to Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[24px] text-neutral-300 font-light max-w-3xl mt-8"
          >
            Great results aren&apos;t accidental. They are engineered
          </motion.p>
        </div>

        <div className="flex gap-6 h-[600px]">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                onClick={() => handleCardClick(index)}
                layout
                animate={{
                  flex: isExpanded ? '1 1 60%' : '1 1 13.33%',
                }}
                className="relative rounded-3xl overflow-hidden cursor-pointer group"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                {/* Gradient Overlay - Standard */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Gradient Overlay - Active Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#5B4DFF]/90 via-[#5B4DFF]/20 to-transparent"
                />

                {/* Content Container */}
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  {/* Arrow Icon */}
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <motion.svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </motion.svg>
                  </div>

                  {/* Expanded Content Area */}
                  {isExpanded && (
                    <div className="space-y-3">
                      <motion.h3
                        layoutId={`title-${service.title}`}
                        className="text-5xl font-medium text-white origin-left"
                        animate={{ rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <p className="text-white text-lg">{service.description}</p>
                        <p className="text-white/90 text-base">
                          {service.expandedContent}
                        </p>
                      </motion.div>
                    </div>
                  )}

                  {/* Collapsed Title Overlay - Rendered when closed */}
                  {!isExpanded && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.h3
                        layoutId={`title-${service.title}`}
                        className="text-4xl font-medium text-white whitespace-nowrap"
                        animate={{ rotate: 90 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
