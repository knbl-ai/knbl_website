'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-indigo-50/30 to-white pt-32">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[30%] right-[-15%] w-[1100px] h-[1100px] opacity-60"
          style={{ rotate: '242deg' }}
        >
          <Image
            src="/images/hero/blob-1.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[40%] left-[-15%] w-[1200px] h-[1200px] opacity-60"
          style={{ rotate: '314deg' }}
        >
          <Image
            src="/images/hero/blob-2.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.1, 1],
            y: [0, -30, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.4 },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 13, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] opacity-60"
          style={{ rotate: '41deg' }}
        >
          <Image
            src="/images/hero/blob-3.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 mix-blend-soft-light opacity-30">
          <Image
            src="/images/hero/vector-bg.svg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] tracking-[-0.04em]">
            <span className="block">Outshine the noise.</span>
            <span className="inline-block">
              <span className="text-[#5B4DFF]">We make brands </span>
              <span>unforgettable</span>
            </span>
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 flex justify-center"
        >
          <ScrollIndicator onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }} />
        </motion.div>
      </div>

      {/* Floating Badge Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-[25%] left-[15%] hidden lg:block"
      >
        <motion.div
          animate={{
            x: [0, 35, -20, 0],
            y: [0, -45, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-[230px] h-[230px]">
            <Image
              src="/images/hero/floating-badge-1.webp"
              alt="20 years of experience"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: [0, -40, 45, 0],
            y: [0, 30, -25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-[85%] left-[15%] bg-white/50 backdrop-blur-sm px-5 py-2 rounded-full whitespace-nowrap"
        >
          <p className="text-sm font-normal text-black">20 years of experience</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-[18%] right-[12%] hidden lg:block"
      >
        <motion.div
          animate={{
            x: [0, -40, 25, 0],
            y: [0, 30, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/images/hero/floating-badge-2.webp"
              alt="50+ campaigns launched"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -15, 25, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="absolute bottom-[-30px] right-0 bg-white/50 backdrop-blur-sm px-5 py-2 rounded-full whitespace-nowrap"
        >
          <p className="text-sm font-normal text-black">50+ campaigns launched</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute top-[18%] right-[10%] hidden lg:block"
      >
        <motion.div
          animate={{
            x: [0, -30, 15, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-[160px] h-[160px]">
            <Image
              src="/images/hero/floating-badge-3.webp"
              alt="Creative teams in TLV"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-[8%] left-[6%] hidden lg:block"
      >
        <motion.div
          animate={{
            x: [0, 40, -15, 0],
            y: [0, 35, -10, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="bg-white/50 backdrop-blur-sm px-5 py-2 rounded-full whitespace-nowrap"
        >
          <p className="text-sm font-normal text-black">Creative teams in TLV</p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, 25, -30, 0],
          y: [0, -35, 15, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          scale: { duration: 0.6, delay: 0.5 },
          default: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        className="absolute top-[28%] left-[53%] w-8 h-8 bg-[#5B4DFF] rounded-full hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, -25, 20, 0],
          y: [0, 30, -15, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.7 },
          scale: { duration: 0.6, delay: 0.7 },
          default: {
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        className="absolute bottom-[35%] left-[18%] w-5 h-5 bg-[#5B4DFF] rounded-full hidden lg:block"
      />
    </section>
  );
}
