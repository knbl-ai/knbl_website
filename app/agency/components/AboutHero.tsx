'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-200 text-xl mb-5"
          >
            Our Agency
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[56px] font-medium tracking-[-0.03em]"
          >
            About <span className="text-primary-600">Us.</span>
          </motion.h1>
        </div>

        {/* Description with Text Reveal Animation */}
        <TextReveal startEarly className="py-0 [&>div]:max-w-3xl [&>div]:mx-auto [&_p]:text-xl md:[&_p]:text-2xl [&_p]:text-neutral-300 [&_p]:leading-relaxed [&_p]:text-center [&_p]:justify-center">
          KNBL is a performance driven digital agency helping brands grow through strategy, creative content and data based marketing. We combine smart media, strong creative and fast execution to bring brands real results in real time.
        </TextReveal>
      </div>
    </section>
  );
}
