'use client';

import { motion } from 'framer-motion';
import { BarChart3, Lightbulb, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Marketing powered by insights and AI for measurable results.',
  },
  {
    icon: Lightbulb,
    title: 'Creative That Connects',
    description: 'Campaigns and stories that make people stop scrolling.',
  },
  {
    icon: Zap,
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
    <section className="py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[56px] font-medium tracking-[-0.03em] mb-6"
            >
              Why KNBL{' '}
              <span className="text-primary-600">Stands Out.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-300 text-xl leading-relaxed"
            >
              Built for ambitious brands, we combine strategy, creativity, and technology to deliver marketing that truly works.
            </motion.p>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-50 rounded-3xl p-8 h-[320px] flex flex-col justify-between"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.03em] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
