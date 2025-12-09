'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
  { name: 'El', logo: '/images/partners/el.png' },
  { name: 'Ho', logo: '/images/partners/ho.png' },
  { name: 'Raf', logo: '/images/partners/raf.png' },
  { name: 'Reuth', logo: '/images/partners/reuth.png' },
  { name: 'Rol', logo: '/images/partners/rol.png' },
  { name: 'Xi', logo: '/images/partners/xi.png' },
];

export default function BrandsSection() {
  return (
    <section className="bg-neutral-900 px-6 md:px-24 py-44">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 mb-16 max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-white">
            Brands that trust{' '}
            <span className="text-primary-600">KNBL</span>
          </h2>
          <p className="text-2xl text-neutral-300">
            From early stage companies to global teams, these are the partners we help move forward.
          </p>
        </motion.div>

        {/* Brands Grid - Single Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center h-20 cursor-pointer grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={156}
                height={78}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
