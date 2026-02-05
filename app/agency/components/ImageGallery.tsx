'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/projects/project-1.webp', alt: 'Agency work 1' },
  { src: '/images/projects/project-2.webp', alt: 'Agency work 2' },
  { src: '/images/projects/project-3.webp', alt: 'Agency work 3' },
  { src: '/images/projects/project-4.webp', alt: 'Agency work 4' },
  { src: '/images/projects/project-5.webp', alt: 'Agency work 5' },
  { src: '/images/projects/project-6.webp', alt: 'Agency work 6' },
  { src: '/images/projects/project-1.webp', alt: 'Placeholder 7' },
  { src: '/images/projects/project-2.webp', alt: 'Placeholder 8' },
  { src: '/images/projects/project-3.webp', alt: 'Placeholder 9' },
  { src: '/images/projects/project-4.webp', alt: 'Placeholder 10' },
  { src: '/images/projects/project-5.webp', alt: 'Placeholder 11' },
  { src: '/images/projects/project-6.webp', alt: 'Placeholder 12' },
];

export default function ImageGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      // Calculate how much we can scroll: (content width) - (container width)
      setWidth(contentRef.current.scrollWidth - containerRef.current.offsetWidth);
    }

    // Recalculate on window resize
    const handleResize = () => {
      if (contentRef.current && containerRef.current) {
        setWidth(contentRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-8 md:py-16">
      <div
        ref={containerRef}
        className="max-w-full overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          ref={contentRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileTap={{ cursor: 'grabbing' }}
          className="flex gap-6 px-6 md:px-[120px] w-max"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative flex-shrink-0 w-[85vw] md:w-[450px] h-[350px] md:h-[500px] rounded-[32px] overflow-hidden select-none"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 768px) 85vw, 450px"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
