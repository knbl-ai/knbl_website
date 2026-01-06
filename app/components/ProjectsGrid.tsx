'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { VideoPreview } from '@/components/ui/VideoPreview';
import { ArrowRight } from 'lucide-react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

interface Project {
  id: number;
  image: string;
  videoUrl: string;
  name: string;
  slug: string;
  alt: string;
  delay?: number;
}

const projects: Project[] = [
  {
    id: 1,
    image: '/images/projects/project-1.webp',
    videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176443/H_O_Brand_collection_jt2hv9.mp4',
    name: 'H&O',
    slug: 'ho-brands',
    alt: 'H&O',
    delay: 0
  },
  {
    id: 2,
    image: '/images/projects/project-2.webp',
    videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767619624/3791_ELECTRA_AI_SARONA_VID_ENGLISH_1920x1080_tz9isv.mp4',
    name: 'Electra',
    slug: 'electra',
    alt: 'Electra',
    delay: 0.1
  },
  {
    id: 3,
    image: '/images/projects/project-3.webp',
    videoUrl: 'https://storage.googleapis.com/knbl_website/roladin%20-%20movie%202.mp4',
    name: 'Roladin',
    slug: 'roladin',
    alt: 'Roladin',
    delay: 0.2
  },
  {
    id: 4,
    image: '/images/projects/xiaomi.jpg',
    videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767617056/Pocco_X7_launch_for_Xiaomi_-_AI_production_uetowy.mp4',
    name: 'Xiaomi',
    slug: 'xiaomi',
    alt: 'Xiaomi',
    delay: 0.3
  },
  {
    id: 5,
    image: '/images/projects/project-5.webp',
    videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767180623/%D7%93%D7%95%D7%97%D7%95%D7%AA_%D7%9B%D7%A1%D7%A4%D7%99%D7%99%D7%9D_%D7%A2%D7%9D_%D7%A1%D7%90%D7%95%D7%A0%D7%93_-_%D7%A8%D7%95%D7%97%D7%91%D7%99_psbzgb.mp4',
    name: 'Rafael',
    slug: 'rafael',
    alt: 'Rafael',
    delay: 0.4
  },
  {
    id: 6,
    image: '/images/projects/project-6.webp',
    videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176444/Carter_s_-_with_you_from_the_start_zb0d6q.mp4',
    name: "Carter's",
    slug: 'carters',
    alt: "Carter's",
    delay: 0.5
  },
];

function ProjectCard({ project, height = 'h-[250px]' }: { project: Project; height?: string }) {
  return (
    <Link href={`/work/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: project.delay }}
        className={`${height} rounded-3xl overflow-hidden cursor-pointer relative group`}
      >
        <VideoPreview
          videoUrl={project.videoUrl}
          posterUrl={project.image}
          alt={project.alt}
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
            <Link href="/work">
              <InteractiveHoverButton className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium">
                See the Work
              </InteractiveHoverButton>
            </Link>
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
