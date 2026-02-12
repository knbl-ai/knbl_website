'use client';

import { motion } from 'framer-motion';
import { Monitor, Lightbulb, Timer, Users } from 'lucide-react';
import { TextReveal } from '@/components/ui/text-reveal';

const reasons = [
  {
    icon: Monitor,
    title: 'Data-Driven',
    description: 'Marketing powered by insights and AI for measurable results.',
  },
  {
    icon: Lightbulb,
    title: 'Creative That Connects',
    description: 'Campaigns and stories that make people stop scrolling.',
  },
  {
    icon: Timer,
    title: 'Fast Execution',
    description: 'From strategy to results, efficiently and effectively.',
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'Working closely with clients to ensure ideas come to life exactly as envisioned.',
  },
];

export default function WhyKNBLSection() {
  return (
    <section className="py-24 px-6 md:px-[120px] bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-start lg:justify-between">
        {/* Left Side: Text */}
        <div className="lg:w-[40%]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[64px] font-medium tracking-[-0.03em] leading-[1.1] mb-6"
          >
            Why KNBL <br />
            <span className="text-primary-600">Stands Out.</span>
          </motion.h2>
          <TextReveal
            startEarly
            initialColor="#CFCFD3"
            revealedColor="#000000"
            className="text-xl md:text-2xl leading-relaxed max-w-md py-0"
          >
            Built for ambitious brands, we combine strategy, creativity, and technology to deliver marketing that truly works.
          </TextReveal>
        </div>

        {/* Right Side: Cards Grid */}
        <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F5F7FF] p-8 rounded-[40px] flex flex-col items-start min-h-[290px] justify-between"
            >
              <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center mb-10">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[30px] font-medium tracking-tight mb-3 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-neutral-500 text-base md:text-[17px] leading-snug">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
