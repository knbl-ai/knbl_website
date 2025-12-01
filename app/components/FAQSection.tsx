'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

function FAQCard({ question, answer, isOpen, onToggle }: any) {
  return (
    <div className="bg-indigo-50 rounded-3xl p-8 md:p-12">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <h3 className="text-xl font-medium">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-11 h-11 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-6 text-neutral-400 leading-normal">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-44 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-medium">
              Got questions?
              <br />
              <span>We've got </span>
              <span className="text-primary-600">answers.</span>
            </h2>
          </motion.div>

          {/* Right Column - FAQs */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQCard
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
