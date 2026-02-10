'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TextReveal } from '@/components/ui/text-reveal';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  video?: string;
  bio: string;
  videoClass?: string;
  videoStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  bgColor?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Raz',
    role: 'Founder',
    image: '/images/projects/project-1.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/RAZ1.mp4',
    bio: 'Founder of KNBL, leading the vision of creative and strategic excellence.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Ravit',
    role: 'Co-Founder',
    image: '/images/projects/project-2.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Ravit1.mp4',
    bio: 'Co-Founder of KNBL, driving brand growth and strategic partnerships.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Daniel',
    role: 'Performance Lead',
    image: '/images/projects/project-4.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Daniel1.mp4',
    bio: 'Leading performance marketing and data-driven growth strategies.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Michelle',
    role: 'Creative Strategist',
    image: '/images/projects/project-5.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/michelle.mp4',
    bio: 'Developing compelling creative narratives and visual brand identities.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Ido',
    role: 'Creative Lead',
    image: '/images/projects/project-1.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Ido1.mp4',
    bio: 'Crafting visionary creative concepts and high-impact visual storytelling.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Niv',
    role: 'Account Director',
    image: '/images/projects/project-2.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Niv1.mp4',
    bio: 'Bridging the gap between client vision and technical execution.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Daniella',
    role: 'Social Content Creator',
    image: '/images/projects/project-3.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Daniela2.mp4',
    bio: 'Shaping social presence through engaging and innovative content.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Noya',
    role: 'Studio Manager',
    image: '/images/projects/project-6.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/NOYA1.mp4',
    bio: 'Ensuring seamless studio operations and creative project workflows.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Noa',
    role: 'PPC Specialist',
    image: '/images/projects/project-1.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/noa1.mp4',
    bio: 'Designing and executing high-performance paid search and social campaigns.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Vladi',
    role: 'Senior Developer',
    image: '/images/projects/project-2.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Vladi.mp4',
    bio: 'Building robust and scalable digital solutions with a focus on user experience.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Ronit',
    role: 'Content Manager',
    image: '/images/projects/project-3.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Ronit.mp4',
    bio: 'Crafting engaging content strategies that tell a compelling brand story.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Adi',
    role: 'Creative Designer',
    bio: 'Bringing brands to life through innovative and impactful visual design.',
    bgColor: '#EEF2FF',
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="relative h-[400px] cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side - Media with gradient */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            backgroundColor: member.bgColor || 'rgb(245 247 255)'
          }}
        >
          {/* Atmospheric Background Layers */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Soft Light Catch - Simulates natural window lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4)_0%,transparent_50%)]" />

            {/* Grain/Noise Overlay for dispersion quality */}
            <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          </div>

          {member.video ? (
            <video
              src={member.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 mix-blend-multiply"
              style={member.videoStyle}
            />
          ) : member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-opacity duration-700"
              style={member.imageStyle}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          ) : null}

          {/* Signature Purple Dispersion Filter Overlay - Lower Quarter with smoother falloff */}
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-primary-600/90 via-primary-600/60 via-primary-600/30 to-transparent z-10" />

          {/* Dynamic Light Flare for atmosphere */}
          {!member.bgColor && <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-400/20 rounded-full blur-[60px] z-10" />}

          {/* Front Content */}
          <div className="absolute bottom-10 left-0 right-0 text-center px-6 z-20">
            <p className="text-white text-2xl font-medium tracking-tight mb-0.5">
              {member.name}
            </p>
            <p className="text-[#A3B3FF] text-[15px] font-normal leading-tight">
              {member.role}
            </p>
          </div>
        </div>

        {/* Back Side - Solid color with info */}
        <div
          className="absolute inset-0 rounded-3xl bg-primary-600 p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <p className="text-white text-2xl font-medium mb-1">{member.name}</p>
            <p className="text-primary-300 text-base mb-6">{member.role}</p>
            <p className="text-white text-lg leading-relaxed">{member.bio}</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-24 px-6 md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[56px] font-medium tracking-[-0.03em] mb-6"
          >
            Our <span className="text-primary-600">Team.</span>
          </motion.h2>
          <TextReveal startEarly className="text-xl md:text-2xl max-w-xl py-0">
            The people driving strategy, performance and creative thinking at KNBL.
          </TextReveal>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
