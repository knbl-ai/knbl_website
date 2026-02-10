'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const galleryMedia = [
  { src: 'https://storage.googleapis.com/knbl_website/videos/category/IMG_5628.MOV' },
  { src: 'https://storage.googleapis.com/knbl_website/videos/category/IMG_5625.MOV' },
  { src: 'https://storage.googleapis.com/knbl_website/videos/category/IMG_5570.MOV' },
  { src: 'https://storage.googleapis.com/knbl_website/videos/category/IMG_5573.MOV' },
  { src: 'https://storage.googleapis.com/knbl_website/videos/category/IMG_5636.MOV' },
];

export default function ImageGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setInitialScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // multiplier for drag sensitivity
    scrollContainerRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-12 md:py-24 relative bg-white group/section selection:bg-transparent overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      <div className="w-full">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-[120px] ${isDragging ? 'cursor-grabbing select-none scroll-auto' : 'cursor-grab'
            }`}
          style={{
            scrollSnapType: isDragging ? 'none' : 'x mandatory',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {galleryMedia.map((media, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="relative flex-shrink-0 w-[85vw] md:w-[calc((100vw-240px-60px)/3.5)] aspect-square rounded-[32px] md:rounded-[40px] overflow-hidden bg-gray-50 group snap-start transition-all duration-500 hover:shadow-2xl pointer-events-none md:pointer-events-auto"
            >
              <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


