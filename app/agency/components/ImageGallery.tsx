'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryMedia = [
  { src: 'https://storage.googleapis.com/knbl_website/videos/backstage/20250326_101317_ig3qmp.mp4' },
  { src: 'https://storage.googleapis.com/knbl_website/videos/category/3356_KNBLE_WEBSITE_VIDEO_1080x1080_GENERAL_NO_PURPLE_FILTER_yyfvu0.mp4' },
  { src: 'https://storage.googleapis.com/knbl_website/videos/backstage/20250701_172708_avttud.mp4' },
  { src: 'https://storage.googleapis.com/knbl_website/videos/backstage/20250219_110635_qiqlkf.mp4' },
  { src: 'https://storage.googleapis.com/knbl_website/videos/category/3356_KNBLE_WEBSITE_VIDEO_1080x1080_VIEW_NO_PURPLE_FILTER_ifmxwl.mp4' },
  { src: 'https://storage.googleapis.com/knbl_website/videos/backstage/20250326_135838_yrjxk0.mp4' },
];

export default function ImageGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    // Increased threshold to 10px to account for sub-pixel rendering or small offsets
    setShowLeftArrow(scrollLeft > 10);

    // Check if we reached the end (with a 10px buffer)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);

      // Small timeout to ensure layout has settled before first check
      const timeoutId = setTimeout(checkScroll, 100);

      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = window.innerWidth * 0.4;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

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
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = initialScrollLeft - walk;
    checkScroll(); // Update arrows while dragging
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    checkScroll(); // Re-verify scroll position on hover
  };

  return (
    <section
      className="py-12 md:py-24 relative bg-white group/section selection:bg-transparent overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUpOrLeave();
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="w-full relative">
        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 md:left-10 z-20 flex items-center pointer-events-none">
          <AnimatePresence>
            {isHovered && showLeftArrow && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                onClick={() => scroll('left')}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-600 shadow-xl flex items-center justify-center text-white pointer-events-auto hover:bg-primary-700 transition-all duration-300 active:scale-95"
              >
                <ChevronLeft size={28} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute inset-y-0 right-4 md:right-10 z-20 flex items-center pointer-events-none">
          <AnimatePresence>
            {isHovered && showRightArrow && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 10 }}
                onClick={() => scroll('right')}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-600 shadow-xl flex items-center justify-center text-white pointer-events-auto hover:bg-primary-700 transition-all duration-300 active:scale-95"
              >
                <ChevronRight size={28} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          className={`flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory ${isDragging ? 'cursor-grabbing select-none scroll-auto' : 'cursor-grab'
            }`}
          style={{
            scrollSnapType: isDragging ? 'none' : 'x mandatory',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {/* Left Spacer to handle side padding correctly with scroll snap */}
          <div className="flex-shrink-0 w-6 md:w-[120px]" />

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
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}

          {/* Right Spacer */}
          <div className="flex-shrink-0 w-6 md:w-[120px]" />
        </div>
      </div>
    </section>
  );
}


