'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Smart Strategy',
    description: 'We help brands cut through complexity and find their true focus. Every great move begins with clarity - understanding who you are, who you\'re speaking to, and what truly drives action.',
    icon: '🧭',
  },
  {
    number: '02',
    title: 'Creative That Connects',
    description: 'We turn strategy into stories that move people - not just through visuals or words, but through meaning. From brand identities to campaigns that shape conversations, our creative work is built to resonate and inspire.',
    icon: '💡',
  },
  {
    number: '03',
    title: 'Tech That Delivers',
    description: 'We blend creativity and technology to make marketing smarter, faster, and easier to scale. From AI-driven content systems to automated media operations, we help brands work efficiently without losing their human touch.',
    icon: '⚙️',
  },
];

export default function HowWeDoIt() {
  return (
    <section className="py-44 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-medium"
            >
              How we make it{' '}
              <span className="text-primary-600">happen.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-neutral-300 leading-normal"
            >
              At KNBL, strategy isn&apos;t just the first step - it&apos;s the thread that runs through everything we do.
              We combine strategic thinking, creative storytelling, and smart technology to build marketing that actually works.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-primary-600 rounded-3xl p-10 md:p-14 overflow-hidden"
              >
                {/* Large Number Background */}
                <div className="absolute top-0 left-6 text-[200px] font-extralight text-primary-700 leading-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="text-6xl">{step.icon}</div>
                  <h3 className="text-4xl font-medium text-white">{step.title}</h3>
                  <p className="text-xl text-white/90 leading-normal">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
