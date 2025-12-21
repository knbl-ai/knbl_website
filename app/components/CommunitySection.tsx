'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TextReveal } from '@/components/ui/text-reveal';
import { useState } from 'react';

export default function CommunitySection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-white from-[5%] via-primary-600 via-[25%] to-primary-600">
      {/* Text Section */}
      <div className="pt-20 pb-12 px-6 md:px-24">
        <TextReveal className="py-0 [&>div]:max-w-4xl [&_p]:text-[24px] [&_p]:leading-relaxed">
          community at KNBL is where marketing minds meet to learn, share, and grow together. Through marketing masters, hands-on sessions, and open talks, we turn shared knowledge into real progress. It&apos;s a space built on collaboration, learning, and collective movement forward.
        </TextReveal>
      </div>

      {/* Video Card Section */}
      <div className="pt-0 pb-32">
        {/* Video Card - Centered */}
        <div className="w-full max-w-[1320px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black"
          >
            {isPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/toRkgVwuerk?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                {/* Background Video Preview Image */}
                <Image
                  src="https://img.youtube.com/vi/toRkgVwuerk/maxresdefault.jpg"
                  alt="KNBL Masters"
                  fill
                  className="object-cover"
                  sizes="90vw"
                  unoptimized
                />

                {/* Overlay Gradient for readability */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Glassmorphism Card */}
                <div className="absolute bottom-6 left-6 max-w-lg">
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 space-y-6">
                    <div className="space-y-2">
                      <p className="text-neutral-300 text-sm">50 min</p>
                      <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">KNBL Masters</h3>
                      <p className="text-neutral-200 text-base md:text-lg leading-normal">
                        Meet the minds shaping tomorrow&apos;s marketing. Real talks, shared knowledge, and ideas that move brands forward.
                      </p>
                    </div>

                    {/* Play Button */}
                    <motion.button
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => setIsPlaying(true)}
                      animate={{ width: isHovered ? 170 : 60 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative bg-white rounded-full flex items-center justify-start cursor-pointer h-[60px] shadow-lg pl-[10px] overflow-hidden"
                    >
                      <svg
                        className="w-10 h-10 text-primary-600 flex-shrink-0"
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

                {/* Navigation Arrows - Glass Container */}
                <div className="absolute bottom-0 right-0 p-10 bg-primary-600 backdrop-blur-xl rounded-tl-[48px] flex gap-4 z-10">
                  {/* Previous Button */}
                  <motion.button
                    onMouseEnter={() => setIsPrevHovered(true)}
                    onMouseLeave={() => setIsPrevHovered(false)}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 md:w-14 md:h-14 bg-primary-900/80 hover:bg-primary-900 rounded-full flex items-center justify-center text-white transition-colors overflow-hidden"
                  >
                    <div className="relative w-6 h-6 scale-x-[-1]">
                      {/* Arrow 1 */}
                      <motion.div
                        animate={{ x: isPrevHovered ? -120 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                      {/* Arrow 2 */}
                      <motion.div
                        initial={{ x: 60 }}
                        animate={{ x: isPrevHovered ? -60 : 60 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                      {/* Arrow 3 */}
                      <motion.div
                        initial={{ x: 120 }}
                        animate={{ x: isPrevHovered ? 0 : 120 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Next Button */}
                  <motion.button
                    onMouseEnter={() => setIsNextHovered(true)}
                    onMouseLeave={() => setIsNextHovered(false)}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 md:w-14 md:h-14 bg-primary-900/80 hover:bg-primary-900 rounded-full flex items-center justify-center text-white transition-colors overflow-hidden"
                  >
                    <div className="relative w-6 h-6">
                      {/* Arrow 1 */}
                      <motion.div
                        animate={{ x: isNextHovered ? -120 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                      {/* Arrow 2 */}
                      <motion.div
                        initial={{ x: 60 }}
                        animate={{ x: isNextHovered ? -60 : 60 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                      {/* Arrow 3 */}
                      <motion.div
                        initial={{ x: 120 }}
                        animate={{ x: isNextHovered ? 0 : 120 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
