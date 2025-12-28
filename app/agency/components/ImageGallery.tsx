'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/projects/project-1.webp', alt: 'Agency work 1' },
  { src: '/images/projects/project-2.webp', alt: 'Agency work 2' },
  { src: '/images/projects/project-3.webp', alt: 'Agency work 3' },
  { src: '/images/projects/project-4.webp', alt: 'Agency work 4' },
  { src: '/images/projects/project-5.webp', alt: 'Agency work 5' },
  { src: '/images/projects/project-6.webp', alt: 'Agency work 6' },
];

export default function ImageGallery() {
  return (
    <section className="py-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-24 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex-shrink-0 w-[375px] h-[395px] rounded-3xl overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="375px"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
