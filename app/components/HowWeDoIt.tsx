'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Clarity',
    description: 'We strip away the corporate fluff until only the core business truth remains always. If it isn\'t simple, it isn\'t ready',
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
    <section className="pt-12 md:pt-20 pb-24 md:pb-50 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit max-w-xl">
            <motion.h2
              className="text-4xl md:text-[56px] font-medium mb-8 tracking-tight leading-[1.1] text-black"
            >
              How we make <br />
              it <span className="text-primary-600">happen.</span>
            </motion.h2>

            <TextReveal className="py-0 text-lg md:text-[26px] leading-[1.5] font-medium tracking-tight text-neutral-500">
              {`At KNBL, strategy isn't just the first step - it's the thread that runs through everything we do.\nWe combine strategic thinking, creative storytelling, and smart technology to build marketing that actually works.`}
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
                className="relative bg-primary-600 rounded-[32px] p-8 md:p-10 lg:p-14 overflow-hidden min-h-[400px] md:min-h-[450px] lg:h-[510px] flex flex-col justify-end"
              >
                {/* Large Number Background */}
                <div className="absolute top-[-12px] md:top-[-24px] left-4 md:left-6 lg:left-10 text-[120px] md:text-[160px] lg:text-[200px] font-extralight text-primary-700 leading-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <AnimatedIcon src={step.icon} />
                  <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-medium text-white">{step.title}</h3>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/90 leading-normal">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
