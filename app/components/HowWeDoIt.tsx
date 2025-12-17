'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Clarity',
    description: 'We strip away the corporate fluff until only the core business truth remains. If it isn\'t simple, it isn\'t ready',
    icon: '/images/ianimatedIcons/compass.json',
  },
  {
    number: '02',
    title: 'Creativity',
    description: 'We are storytellers at heart. We craft bold narratives and design that stand on their own, then use our in-house tech to make sure they travel further. It\'s art, amplified',
    icon: '/images/ianimatedIcons/light-bulb.json',
  },
  {
    number: '03',
    title: 'Obsessive Performance',
    description: 'Beautiful work means nothing if it doesn\'t convert. We are relentless about ROI, designing every asset to move the needle and proving its worth in real-time.',
    icon: '/images/ianimatedIcons/simulation.json',
  },
];

const AnimatedIcon = ({ src }: { src: string }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load lottie:', err));
  }, [src]);

  if (!animationData) return <div className="h-20 w-20" />;

  return (
    <div className="w-20 h-20">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default function HowWeDoIt() {
  return (
    <section className="pt-20 pb-50 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-medium mb-12"
            >
              The Way We{' '}
              <span className="text-primary-600">Work.</span>
            </motion.h2>

            <TextReveal className="py-0 [&>div]:max-w-none [&_p]:text-xl md:[&_p]:text-2xl [&_p]:text-neutral-600 [&_p]:leading-relaxed [&_p]:justify-start [&_p]:text-left">
              Marketing is sometimes magic. But success is mechanics. We don&apos;t leave your growth to chance. We back every creative spark with a rigorous system, replacing guesswork with evidence and noise with clear signals.
            </TextReveal>
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
                className="relative bg-primary-600 rounded-3xl p-10 md:p-14 overflow-hidden aspect-square flex flex-col justify-end"
              >
                {/* Large Number Background */}
                <div className="absolute top-0 left-6 text-[200px] font-extralight text-primary-700 leading-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <AnimatedIcon src={step.icon} />
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
