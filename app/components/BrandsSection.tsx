'use client';

import Image from 'next/image';
import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useAnimationFrame, useTransform } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';


interface Brand {
  name: string;
  logo: string;
  className?: string;
}

const topRowBrands: Brand[] = [
  { name: 'Terrogence', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/Terrogence_Logo_white_dolipx.png' },
  { name: 'Rafael', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/RAFAEL_LOGO_WHITE_yxntiv.png', className: 'h-16 md:h-24' },
  { name: 'Reuth', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/Reuth_ENGLISH_LOGO_WHITE1_yk3a75.png', className: 'h-16 md:h-24' },
  { name: 'KKL', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/logo_eng_white_full_pl27m0.png' },
  { name: 'Calcalit', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/CALCALIT_LOD_LOGO_WHITE_yoa6mk.png' },
  { name: 'Hotze Israel', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/HOTZE_LOGO_WHITE_1_njmt5p.png', className: 'h-14 md:h-20' },
  { name: 'Heichal Hatarbut', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/%D7%9C%D7%95%D7%92%D7%95-%D7%94%D7%99%D7%9B%D7%9C-%D7%94%D7%AA%D7%A8%D7%91%D7%95%D7%AA-%D7%9C%D7%91%D7%9F-%D7%9E%D7%9C%D7%90_u3xjih.png', className: 'h-14 md:h-20 translate-y-2' },
  { name: 'Anker', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/Logo_Anker_White_nqtpe8.png', className: 'h-32 md:h-48' },
  { name: 'Xiaomi', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/logo_xiaomi_white_gk7vlk.png', className: 'h-16 md:h-24' },
];

const bottomRowBrands: Brand[] = [
  { name: 'Electra', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/Electra_Logo_ENG_lavan_ALL_aqgf9v.png', className: 'h-40 md:h-56' },
  { name: 'Takeda', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/takeda_WHITE_oghfsj.png' },
  { name: 'Roladin', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/Roladin_logo_B2_nxsyzd.png' },
  { name: 'Reserved', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/reserved_logo_white-01_pywhgf.png', className: 'h-24 md:h-36' },
  { name: 'Carters', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/carters_logo_LAVAN-01_otlo6i.png' },
  { name: 'H&O', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/H_O_brands_collection_FACE_WHITE-01_nfzjua.png', className: 'h-20 md:h-32' },
  { name: 'Aion', logo: 'https://storage.googleapis.com/knbl_website/logos/white%20logos/AION_LOGO_WHITE_rooieu.png', className: 'h-6 md:h-8' },
];

const Marquee = ({ children, direction = 'left' }: { children: ReactNode, direction?: 'left' | 'right' }) => {
  const [iterationWidth, setIterationWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // High damping for premium feel without bounciness
  const springConfig = { stiffness: 400, damping: 90, mass: 1 };
  const translateX = useSpring(x, springConfig);

  const isDragging = useRef(false);
  // Speed set to a premium "moving" pace
  const speed = direction === 'left' ? -0.8 : 0.8;

  useEffect(() => {
    const calculateWidth = () => {
      if (contentRef.current) {
        const styles = window.getComputedStyle(contentRef.current);
        const gap = parseInt(styles.gap) || 0;
        // With 3 sets, scrollWidth = 3*Width + 2*Gap
        // One full iteration is Width + Gap
        setIterationWidth((contentRef.current.scrollWidth + gap) / 3);
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, [children]);

  useAnimationFrame(() => {
    if (iterationWidth === 0) return;
    if (!isDragging.current) {
      x.set(x.get() + speed);
    }
  });

  // The secret to seamless looping with useSpring: 
  // Never jump the spring's target (x), instead loop the visual result.
  const displayX = useTransform(translateX, (v: number) => {
    if (iterationWidth === 0) return 0;
    return ((v % iterationWidth) - iterationWidth) % iterationWidth;
  });

  const onDrag = (_: unknown, info: { delta: { x: number } }) => {
    // Smooth dragging that integrates with the continuous movement
    const clampedDelta = Math.max(Math.min(info.delta.x, 20), -20);
    x.set(x.get() + clampedDelta);
  };

  return (
    <div className="flex overflow-hidden relative fade-sides cursor-grab active:cursor-grabbing select-none py-0">
      <motion.div
        ref={contentRef}
        drag="x"
        onDragStart={() => { isDragging.current = true; }}
        onDragEnd={() => { isDragging.current = false; }}
        onDrag={onDrag}
        style={{ x: displayX }}
        className="flex gap-12 md:gap-20 lg:gap-32 items-center flex-nowrap"
      >
        {/* Triple repetition for absolute coverage and perfect loop points */}
        <div className="flex gap-12 md:gap-20 lg:gap-32 items-center flex-nowrap flex-shrink-0">
          {children}
        </div>
        <div className="flex gap-12 md:gap-20 lg:gap-32 items-center flex-nowrap flex-shrink-0">
          {children}
        </div>
        <div className="flex gap-12 md:gap-20 lg:gap-32 items-center flex-nowrap flex-shrink-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function BrandsSection() {
  return (
    <section className="bg-transparent pt-24 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="px-6 md:px-[120px] mb-2 md:mb-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl"
          >
            <h2 className="text-4xl md:text-[56px] font-medium text-white leading-[1.05] tracking-[-0.04em] md:max-w-none">
              Brands that <br className="md:hidden" />
              <span className="inline-flex items-baseline gap-x-4 md:gap-x-6">
                trust
                <svg
                  viewBox="0 0 108 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[0.72em] md:h-[0.75em] w-auto translate-y-[0.06em]"
                >
                  <path
                    d="M6.4442 14.1036L17.0652 0H24.663L15.0365 12.5896L24.7425 29.4821H17.3039L10.8199 18.0876L6.4442 23.8247V29.4821H0V0H6.4442V14.1036Z"
                    fill="#4F39F6"
                  />
                  <path
                    d="M26.2144 29.4821V0H32.579L44.9901 18.7649V0H51.3547V29.4821H44.9901L32.579 10.757V29.4821H26.2144Z"
                    fill="#4F39F6"
                  />
                  <path
                    d="M55.4917 0H67.7436C73.6707 0 77.2508 3.10757 77.2508 8.16733C77.2508 11.3147 75.8188 13.6255 73.1536 14.7809C76.0575 15.7371 77.6088 18.008 77.6088 21.3546C77.6088 21.3546 77.6088 21.4143 77.6088 21.3546C77.6088 26.5737 74.1083 29.4821 67.7436 29.4821H55.4917V0ZM61.9359 5.65737V12.0717H67.0674C69.3746 12.0717 70.6475 10.9163 70.6475 8.80478C70.6475 6.69323 69.4144 5.65737 67.0674 5.65737H61.9359ZM61.9359 17.49V23.8247H67.3856C69.7724 23.8247 71.0055 22.749 71.0055 20.5578C71.0055 18.5657 69.7326 17.49 67.3856 17.49H61.9359Z"
                    fill="#4F39F6"
                  />
                  <path
                    d="M86.4 23.506H98.0155V29.4821H79.9558V0H86.4V23.506Z"
                    fill="#4F39F6"
                  />
                  <circle cx="104.34" cy="25.8" r="3.7" fill="white" />
                </svg>
              </span>
            </h2>
            <TextReveal
              startEarly
              initialColor="#737373"
              revealedColor="#FFFFFF"
              className="text-xl md:text-2xl text-neutral-300 font-normal tracking-tight py-0"
            >
              From early stage companies to global teams, these are the partners we help move forward.
            </TextReveal>
          </motion.div>
        </div>
      </div>

      <div className="px-6 md:px-[120px]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-[-24px] md:space-y-[-44px]">
            <Marquee direction="left">
              {topRowBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className={brand.className || 'h-10 md:h-14'}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={200}
                    height={80}
                    className="h-full w-auto object-contain transition-all duration-300 pointer-events-none select-none"
                  />
                </div>
              ))}
            </Marquee>

            {/* Bottom Row - Moves Right */}
            <Marquee direction="right">
              {bottomRowBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}-rev`} className={brand.className || 'h-10 md:h-14'}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={200}
                    height={80}
                    className="h-full w-auto object-contain transition-all duration-300 pointer-events-none select-none"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section >
  );
}
