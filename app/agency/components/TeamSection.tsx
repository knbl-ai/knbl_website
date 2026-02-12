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
    role: 'CEO',
    image: '/images/projects/project-1.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/RAZ1.mp4',
    bio: 'Founder of KNBL, leading the vision of creative and strategic excellence.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Ravit',
    role: 'CEO',
    image: '/images/projects/project-2.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Ravit1.mp4',
    bio: 'Co-Founder of KNBL, driving brand growth and strategic partnerships.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Daniel',
    role: 'Head of Content',
    image: '/images/projects/project-4.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Daniel1.mp4',
    bio: 'Leading performance marketing and data-driven growth strategies.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Michelle',
    role: 'Clients Manager',
    image: '/images/projects/project-5.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/michelle.mp4',
    bio: 'Developing compelling creative narratives and visual brand identities.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Ido',
    role: 'Media Manager',
    image: '/images/projects/project-1.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Ido1.mp4',
    bio: 'Crafting visionary creative concepts and high-impact visual storytelling.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Niv',
    role: 'Clients Manager',
    image: '/images/projects/project-2.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Niv1.mp4',
    bio: 'Bridging the gap between client vision and technical execution.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Daniella',
    role: 'Content Manager & Head of Fun',
    image: '/images/projects/project-3.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Daniela2.mp4',
    bio: 'Shaping social presence through engaging and innovative content.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Noya',
    role: 'Content Manager & Head of Fun',
    image: '/images/projects/project-6.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/NOYA1.mp4',
    bio: 'Ensuring seamless studio operations and creative project workflows.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Noa',
    role: 'Content Manager',
    image: '/images/projects/project-1.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/noa1.mp4',
    bio: 'Designing and executing high-performance paid search and social campaigns.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Vladi',
    role: 'AI Developer',
    image: '/images/projects/project-2.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Vladi.mp4',
    bio: 'Building robust and scalable digital solutions with a focus on user experience.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Ronit',
    role: 'Studio Manager',
    image: '/images/projects/project-3.webp',
    video: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Ronit.mp4',
    bio: 'Crafting engaging content strategies that tell a compelling brand story.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Adi',
    role: 'Designer',
    image: 'https://storage.googleapis.com/knbl_website/videos/our%20team/Gemini_Generated_Image_6xty5o6xty5o6xty.png',
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
            <p className="text-[#A3B3FF] text-base mb-6">{member.role}</p>
            <p className="text-white text-lg leading-relaxed">{member.bio}</p>
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
          <TextReveal
            startEarly
            initialColor="#CFCFD3"
            revealedColor="#000000"
            className="text-xl md:text-2xl max-w-xl py-0"
          >
            Thinkers by day, dreamers by night, and your full-time partners
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
