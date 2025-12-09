'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

interface Project {
  id: number;
  image: string;
  name: string;
  alt: string;
  delay?: number;
}

const projects: Project[] = [
  { id: 1, image: '/images/projects/project-1.webp', name: 'H&O', alt: 'H&O', delay: 0 },
  { id: 2, image: '/images/projects/project-2.webp', name: 'Electra', alt: 'Electra', delay: 0.1 },
  { id: 3, image: '/images/projects/project-3.webp', name: 'Roladin', alt: 'Roladin', delay: 0.2 },
  { id: 4, image: '/images/projects/project-4.webp', name: 'Eden', alt: 'Eden', delay: 0.3 },
  { id: 5, image: '/images/projects/project-5.webp', name: 'Rafael', alt: 'Rafael', delay: 0.4 },
  { id: 6, image: '/images/projects/project-6.webp', name: 'On', alt: 'On', delay: 0.5 },
];

function ProjectCard({ project, height = 'h-[250px]' }: { project: Project; height?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: project.delay }}
      className={`${height} rounded-3xl overflow-hidden cursor-pointer relative group`}
    >
      <Image
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Purple overlay on hover */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 bg-primary-600 p-4 flex items-center justify-between"
      >
        <span className="text-white font-semibold text-lg">{project.name}</span>
        <motion.div
          className="group/button bg-white rounded-full flex items-center cursor-pointer overflow-hidden h-12 px-3"
          initial={false}
          whileHover="hover"
          animate="rest"
        >
          <motion.span
            variants={{
              rest: { width: 0, opacity: 0, marginRight: 0 },
              hover: { width: 'auto', opacity: 1, marginRight: 8 }
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="text-primary-600 font-semibold text-sm whitespace-nowrap overflow-hidden"
          >
            View Case
          </motion.span>
          <ArrowRight className="w-6 h-6 text-primary-600 flex-shrink-0" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

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
              See the Work
            </InteractiveHoverButton>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-4">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4">
              <ProjectCard project={projects[0]} height="h-[400px]" />
            </div>

            <div className="md:col-span-8 space-y-4">
              <ProjectCard project={projects[1]} height="h-[190px]" />

              <div className="grid grid-cols-2 gap-4">
                <ProjectCard project={projects[2]} height="h-[190px]" />
                <ProjectCard project={projects[3]} height="h-[190px]" />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard project={projects[4]} height="h-[250px]" />
            <ProjectCard project={projects[5]} height="h-[250px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
