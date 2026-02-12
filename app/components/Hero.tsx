'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { TextReveal } from '@/components/ui/text-reveal';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

interface FloatingCircleProps {
    id: string;
    src: string;
    className: string;
    size: string;
    mobileSize: string;
    duration: number;
    animateX: number[];
    animateY: number[];
    hoveredId: string | null;
    setHoveredId: (id: string | null) => void;
    z: number;
}

const FloatingCircle = ({ id, src, className, size, mobileSize, duration, animateX, animateY, hoveredId, setHoveredId, z }: FloatingCircleProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth magnetic pull
    const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Max 12px magnetic pull
        const dx = (e.clientX - centerX) * 0.15;
        const dy = (e.clientY - centerY) * 0.15;

        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxRadius = 12;

        if (dist > maxRadius) {
            const ratio = maxRadius / dist;
            mouseX.set(dx * ratio);
            mouseY.set(dy * ratio);
        } else {
            mouseX.set(dx);
            mouseY.set(dy);
        }
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: animateX, y: animateY }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={className}
            onMouseEnter={() => setHoveredId(id)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ zIndex: z + (hoveredId === id ? 50 : 0) }}
        >
            <motion.div
                animate={{
                    scale: hoveredId === id ? 1.1 : (hoveredId ? 0.95 : 1),
                    z: hoveredId === id ? 50 : 0,
                }}
                style={{
                    x: springX,
                    y: springY,
                    isolation: 'isolate'
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`relative ${mobileSize} ${size} opacity-100`}
            >
                <Image
                    src={src}
                    alt=""
                    fill
                    className="rounded-full object-cover shadow-sm transition-shadow duration-500 hover:shadow-2xl opacity-100"
                    style={{ transform: 'translateZ(0)', opacity: 1, mixBlendMode: 'normal' }}
                />
            </motion.div>
        </motion.div>
    );
};

export default function Hero() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="keep-background relative min-h-[600px] h-screen md:h-[1025px] flex flex-col items-center justify-center bg-white pt-20 overflow-hidden">
            {/* Background Gradient Layer for Mobile */}
            <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-indigo-50/50 to-transparent md:hidden" />

            {/* Bottom Purple Glow matching reference - Grounded even more */}
            <div
                className="absolute inset-x-0 -bottom-px h-[50%] bg-gradient-to-t from-[#4F39F6]/40 via-[#4F39F6]/10 to-transparent z-0 pointer-events-none"
                style={{ transform: 'translateZ(0)', willChange: 'transform' }}
            />

            {/* Dotted Halftone Pattern Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.35]"
                style={{
                    backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '12px 12px',
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 60%)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 60%)',
                    transform: 'translateZ(0)',
                    willChange: 'mask-image, -webkit-mask-image'
                }}
            />

            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden z-0">
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
                    className="absolute top-[70%] md:top-[30%] right-[-15%] w-[350px] h-[350px] md:w-[1100px] md:h-[1100px] opacity-15 md:opacity-40"
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
                    className="absolute top-[75%] md:top-[40%] left-[-15%] w-[400px] h-[400px] md:w-[1200px] md:h-[1200px] opacity-15 md:opacity-40"
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
                    className="absolute top-[65%] md:top-[25%] left-1/2 -translate-x-1/2 w-[450px] h-[450px] md:w-[1400px] md:h-[1400px] opacity-15 md:opacity-40"
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
                <div className="absolute inset-0 mix-blend-soft-light opacity-[0.05] md:opacity-20">
                    <Image
                        src="/images/hero/vector-bg.svg"
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.h1
                        initial={{ color: "#B3B3B3" }}
                        whileInView={{ color: "#000000" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="text-[40px] leading-[40px] md:text-[72px] md:leading-[72px] font-medium tracking-[-0.04em] font-sans"
                    >
                        <span className="block">Cut the noise.</span>
                        <span className="block">
                            <span className="text-[#4F39F6]">Be impossible</span> <br className="md:hidden" /> to ignore
                        </span>
                    </motion.h1>
                    <TextReveal
                        startEarly
                        className="mt-6 md:mt-8 text-[18px] md:text-[26px] leading-[1.4] md:leading-[1.5] font-medium tracking-tight font-sans max-w-[200px] md:max-w-none mx-auto justify-center text-center py-0"
                    >
                        Creative marketing for ambitious brands
                    </TextReveal>
                </motion.div>

                {/* Scroll Indicator - Positioned Lower per Reference */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 md:mt-32"
                >
                    <ScrollIndicator onClick={() => {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }} />
                </motion.div>
            </div>

            {/* Floating Elements - Magnetic & Smooth */}
            <FloatingCircle
                id="w1-l"
                src="https://storage.googleapis.com/knbl_website/images/rafael/%D7%9B%D7%99%D7%A4%D7%AA_%D7%91%D7%A8%D7%96%D7%9C_1_wlekhg.jpg"
                className="absolute top-[28%] -left-[5%] lg:left-[5%]"
                size="md:w-[180px] md:h-[180px]"
                mobileSize="w-[90px] h-[90px]"
                duration={14}
                animateX={[0, 50, 25, -40, 0]}
                animateY={[0, -45, 20, -30, 0]}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                z={20}
            />

            <FloatingCircle
                id="w1-r"
                src="https://storage.googleapis.com/knbl_website/images/roladin/KARELA_-00628_fr67ju.jpg"
                className="absolute top-[20%] -right-[5%] lg:right-[5%]"
                size="md:w-[140px] md:h-[140px]"
                mobileSize="w-[85px] h-[85px]"
                duration={16}
                animateX={[0, -45, -25, 55, 0]}
                animateY={[0, 50, -15, 40, 0]}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                z={20}
            />

            <FloatingCircle
                id="w2-l"
                src="https://storage.googleapis.com/knbl_website/images/carters/%D7%A2%D7%95%D7%AA%D7%A7OK_FAL25_BBG_01_162_E_psmtg5.jpg"
                className="absolute bottom-[25%] -left-[8%] lg:left-[8%]"
                size="md:w-[150px] md:h-[150px]"
                mobileSize="w-[110px] h-[110px]"
                duration={15}
                animateX={[0, -55, -30, 45, 0]}
                animateY={[0, 40, -50, 25, 0]}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                z={20}
            />

            <FloatingCircle
                id="w2-r"
                src="https://storage.googleapis.com/knbl_website/images/trans%20israel/2%D7%94%D7%93%D7%9E%D7%99%D7%94-_%D7%92%D7%A9%D7%A8_6400_dpdo57.jpg"
                className="absolute top-[45%] -right-[8%] lg:right-[8%]"
                size="md:w-[160px] md:h-[160px]"
                mobileSize="w-[100px] h-[100px]"
                duration={17}
                animateX={[0, 45, 20, -50, 0]}
                animateY={[0, -40, 55, -25, 0]}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                z={20}
            />



            {/* Background Decorative Dots */}
            <motion.div
                animate={{
                    x: [0, 12, -8, 0],
                    y: [0, -15, 10, 0]
                }}
                transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] left-[10%] w-3 h-3 md:w-6 md:h-6 bg-[#4F39F6] rounded-full z-10 opacity-100"
            />

            <motion.div
                animate={{
                    x: [0, -10, 12, 0],
                    y: [0, 12, -12, 0]
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[40%] right-[15%] w-4 h-4 md:w-5 md:h-5 bg-[#4F39F6] rounded-full z-10 opacity-100"
            />

            <motion.div
                animate={{
                    x: [0, 10, -7, 0],
                    y: [0, -12, 15, 0]
                }}
                transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[35%] left-[8%] w-2 h-2 md:w-4 md:h-4 bg-[#4F39F6] rounded-full z-10 opacity-100"
            />

            <motion.div
                animate={{
                    x: [0, -12, 8, 0],
                    y: [0, 15, -10, 0]
                }}
                transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[20%] right-[10%] w-3 h-3 md:w-4 md:h-4 bg-[#4F39F6] rounded-full z-10 opacity-100"
            />
        </section >
    );
}
