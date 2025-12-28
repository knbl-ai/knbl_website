'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    value: '+180%',
    description: 'increase in average ROAS across our performance accounts',
  },
  {
    value: '120M+',
    description: 'monthly impressions managed across channels',
  },
  {
    value: '70%',
    description: 'of new clients come from referrals and returning brands',
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 px-6 md:px-24">
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
              <p className="text-5xl md:text-[64px] font-medium tracking-[-0.04em] mb-4">
                {stat.value}
              </p>
              <p className="text-neutral-300 text-lg">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
