'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const services = [
  {
    title: 'Strategy',
    description: 'We turn insights into direction.',
    image: '/images/services/strategy-bg.webp',
    video: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768128680/3356_KNBLE_WEBSITE_VIDEO_1080x1080_STRATEGY_NO_PURPLE_FILTER_zkfqub.mp4',
  },
  {
    title: 'Storytelling\n& Creative',
    description: 'We make them listen. We make them care.',
    image: '/images/services/message-bg.webp',
    video: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768128692/3356_KNBLE_WEBSITE_VIDEO_1080x1080_CREATIVE_NO_PURPLE_FILTER_ngrc5z.mp4',
  },
  {
    title: 'Tech',
    description: 'Built for speed. Scaled for impact.',
    image: '/images/services/creative-bg.webp',
    video: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768128681/3356_KNBLE_WEBSITE_VIDEO_1080x1080_TECH_NO_PURPLE_FILTER_l5wzw2.mp4',
  },
  {
    title: 'Media',
    description: 'Precision at scale. Growth by design.',
    image: '/images/services/data-bg.webp',
    video: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769683508/3356_KNBLE_WEBSITE_VIDEO_1080x1080_MEDIA_NO_PURPLE_FILTER_2_a121i0.mp4',
  },
];

function ServiceVideo({ src, isExpanded }: { src: string; isExpanded: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isExpanded) {
      video.play().catch(() => { });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isExpanded]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover scale-105"
    />
  );
}

export default function ServicesGrid() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleIndex = (index: number) => {
    if (isMobile) {
      setExpandedIndices(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setExpandedIndices([index]);
    }
  };

  return (
    <section id="services" className="bg-neutral-900 px-6 md:px-[120px] pt-24 md:pt-20 pb-24 md:pb-44">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-10 md:mb-16">
          <motion.h2 className="text-4xl md:text-[56px] font-medium text-white mb-1 max-w-4xl tracking-tight font-sans leading-[1.1]">
            From insight <br className="md:hidden" /> <span className="text-primary-600">to impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mt-4 md:mt-0 font-sans"
          >
            Great results aren&apos;t accidental. They are engineered
          </motion.p>
        </div>

        <motion.div layout className="flex flex-col md:flex-row gap-6 h-auto md:h-[600px] md:justify-between">
          {services.map((service, index) => {
            const isExpanded = expandedIndices.includes(index);
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 1,
                  layout: { type: "spring", stiffness: 350, damping: 12, mass: 2 }
                }}
                onClick={() => toggleIndex(index)}
                layout
                style={{ transformOrigin: 'top' }}
                animate={{
                  width: !isMobile ? (isExpanded ? '706px' : '154px') : '100%',
                  height: isMobile ? (isExpanded ? 340 : 140) : 600
                }}
                className="relative rounded-[32px] overflow-hidden cursor-pointer flex-shrink-0 w-full md:w-auto shadow-sm"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: isExpanded ? 1.15 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {service.video ? (
                    <ServiceVideo src={service.video} isExpanded={isExpanded} />
                  ) : (
                    <Image src={service.image} alt={service.title} fill className="object-cover scale-105" sizes="100vw" />
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isMobile
                      ? (isExpanded ? 1 : 0)
                      : (isExpanded || isHovered ? 1 : 0)
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={isExpanded && isMobile
                    ? "absolute inset-0 pointer-events-none z-[5] bg-gradient-to-b from-[#4F39F6] via-[#4F39F6]/50 50% to-[#4F39F6]/10"
                    : "absolute inset-0 pointer-events-none z-[5] bg-gradient-to-t from-[#4F39F6] via-[#4F39F6]/50 50% to-[#4F39F6]/10"}
                />

                <div className={`relative h-full z-10 flex flex-col items-start ${isMobile ? 'pt-[54px] pb-6 px-6 justify-start' : 'p-12 justify-between'}`}>
                  {isMobile ? (
                    /* Mobile Layout: Text and Arrow at top */
                    <div className="flex justify-between items-start w-full">
                      <div className="flex flex-col flex-1">
                        <h3 className="text-[32px] font-medium text-white tracking-[-0.04em] leading-none font-sans">
                          {service.title.replace('\n', ' ')}
                        </h3>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-white/90 text-[14px] font-medium tracking-[-0.01em] leading-tight max-w-[200px] overflow-hidden"
                            >
                              {service.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <motion.div
                        layout
                        animate={{
                          scale: 1,
                          backgroundColor: '#ffffff'
                        }}
                        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 shadow-lg transition-colors duration-300"
                      >
                        <motion.svg
                          className="w-5 h-5 text-[#4F39F6]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          animate={{ rotate: isExpanded ? 0 : -180 }}
                          transition={{ duration: 0.4, ease: "backOut" }}
                        >
                          <path d="M12 5v14M19 12l-7 7-7-7" />
                        </motion.svg>
                      </motion.div>
                    </div>
                  ) : (
                    /* Desktop Layout: Arrow at top, Text at bottom */
                    <>
                      <div className="flex justify-end w-full">
                        <motion.div
                          layout
                          animate={{
                            scale: 1,
                            backgroundColor: isExpanded ? '#000000' : '#ffffff'
                          }}
                          className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 shadow-lg transition-colors duration-300"
                        >
                          <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{
                              rotate: isExpanded ? 360 : (isHovered ? 270 : 180),
                              color: isExpanded ? '#ffffff' : '#4F39F6'
                            }}
                            transition={{ duration: 0.4, ease: "backOut" }}
                          >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                          </motion.svg>
                        </motion.div>
                      </div>

                      <div className="relative w-full min-h-[140px] flex flex-col justify-end">
                        <AnimatePresence mode="wait">
                          {isExpanded ? (
                            <motion.div
                              key="expanded-text-desktop"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                              className="pointer-events-none"
                            >
                              <h3 className="text-[48px] font-medium text-white mb-3 tracking-[-0.04em] leading-none font-sans">
                                {service.title.replace('\n', ' ')}
                              </h3>
                              <p className="text-white/90 text-[16px] font-medium tracking-[-0.01em] leading-none max-w-lg font-sans">
                                {service.description}
                              </p>
                            </motion.div>
                          ) : (
                            <motion.div
                              key={`collapsed-${service.title}`}
                              initial={{ opacity: 0, y: 0 }}
                              animate={{
                                opacity: 1,
                                y: isHovered ? -12 : 0
                              }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className="absolute bottom-4 left-0 w-full flex items-center justify-center pointer-events-none"
                            >
                              <h3 className="text-[36px] md:text-[48px] font-medium text-white whitespace-pre-wrap [writing-mode:vertical-rl] rotate-180 tracking-[-0.04em] leading-[1.1] font-sans text-left">
                                {index === 1 ? 'Creative' : service.title}
                              </h3>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
