'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';

const stats = [
  {
    value: '24/7',
    label: 'Thinking time',
    description: "Because a great idea doesn't always\nhappen between 9 and 5",
  },
  {
    value: '9,357',
    label: 'Coffees & Breakthroughs',
    description: "The fuel behind every successful\nstrategy we've launched.",
  },
  {
    value: '0',
    label: 'Buzzwords',
    description: "We prefer real talk and clear results\nover industry hype and empty promises",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 px-6 md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl md:text-[64px] font-medium tracking-[-0.04em] mb-1">
                {stat.value}
              </p>
              <p className="text-lg md:text-xl font-bold mb-4 tracking-tight">
                {stat.label}
              </p>
              <TextReveal
                startEarly
                initialColor="#CFCFD3"
                revealedColor="#73727E"
                className="text-[15px] md:text-[18px] leading-relaxed py-0 justify-center text-center"
              >
                {stat.description}
              </TextReveal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
