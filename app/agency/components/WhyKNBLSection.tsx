'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';

const reasons = [
  {
    title: 'Strategic Precision',
    description: 'We don\'t believe in noise. Every move we make for our brands is intentional, data-backed, and designed for measurable impact.',
  },
  {
    title: 'Creative Excellence',
    description: 'We combine bold storytelling with high-precision execution to ensure your brand stands out in a crowded digital landscape.',
  },
  {
    title: 'Performance Driven',
    description: 'Beautiful work is only half the battle. We are relentless about ROI, optimizing every campaign to move the needle for your business.',
  },
];

export default function WhyKNBLSection() {
  return (
    <section className="py-24 px-6 md:px-[120px] bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[56px] font-medium tracking-[-0.03em] mb-6"
          >
            Why <span className="text-primary-600">KNBL?</span>
          </motion.h2>
          <TextReveal startEarly className="text-xl md:text-2xl max-w-xl py-0">
            We bridge the gap between bold creativity and ruthless performance.
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-medium tracking-tight">{reason.title}</h3>
              <p className="text-neutral-500 text-lg leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
