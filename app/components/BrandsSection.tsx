'use client';

import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion';


interface Brand {
  name: string;
  logo: string;
  className?: string;
}

const topRowBrands: Brand[] = [
  { name: 'Terrogence', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1769001889/Terrogence_Logo_white_dolipx.png' },
  { name: 'Rafael', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1769002559/RAFAEL_LOGO_WHITE_yxntiv.png', className: 'h-16 md:h-24' },
  { name: 'Reuth', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1769002514/Reuth_ENGLISH_LOGO_WHITE1_yk3a75.png', className: 'h-16 md:h-24' },
  { name: 'KKL', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1769002545/logo_eng_white_full_pl27m0.png' },
  { name: 'Calcalit', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628885/CALCALIT_LOD_LOGO_WHITE_yoa6mk.png' },
  { name: 'Hotze Israel', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1769002903/HOTZE_LOGO_WHITE_1_njmt5p.png', className: 'h-14 md:h-20' },
  { name: 'Heichal Hatarbut', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628565/%D7%9C%D7%95%D7%92%D7%95-%D7%94%D7%99%D7%9B%D7%9C-%D7%94%D7%AA%D7%A8%D7%91%D7%95%D7%AA-%D7%9C%D7%91%D7%9F-%D7%9E%D7%9C%D7%90_u3xjih.png', className: 'translate-y-3' },
  { name: 'Anker', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628505/Logo_Anker_White_nqtpe8.png', className: 'h-32 md:h-48' },
  { name: 'Xiaomi', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628142/logo_xiaomi_white_gk7vlk.png', className: 'h-16 md:h-24' },
];

const bottomRowBrands: Brand[] = [
  { name: 'Electra', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1769002040/Electra_Logo_ENG_lavan_ALL_aqgf9v.png', className: 'h-40 md:h-56' },
  { name: 'Takeda', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627891/takeda_WHITE_oghfsj.png' },
  { name: 'Roladin', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627396/Roladin_logo_B2_nxsyzd.png' },
  { name: 'Reserved', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627358/reserved_logo_white-01_pywhgf.png', className: 'h-24 md:h-36' },
  { name: 'Carters', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627282/carters_logo_LAVAN-01_otlo6i.png' },
  { name: 'H&O', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627203/H_O_brands_collection_FACE_WHITE-01_nfzjua.png', className: 'h-20 md:h-32' },
  { name: 'Aion', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627141/AION_LOGO_WHITE_rooieu.png', className: 'h-6 md:h-8' },
];

const Marquee = ({ children, direction = 'left', duration = 60 }: { children: ReactNode, direction?: 'left' | 'right', duration?: number }) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // High damping for premium, non-bouncy inertial feel
  const springConfig = { stiffness: 300, damping: 60, mass: 1 };
  const translateX = useSpring(x, springConfig);

  const isDragging = useRef(false);
  const speed = direction === 'left' ? -0.4 : 0.4; // Very slow and calm default speed

  useEffect(() => {
    if (contentRef.current) {
      // Calculate width of a single set of logos (half the total scrollable width)
      setContentWidth(contentRef.current.scrollWidth / 2);
    }
  }, [children]);

  useAnimationFrame(() => {
    if (isDragging.current || contentWidth === 0) return;

    let currentX = x.get();
    currentX += speed;

    // Pixel-perfect seamless loop
    if (currentX <= -contentWidth) {
      currentX += contentWidth;
    } else if (currentX > 0) {
      currentX -= contentWidth;
    }

    x.set(currentX);
  });

  const onDrag = (_: unknown, info: { delta: { x: number } }) => {
    // Clamp delta to prevent crazy acceleration
    const clampedDelta = Math.max(Math.min(info.delta.x, 20), -20);
    let currentX = x.get() + clampedDelta;

    // Maintain loop during drag
    if (currentX <= -contentWidth) currentX += contentWidth;
    if (currentX > 0) currentX -= contentWidth;

    x.set(currentX);
  };

  return (
    <div className="flex overflow-hidden relative fade-sides cursor-grab active:cursor-grabbing select-none py-0">
      <motion.div
        ref={contentRef}
        drag="x"
        onDragStart={() => { isDragging.current = true; }}
        onDragEnd={() => { isDragging.current = false; }}
        onDrag={onDrag}
        style={{ x: translateX }}
        className="flex gap-20 md:gap-32 items-center flex-nowrap"
      >
        {/* Set 1 */}
        <div className="flex gap-20 md:gap-32 items-center flex-nowrap flex-shrink-0">
          {children}
        </div>
        {/* Set 2 (for seamless loop) */}
        <div className="flex gap-20 md:gap-32 items-center flex-nowrap flex-shrink-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function BrandsSection() {
  return (
    <section className="bg-neutral-900 pt-12 md:pt-16 pb-24 md:pb-32 overflow-hidden">
      <div className="px-6 md:px-24 mb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl font-medium text-white leading-tight flex items-baseline flex-wrap">
              <span>Brands that trust</span>
              <img
                src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768739081/5_otsmdt.png"
                alt="KNBL"
                className="h-[1.9em] w-auto translate-y-[0.65em] -translate-x-4"
              />
            </h2>
            <p className="text-2xl text-neutral-300">
              From early stage companies to global teams, these are the partners we help move forward.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-0">
            <Marquee direction="left" duration={30}>
              {topRowBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className={`relative h-10 md:h-14 flex-shrink-0 ${brand.className || ''}`}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 pointer-events-none select-none"
                  />
                </div>
              ))}
            </Marquee>

            {/* Bottom Row - Moves Right */}
            <Marquee direction="right" duration={30}>
              {bottomRowBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}-rev`} className={`relative h-10 md:h-14 flex-shrink-0 ${brand.className || ''}`}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 pointer-events-none select-none"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
