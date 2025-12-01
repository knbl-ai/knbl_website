'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Strategy',
    description: 'We turn insights into direction.',
    gradient: 'from-primary-900 to-primary-600',
    image: '/images/services/strategy-bg.webp',
  },
  {
    title: 'Message',
    description: 'We craft stories that resonate.',
    gradient: 'from-primary-700 to-primary-600',
    image: '/images/services/message-bg.webp',
    rotate: true,
  },
  {
    title: 'Creative',
    description: 'We bring ideas to life.',
    gradient: 'from-primary-600 to-primary-700',
    image: '/images/services/creative-bg.webp',
    rotate: true,
  },
  {
    title: 'Data',
    description: 'We measure what matters.',
    gradient: 'from-primary-600 to-primary-900',
    image: '/images/services/data-bg.webp',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-neutral-900 px-6 md:px-24 py-44">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-medium text-white mb-16 max-w-3xl"
        >
          How we make brands impossible{' '}
          <span className="text-primary-600">to ignore.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative h-[600px] rounded-3xl overflow-hidden cursor-pointer group ${
                service.rotate ? 'md:rotate-90' : ''
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-80`} />

              {/* Content Container */}
              <div className="relative h-full p-12 flex flex-col justify-between">
                {/* Arrow Icon */}
                <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Content */}
                <div className={`${service.rotate ? 'md:rotate-[-90deg]' : ''} space-y-3`}>
                  <h3 className="text-5xl font-medium text-white">{service.title}</h3>
                  <p className="text-primary-200 text-base">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
