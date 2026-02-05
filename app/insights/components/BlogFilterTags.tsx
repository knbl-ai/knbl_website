'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  'View all',
  'Data',
  'Culture',
  'AI',
  'Innovation',
  'Content',
  'Disruption',
];

export default function BlogFilterTags() {
  const [activeCategory, setActiveCategory] = useState('View all');

  return (
    <section className="px-6 md:px-[120px] pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
