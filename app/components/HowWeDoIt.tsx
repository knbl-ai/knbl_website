'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';
import Lottie from 'lottie-react';
import { useEffect, useState, useRef } from 'react';

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
  const [isMobile, setIsMobile] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={sectionRef} className="pt-0 md:pt-16 pb-12 md:pb-32 px-6 md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          {/* Sticky Sidebar - Desktop only */}
          <div className="md:sticky md:top-[12vh] h-fit max-w-xl">
            <motion.h2
              className="text-4xl md:text-[56px] font-medium mb-8 tracking-tight leading-[1.1] text-black"
            >
              How we make <br />
              it <span className="text-primary-600">happen.</span>
            </motion.h2>

            <TextReveal
              startEarly
              containerRef={sectionRef}
              className={isMobile
                ? "py-0 text-[10px] leading-[1.6] font-normal tracking-wide text-neutral-500"
                : "py-0 text-lg md:text-[16px] leading-[1.6] font-light tracking-tight text-neutral-500"
              }
            >
              {isMobile
                ? "At KNBL, strategy isn't just the first step - it's the thread that runs through everything we do. We combine strategic thinking, creative storytelling, and smart technology to build marketing that actually works."
                : `At KNBL, strategy isn't just the first step - it's the thread that runs through everything we do.\nWe combine strategic thinking, creative storytelling, and smart technology to build marketing that actually works.`
              }
            </TextReveal>
          </div>

          {/* Steps */}
          <div className="space-y-6 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                data-theme="dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative bg-primary-600 rounded-[32px] p-8 md:p-10 lg:p-14 overflow-hidden flex flex-col justify-end ${isMobile
                  ? "min-h-[300px] md:min-h-[340px] lg:h-[380px]"
                  : "min-h-[400px] md:min-h-[480px] lg:min-h-[510px]"
                  }`}
              >
                {/* Large Number Background */}
                <div className={`absolute font-extralight text-primary-700 leading-none ${isMobile
                  ? "top-[-20px] md:top-[-30px] lg:top-[-45px] right-4 md:right-6 lg:right-10 text-[150px] md:text-[200px] lg:text-[260px]"
                  : "top-[-12px] md:top-[-24px] left-4 md:left-6 lg:left-10 text-[120px] md:text-[160px] lg:text-[200px]"
                  }`}>
                  {step.number}
                </div>

                {/* Content */}
                <div className={`relative z-10 ${isMobile ? 'space-y-3' : 'space-y-4'}`}>
                  <AnimatedIcon src={step.icon} />
                  <h3 className={`font-medium text-white ${isMobile ? 'text-[28px] md:text-[32px] lg:text-[40px] leading-[1.1] tracking-tight' : 'text-[28px] md:text-[32px] lg:text-[40px]'}`}>
                    {step.title}
                  </h3>
                  <TextReveal
                    startEarly
                    initialColor="rgba(255,255,255,0.4)"
                    revealedColor="#FFFFFF"
                    className={`font-light py-0 ${isMobile ? 'text-[12px] md:text-[13px] lg:text-[14px] leading-[1.3]' : 'text-[12px] md:text-[13px] lg:text-[14px] leading-relaxed'}`}
                  >
                    {step.description}
                  </TextReveal>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
