'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  image: string;
  name: string;
  alt: string;
  slug: string;
  delay?: number;
}

const projects: Project[] = [
  { id: 1, image: '/images/projects/project-1.webp', name: 'H&O', alt: 'H&O', slug: 'ho-brands', delay: 0 },
  { id: 2, image: '/images/projects/project-5.webp', name: 'Rafael', alt: 'Rafael', slug: 'rafael', delay: 0.1 },
  { id: 3, image: '/images/projects/xiaomi.jpg', name: 'Xiaomi', alt: 'Xiaomi', slug: 'xiaomi', delay: 0.2 },
  { id: 4, image: '/images/projects/project-3.webp', name: 'Roladin', alt: 'Roladin', slug: 'roladin', delay: 0.3 },
  { id: 5, image: '/images/projects/project-6.webp', name: "Carter's", alt: "Carter's", slug: 'carters', delay: 0.4 },
  { id: 6, image: '/images/projects/project-2.webp', name: 'Electra', alt: 'Electra', slug: 'electra', delay: 0.5 },
  { id: 7, image: '/images/projects/project-7.png', name: 'Takeda', alt: 'Takeda', slug: 'takeda', delay: 0.6 },
  { id: 8, image: '/images/projects/project-8.png', name: 'Aion', alt: 'Aion', slug: 'aion', delay: 0.7 },
  { id: 9, image: '/images/projects/project-9.png', name: 'Reuth Hospital', alt: 'Reuth Hospital', slug: 'reuth-hospital', delay: 0.8 },
];

function ProjectCard({ project, height = 'h-[250px]' }: { project: Project; height?: string }) {
  return (
    <Link href={`/work/${project.slug}`} className="block">
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
    </Link>
  );
}

export default function WorkProjectsGrid() {
  return (
    <section className="py-12 px-6 md:px-24 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Projects Grid */}
        <div className="space-y-4">
          {/* First Row Block (4 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4">
              <ProjectCard project={projects[0]} height="h-[516px]" />
            </div>

            <div className="md:col-span-8 flex flex-col gap-4">
              <ProjectCard project={projects[1]} height="h-[250px]" />

              <div className="grid grid-cols-2 gap-4">
                <ProjectCard project={projects[2]} height="h-[250px]" />
                <ProjectCard project={projects[3]} height="h-[250px]" />
              </div>
            </div>
          </div>

          {/* Second Row Block (2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard project={projects[4]} height="h-[250px]" />
            <ProjectCard project={projects[5]} height="h-[250px]" />
          </div>

          {/* Third Row Block (The new 3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 flex flex-col gap-4">
              <ProjectCard project={projects[6]} height="h-[250px]" />
              <ProjectCard project={projects[7]} height="h-[250px]" />
            </div>

            <div className="md:col-span-4">
              <ProjectCard project={projects[8]} height="h-[516px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
