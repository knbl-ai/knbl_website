'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';

export default function AboutHero() {
  return (
    <section className="pt-32 md:pt-48 pb-16 px-6 md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[56px] font-medium tracking-[-0.04em]"
          >
            The <span className="text-primary-600">Agency.</span>
          </motion.h1>
        </div>

        {/* Description with Text Reveal Animation */}
        <TextReveal
          startEarly
          biggerFirstLine
          initialColor="#CFCFD3"
          revealedColor="#000000"
          className="py-0 text-[18px] md:text-[26px] leading-[1.4] md:leading-[1.5] font-medium tracking-tight text-center justify-center max-w-5xl mx-auto"
        >
          {`Thinkers, creators, and your biggest fans.\nWe’ve spent over a decade navigating the digital frontier, but we’ve never forgotten that behind every data point, pixel, and line of code, there’s a person.\nAt **KNBL**, we build partnerships, relationships.\nWe believe that the best marketing solutions don’t come from adding more noise, but from listening closely to what matters.`}
        </TextReveal>
      </div>
    </section>
  );
}
