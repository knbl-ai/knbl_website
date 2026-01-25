'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TextReveal } from '@/components/ui/text-reveal';
import { useState } from 'react';

const videos = [
  {
    id: 'lhzrwPA9wlQ',
    title: 'From SEO to GEO',
    description: 'Ravit from KNBL hosts Aviv from Limy.ai for a deep understanding of the search revolution.',
    duration: '42 min'
  },
  {
    id: 'a5DMCdCzJ58',
    title: 'How does a brand become a category?',
    description: 'A fascinating talk with Noa Bachar Aharoni, the CEO of Roladin',
    duration: '38 min'
  },
  {
    id: 'GgzMXEOmGsU',
    title: 'How to “sell” a missile?',
    description: 'Ravit from KNBL hosts Maayan Malkin Eligal, the spokesperson of Rafael Advanced Defense Systems',
    duration: '25 min'
  },
  {
    id: 'JYJ5Xfarhww',
    title: 'Killing the AI chaos for marketing managers',
    description: 'The new order with the most important tools for top tier marketers',
    duration: '35 min'
  },
  {
    id: '3MKDTJsG30I',
    title: 'GOOGLE AI',
    description: 'Everything about Google AI with Elit Ben Bassat, Head of Cloud Marketing at Google',
    duration: '48 min'
  },
  {
    id: 'toRkgVwuerk',
    title: 'GOOGLE AI',
    description: "Meet the minds shaping tomorrow's marketing. Real talks, shared knowledge, and ideas that move brands forward.",
    duration: '50 min'
  }
];

export default function CommunitySection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const currentVideo = videos[currentVideoIndex];

  const handleNext = () => {
    setCurrentVideoIndex((prev: number) => (prev + 1) % videos.length);
    setIsPlaying(false);
    setIsNextHovered(false);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prev: number) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
    setIsPrevHovered(false);
  };

  return (
    <section className="relative bg-primary-600 rounded-b-[48px] overflow-hidden">
      {/* Background Gradient Overlay - Cut off earlier for solid bottom blend */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-white via-[#A3B3FF] via-[20%] to-transparent pointer-events-none" />

      {/* Text Section */}
      <div className="relative pt-0 pb-16 md:pb-32 px-6 md:px-24 z-10">
        <TextReveal
          initialColor="#FFFFFF"
          startEarly={true}
          className="py-0 text-lg md:text-[26px] leading-[1.5] font-medium tracking-tight max-w-3xl text-center mx-auto"
        >
          {`Community at KNBL is where marketing minds meet to learn, share, and grow together. Through marketing masters, hands-on sessions, and open talks, we turn shared knowledge into real progress.\nIt's a space built on collaboration, learning,\nand collective movement forward.`}
        </TextReveal>
      </div>

      {/* Video Card Section */}
      <div className="relative pt-0 pb-16 md:pb-32 z-10">
        <div className="w-full max-w-[1320px] mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video w-full rounded-[32px] overflow-hidden bg-transparent"
            style={{
              maskImage: 'radial-gradient(circle at 100% 100%, transparent 47.9px, black 48px)',
              WebkitMaskImage: 'radial-gradient(circle at 100% 100%, transparent 47.9px, black 48px)'
            }}
          >
            {isPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full border-0 scale-[1.5] origin-center"
                src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <Image
                  src={`https://img.youtube.com/vi/${currentVideo.id}/maxresdefault.jpg`}
                  alt={currentVideo.title}
                  fill
                  className="object-cover scale-[1.12] object-top"
                  sizes="90vw"
                  unoptimized
                />

                <div className="absolute bottom-6 left-6 max-w-lg">
                  <div className="bg-neutral-900/20 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 space-y-6 border border-white/10">
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white tracking-tighter">{currentVideo.title}</h3>
                      <p className="text-base md:text-lg leading-normal" style={{ color: '#CFCFD3' }}>
                        {currentVideo.description.split('Limy.ai').map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <a
                                href="https://www.limy.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-primary-400 transition-colors cursor-pointer"
                              >
                                Limy.ai
                              </a>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>

                    <motion.button
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => setIsPlaying(true)}
                      animate={{ width: isHovered ? 170 : 60 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative bg-white rounded-full flex items-center justify-start cursor-pointer h-[50px] md:h-[60px] overflow-hidden"
                    >
                      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center flex-shrink-0">
                        <motion.div
                          animate={{
                            scale: isHovered ? 0.95 : 1,
                            x: isHovered ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <svg
                            className="w-[20px] h-[20px] text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            style={{ marginLeft: '2px' }}
                          >
                            <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59661 21.6145C6.53435 22.7359 4 21.2452 4 18.9671L4 5.03292C4 2.75478 6.53435 1.26406 8.59661 2.38548L21.4086 9.35258Z" />
                          </svg>
                        </motion.div>
                      </div>
                      <motion.span
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -10
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-primary-600 font-semibold text-base whitespace-nowrap ml-0"
                      >
                        Watch Now
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Navigation Controls - Liquid Notch integrated with Video Card */}
          {!isPlaying && (
            <div className="absolute -bottom-3 right-6 z-20">
              <div className="relative pt-4 pb-3 pr-4 pl-8 bg-primary-600 rounded-tl-[48px] rounded-br-[32px] flex gap-3 items-center min-w-[175px] justify-end">
                {/* Visual Shims - Precisely aligned to FLAT edges only to prevent corner bleed */}
                <div className="absolute -top-[2px] left-[46px] right-0 h-[3px] bg-primary-600 pointer-events-none" />
                <div className="absolute top-[46px] bottom-0 -right-[2px] w-[3px] bg-primary-600 pointer-events-none" />
                <div className="absolute -bottom-[2px] left-0 right-[-2px] h-[3px] bg-primary-600 pointer-events-none" />

                {/* Top-Right Transition (Concave) - Liquid flow back into side wall */}
                <div className="absolute -top-[48px] -right-[1px] w-[50px] h-[50px] pointer-events-none">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="scale-[1.05] origin-bottom-right">
                    <path d="M 0 50 A 50 50 0 0 0 50 0 L 50 50 Z" fill="#4F39F6" />
                  </svg>
                </div>

                {/* Bottom-Left Transition (Concave) - Liquid flow out from floor */}
                <div className="absolute bottom-[10px] -left-[48px] w-[50px] h-[50px] pointer-events-none">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="scale-[1.05] origin-bottom-right">
                    <path d="M 0 50 A 50 50 0 0 0 50 0 L 50 50 Z" fill="#4F39F6" />
                  </svg>
                </div>
                {/* Previous Button */}
                <motion.button
                  onMouseEnter={() => setIsPrevHovered(true)}
                  onMouseLeave={() => setIsPrevHovered(false)}
                  onClick={handlePrev}
                  whileTap={{ scale: 0.95 }}
                  className="w-[52px] h-[52px] md:w-[64px] md:h-[64px] bg-primary-900 hover:bg-primary-900/90 rounded-full flex items-center justify-center text-white transition-colors overflow-hidden group"
                >
                  <div className="relative w-6 h-6 scale-x-[-1]">
                    <motion.div
                      animate={{ x: isPrevHovered ? -140 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ x: 70 }}
                      animate={{ x: isPrevHovered ? -70 : 70 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ x: 140 }}
                      animate={{ x: isPrevHovered ? 0 : 140 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.button>

                {/* Next Button */}
                <motion.button
                  onMouseEnter={() => setIsNextHovered(true)}
                  onMouseLeave={() => setIsNextHovered(false)}
                  onClick={handleNext}
                  whileTap={{ scale: 0.95 }}
                  className="w-[52px] h-[52px] md:w-[64px] md:h-[64px] bg-primary-900 hover:bg-primary-900/90 rounded-full flex items-center justify-center text-white transition-colors overflow-hidden group"
                >
                  <div className="relative w-6 h-6">
                    <motion.div
                      animate={{ x: isNextHovered ? -140 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ x: 70 }}
                      animate={{ x: isNextHovered ? -70 : 70 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ x: 140 }}
                      animate={{ x: isNextHovered ? 0 : 140 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
