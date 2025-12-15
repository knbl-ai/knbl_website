'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TextReveal } from '@/components/ui/text-reveal';
import { useState } from 'react';

export default function CommunitySection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative bg-gradient-to-b from-white via-primary-200 to-primary-600">
      {/* Text Section */}
      <div className="pt-20 pb-12 px-6 md:px-24">
        <TextReveal className="py-0 [&>div]:max-w-3xl [&_p]:text-2xl [&_p]:md:text-3xl [&_p]:leading-relaxed">
          community at KNBL is where marketing minds meet to learn, share, and grow together. Through marketing masters, hands-on sessions, and open talks, we turn shared knowledge into real progress. It&apos;s a space built on collaboration, learning, and collective movement forward.
        </TextReveal>
      </div>

      {/* Video Card Section */}
      <div className="pt-0 pb-32">
        {/* Video Card - Centered */}
        <div className="w-[90%] max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden"
          >
            {/* Background Video Preview Image */}
            <Image
              src="/images/community/knbl-masters-video.webp"
              alt="KNBL Masters"
              fill
              className="object-cover"
              sizes="90vw"
            />
            {/* Glassmorphism Card */}
            <div className="absolute bottom-6 left-6 max-w-lg">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 space-y-6">
                <div className="space-y-2">
                  <p className="text-neutral-300 text-sm">50 min</p>
                  <h3 className="text-3xl md:text-4xl font-medium text-white">KNBL Masters</h3>
                  <p className="text-neutral-200 text-base md:text-lg leading-normal">
                    Meet the minds shaping tomorrow&apos;s marketing. Real talks, shared knowledge, and ideas that move brands forward.
                  </p>
                </div>

                {/* Play Button */}
                <motion.button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  animate={{ width: isHovered ? 170 : 60 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative bg-white rounded-full flex items-center justify-start cursor-pointer h-[60px] shadow-lg pl-[18px] overflow-hidden"
                >
                  <svg
                    className="w-6 h-6 text-primary-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ marginLeft: '2px' }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <motion.span
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -10
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-primary-600 font-semibold text-base whitespace-nowrap ml-3"
                  >
                    Watch Now
                  </motion.span>
                </motion.button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 md:w-14 md:h-14 bg-primary-900 rounded-full flex items-center justify-center text-white"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 md:w-14 md:h-14 bg-primary-900 rounded-full flex items-center justify-center text-white"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
