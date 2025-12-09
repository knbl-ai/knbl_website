'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

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
            <InteractiveHoverButton className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium">
              View All Projects
            </InteractiveHoverButton>
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
              className="md:col-span-4 h-[400px] rounded-3xl overflow-hidden cursor-pointer relative"
            >
              <Image
                src="/images/projects/project-1.webp"
                alt="Project 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>

            <div className="md:col-span-8 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="h-[190px] rounded-3xl overflow-hidden cursor-pointer relative"
              >
                <Image
                  src="/images/projects/project-2.webp"
                  alt="Project 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-[190px] rounded-3xl overflow-hidden cursor-pointer relative"
                >
                  <Image
                    src="/images/projects/project-3.webp"
                    alt="Project 3"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-[190px] rounded-3xl overflow-hidden cursor-pointer relative"
                >
                  <Image
                    src="/images/projects/project-4.webp"
                    alt="Project 4"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
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
              className="h-[250px] rounded-3xl overflow-hidden cursor-pointer relative"
            >
              <Image
                src="/images/projects/project-5.webp"
                alt="Project 5"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="h-[250px] rounded-3xl overflow-hidden cursor-pointer relative"
            >
              <Image
                src="/images/projects/project-6.webp"
                alt="Project 6"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
