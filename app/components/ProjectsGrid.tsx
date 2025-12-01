'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ProjectsGrid() {
  return (
    <section id="work" className="py-44 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-medium max-w-2xl"
          >
            The Brands We&apos;ve{' '}
            <span className="text-primary-600">Grown.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button>View All Projects</Button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-4">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-4 h-[400px] bg-gradient-to-br from-primary-600 to-primary-900 rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-medium">
                Project 1
              </div>
            </motion.div>

            <div className="md:col-span-8 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="h-[190px] bg-gradient-to-br from-indigo-400 to-primary-600 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-white text-2xl font-medium">
                  Project 2
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-[190px] bg-gradient-to-br from-primary-700 to-indigo-600 rounded-3xl overflow-hidden cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-2xl font-medium">
                    Project 3
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-[190px] bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl overflow-hidden cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-2xl font-medium">
                    Project 4
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="h-[250px] bg-gradient-to-br from-indigo-500 to-primary-600 rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-medium">
                Project 5
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="h-[250px] bg-gradient-to-br from-primary-600 to-primary-900 rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-medium">
                Project 6
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
