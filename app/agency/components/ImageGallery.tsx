'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryMedia = [
  { src: 'https://storage.googleapis.com/knbl_website/optimized/videos/backstage/20250326_101317_ig3qmp.webm' },
  { src: 'https://storage.googleapis.com/knbl_website/optimized/videos/category/3356_KNBLE_WEBSITE_VIDEO_1080x1080_GENERAL_NO_PURPLE_FILTER_yyfvu0.webm' },
  { src: 'https://storage.googleapis.com/knbl_website/optimized/videos/backstage/20250701_172708_avttud.webm' },
  { src: 'https://storage.googleapis.com/knbl_website/optimized/videos/backstage/20250219_110635_qiqlkf.webm' },
  { src: 'https://storage.googleapis.com/knbl_website/optimized/videos/category/3356_KNBLE_WEBSITE_VIDEO_1080x1080_VIEW_NO_PURPLE_FILTER_ifmxwl.webm' },
  { src: 'https://storage.googleapis.com/knbl_website/optimized/videos/backstage/20250326_135838_yrjxk0.webm' },
];

export default function ImageGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  // Optimized indicator logic using Intersection Observer focused on the left "snap point"
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0,
        rootMargin: '0px -85% 0px -10%' // Focuses on the left 'snap' area
      }
    );

    const items = container.querySelectorAll('[data-index]');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

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

  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const items = scrollContainerRef.current.querySelectorAll('[data-index]');
    const targetItem = items[index] as HTMLElement;
    if (targetItem) {
      targetItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  };

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
    checkScroll(); // Update arrows and active index while dragging
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      className="py-12 md:py-24 relative bg-white group/section selection:bg-transparent overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
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
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="w-full relative">
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
            scrollbarWidth: 'none',
            scrollPaddingLeft: isMobile ? '24px' : '120px',
            scrollPaddingRight: isMobile ? '24px' : '120px'
          }}
        >
          {/* Left Spacer to handle side padding correctly with scroll snap */}
          <div className="flex-shrink-0 w-6 md:w-[120px]" />

          {galleryMedia.map((media, index) => (
            <motion.div
              key={index}
              data-index={index}
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

        {/* Dots Navigation - All Devices */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {galleryMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 transition-all duration-300 rounded-full ${activeIndex === index
                ? 'bg-primary-600 scale-110'
                : 'bg-neutral-200 hover:bg-neutral-300 scale-100'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
