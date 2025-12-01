'use client';

import { motion } from 'framer-motion';

const brands = [
  'Microsoft', 'Adobe', 'Intel', 'Xiaomi', 'Samsung', 'Google',
  'Meta', 'Netflix', 'Spotify', 'Apple', 'Amazon', 'Tesla',
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

        {/* Brands Grid - Row 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12"
        >
          {brands.slice(0, 6).map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center h-20 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <div className="text-xl font-medium">{brand}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brands Grid - Row 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-6 gap-8"
        >
          {brands.slice(6).map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center h-20 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <div className="text-xl font-medium">{brand}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
