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
    video: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768128687/3356_KNBLE_WEBSITE_VIDEO_1080x1080_MEDIA_NO_PURPLE_FILTER_tpxqos.mp4',
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
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="bg-neutral-900 px-6 md:px-24 pt-12 md:pt-20 pb-24 md:pb-44">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            className="text-4xl md:text-[56px] font-medium text-white mb-1 max-w-4xl tracking-tight font-sans leading-[1.1]"
          >
            From insight <span className="text-primary-600">to impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mt-0 font-sans"
          >
            Great results aren&apos;t accidental. They are engineered
          </motion.p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[600px] md:justify-between">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                onClick={() => setExpandedIndex(index)}
                layout
                animate={{
                  width: typeof window !== 'undefined' && window.innerWidth >= 768
                    ? (isExpanded ? '706px' : '154px')
                    : '100%',
                }}
                className="relative rounded-[32px] overflow-hidden cursor-pointer flex-shrink-0 w-full h-[400px] md:w-auto md:h-auto"
              >
                {/* Background Asset */}
                <div className="absolute inset-0">
                  {service.video ? (
                    <ServiceVideo src={service.video} isExpanded={isExpanded} />
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover scale-105"
                      sizes="100vw"
                    />
                  )}
                </div>

                {/* Gradient Wash (Matches Reference Image) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: (isExpanded || isHovered) ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 pointer-events-none z-[5] bg-gradient-to-t from-[#4F39F6] via-[#4F39F6]/50 50% to-[#4F39F6]/10"
                />

                <div className="relative h-full p-12 flex flex-col justify-between items-start z-10">
                  {/* Arrow Icon */}
                  <motion.div
                    animate={{
                      scale: 1,
                      backgroundColor: '#4F39F6'
                    }}
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 shadow-lg transition-colors duration-300"
                  >
                    <motion.svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{ rotate: isExpanded ? 360 : (isHovered ? 270 : 180) }}
                      transition={{ duration: 0.4, ease: "backOut" }}
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </motion.svg>
                  </motion.div>

                  {/* Text Layer */}
                  <div className="relative w-full">
                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="pointer-events-none"
                        >
                          <h3 className="text-[36px] md:text-[48px] font-medium text-white mb-3 tracking-[-0.04em] leading-none font-sans">
                            {service.title.replace('\n', ' ')}
                          </h3>
                          <p className="text-white/90 text-[14px] md:text-[16px] font-medium tracking-[-0.01em] leading-none max-w-lg font-sans">
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
