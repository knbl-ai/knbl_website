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
    role: 'Co-Founder',
    image: '/images/projects/project-1.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/RAZ1.webm',
    bio: "The operational backbone. Raz is the one who makes sure the gears are turning, the numbers are crushing it, and every single workflow is executed to perfection. He's the reason 'how we make it happen' actually happens.",
    bgColor: '#EEF2FF',
  },
  {
    name: 'Ravit',
    role: 'Co-Founder',
    image: '/images/projects/project-2.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/Ravit1.webm',
    bio: "Our spark and visionary. Ravit leads the charge in business development and innovation, ensuring KNBL stays at the bleeding edge where marketing meets technology. She's the energy that keeps us moving forward.",
    bgColor: '#EEF2FF',
  },
  {
    name: 'Hadar',
    role: 'VP Clients',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/HADAR.webm',
    bio: "The strategic anchor for our partners. Hadar ensures that every brand vision is translated into a flawless roadmap for growth. With a deep understanding of the client journey and a passion for real connection, she oversees our partnerships to make sure they aren't just successful, but exceptional.",
    bgColor: '#EEF2FF',
    videoStyle: { transform: 'translateY(20px)' },
  },
  {
    name: 'Daniel',
    role: 'Head of Content',
    image: '/images/projects/project-4.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/Daniel1.webm',
    bio: "The architect of stories. Daniel takes strategic insights and carves them into content that leaves a mark. He's allergic to fluff and obsessed with finding your brand's true voice.",
    bgColor: '#EEF2FF',
  },
  {
    name: 'Michelle',
    role: 'Client Manager',
    image: '/images/projects/project-5.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/michelle.webm',
    bio: "Your partner in growth. Michelle bridges the gap between your goals and our execution, making sure every project feels like a shared win.",
    bgColor: '#EEF2FF',
  },
  {
    name: 'Niv',
    role: 'Client Manager',
    image: '/images/projects/project-2.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/Niv1.webm',
    bio: "Niv handles the details so you don't have to, ensuring that the road from strategy to results is always a smooth, human experience.",
    bgColor: '#EEF2FF',
  },
  {
    name: 'Omer',
    role: 'Client Manager',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/OMER.webm',
    bio: "The master of industry pulse and partner needs. Omer brings a sharp analytical eye to every project, ensuring that our strategies aren't just visionary but perfectly aligned with current market realities.",
    bgColor: '#EEF2FF',
    videoStyle: { transform: 'scale(1.6)' },
  },
  {
    name: 'Noya',
    role: 'Content Manager & Head of Fun',
    image: '/images/projects/project-6.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/NOYA1.webm',
    bio: "Strategic creativity with a pulse. Noya proves that professional results and a playful spirit aren't mutually exclusive - they're the secret sauce to great work.",
    bgColor: '#EEF2FF',
  },
  {
    name: 'Daniella',
    role: 'Content Manager & Head of Fun',
    image: '/images/projects/project-3.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/Daniela2.webm',
    bio: "Content expert and our unofficial Chief Happiness Officer. She ensures our creative output is as engaging as the vibe she brings to the office every single day.",
    bgColor: '#EEF2FF',
    videoStyle: { transform: 'translateY(20px)' },
  },
  {
    name: 'Noa',
    role: 'Content Manager',
    image: '/images/projects/project-1.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/noa1.webm',
    bio: 'A natural at finding the "signal" in the noise. Noa crafts content that speaks directly to the audience, turning complex strategy into messages that resonate and engage.',
    bgColor: '#EEF2FF',
  },
  {
    name: 'Ido',
    role: 'Media Manager',
    image: '/images/projects/project-1.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/Ido1.webm',
    bio: "The performance pilot. Ido lives in the data, optimizing every campaign to make sure your brand isn't just seen, but heard by the right people at the right time.",
    bgColor: '#EEF2FF',
  },
  {
    name: 'Vladi',
    role: 'CTO and AI creator',
    image: '/images/projects/project-2.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/Vladi.webm',
    bio: "The fusion of complex code and breathtaking content. Vladi builds the sophisticated systems that power our agency while leading our top-tier AI productions. By blending deep technical engineering with visionary AI creation, he ensures your brand isn't just following tech trends - it's defining them.",
    bgColor: '#EEF2FF',
  },
  {
    name: 'Ronit',
    role: 'Studio Manager',
    image: '/images/projects/project-3.webp',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/Ronit.webm',
    bio: "The conductor of the creative orchestra. Ronit keeps the studio in perfect harmony, managing timelines and talents to make sure our high standards are met every single time.",
    bgColor: '#EEF2FF',
  },
  {
    name: 'Adi',
    role: 'Designer',
    video: 'https://storage.googleapis.com/knbl_website/optimized/videos/our%20team/ADI.webm',
    bio: "The visual translator. Adi turns abstract ideas into high-end aesthetics, ensuring that every brand we grow doesn't just perform well, but looks incredible doing it.",
    bgColor: '#EEF2FF',
    videoStyle: { transform: 'translateY(20px)' },
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
          className="absolute inset-0 rounded-3xl bg-primary-600 p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <p className="text-white text-2xl font-medium mb-0.5">{member.name}</p>
            <p className="text-[#A3B3FF] text-base mb-2">{member.role}</p>
            <p className="text-white text-lg leading-tight">{member.bio}</p>
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
