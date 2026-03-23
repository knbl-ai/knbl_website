'use client';

import { motion } from 'framer-motion';

const categories = [
  'View all',
  'AI & Tech',
  'Data',
  'Brand Strategy',
  'Strategy',
  'Content',
];

interface BlogFilterTagsProps {
  activeCategories: string[];
  toggleCategory: (category: string) => void;
}

export default function BlogFilterTags({ activeCategories, toggleCategory }: BlogFilterTagsProps) {
  return (
    <section className="px-6 md:px-[120px] pt-10 pb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <span className="text-neutral-400 text-sm font-medium whitespace-nowrap">Filter by:</span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategories.includes(category)
                ? 'bg-primary-600 text-white border-primary-600 shadow-lg scale-105'
                : 'bg-white text-neutral-400 border-neutral-200 hover:border-primary-600 hover:text-primary-600'
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
