'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive marketing services including strategy, creative development, data analytics, and technology implementation. Our team specializes in turning insights into actionable campaigns that drive results.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope and complexity. A typical brand strategy project takes 4-6 weeks, while a full campaign can take 2-3 months from concept to launch.',
  },
  {
    question: 'How do you ensure quality in your work?',
    answer: 'We follow a rigorous process that combines strategic thinking, creative excellence, and data-driven insights. Every project goes through multiple review stages and is tested before launch.',
  },
  {
    question: 'Do you work with companies outside of Israel?',
    answer: 'Yes, we work with clients globally. Our team is experienced in remote collaboration and has successfully delivered projects for clients across multiple continents.',
  },
  {
    question: 'Can I customize the services to fit my needs?',
    answer: 'Absolutely. We understand that every brand is unique. We offer flexible service packages and can create custom solutions tailored to your specific needs and budget.',
  },
];

interface FAQCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQCard({ question, answer, isOpen, onToggle }: FAQCardProps) {
  return (
    <motion.div
      layout
      transition={{
        layout: {
          type: "spring",
          stiffness: 400,
          damping: 22,
          mass: 1
        }
      }}
      className="bg-indigo-50 rounded-[32px] py-6 px-8"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 text-left group"
      >
        <h3 className="text-[16px] md:text-[18px] font-medium text-black leading-tight">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 bg-primary-600 group-hover:bg-[#8B7DFF] rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: "spring", stiffness: 400, damping: 20 },
              opacity: { duration: 0.2 }
            }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-[17px] text-neutral-500 leading-relaxed font-normal">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const handleToggle = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 md:py-44 px-6 md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column - Heading */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-[56px] font-medium tracking-tight leading-[1.1] text-black">
              Got questions? <br />
              We&apos;ve got <span className="text-primary-600">answers.</span>
            </h2>
          </div>

          {/* Right Column - FAQs */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                layout
                transition={{
                  layout: {
                    type: "spring",
                    stiffness: 400,
                    damping: 22,
                    mass: 1
                  },
                  opacity: { delay: index * 0.1 },
                  y: { delay: index * 0.1 }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FAQCard
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndices.includes(index)}
                  onToggle={() => handleToggle(index)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
