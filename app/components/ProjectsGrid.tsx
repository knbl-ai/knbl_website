'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { VideoPreview } from '@/components/ui/VideoPreview';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

import { useState, useEffect } from 'react';

interface Project {
    id: number;
    image: string;
    videoUrl: string;
    name: string;
    slug: string;
    alt: string;
    delay?: number;
    trimEnd?: number;
    maxDuration?: number;
    startTime?: number;
    objectPosition?: string;
    objectFit?: 'cover' | 'contain';
}

const projects: Project[] = [
    {
        id: 1,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176443/H_O_Brand_collection_jt2hv9.mp4',
        name: 'H&O',
        slug: 'ho-brands',
        alt: 'H&O',
        delay: 0,
        maxDuration: 20,
        objectPosition: 'center 20%'
    },
    {
        id: 2,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768731363/photo_to_video_ai_nktppl.mp4',
        name: 'Rafael',
        slug: 'rafael',
        alt: 'Rafael',
        delay: 0.1,
        maxDuration: 20,
        objectPosition: 'center 25%'
    },
    {
        id: 3,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768738072/10S__RN15_High_Battery__Horizontal__Clean_low_rpdqrs.mp4',
        name: 'Xiaomi',
        slug: 'xiaomi',
        alt: 'Xiaomi',
        delay: 0.2,
        maxDuration: 20,
        objectPosition: 'center 30%'
    },
    {
        id: 4,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/roladin%20-%20movie%202.mp4',
        name: 'Roladin',
        slug: 'roladin',
        alt: 'Roladin',
        delay: 0.3,
        maxDuration: 20,
        objectPosition: 'center 20%'
    },
    {
        id: 5,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768732094/3105_CARTERS_TADMIT_VIDEO_960X520_1_meeqfj.mp4',
        name: "Carter's",
        slug: 'carters',
        alt: "Carter's",
        delay: 0.4,
        maxDuration: 20,
        objectPosition: 'center 35%'
    },
    {
        id: 6,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/videos/safari/WhatsApp_Video_2026-01-18_at_12.43.55_rjsdeq.mp4',
        name: 'Safari',
        slug: 'safari',
        alt: 'Safari',
        delay: 0.5,
        maxDuration: 20,
        objectPosition: 'center 20%'
    },
    {
        id: 7,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/videos/anker/2727_ANKER_EUFY_T2352_PRODUCT_VID_970x250_C%203.mp4',
        name: 'Anker',
        slug: 'anker',
        alt: 'Anker',
        delay: 0.6,
        maxDuration: 20
    },
    {
        id: 8,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/videos/lod/lod_16x9_2mbps.mp4',
        name: 'Lod',
        slug: 'lod',
        alt: 'Lod',
        delay: 0.7,
        maxDuration: 20
    },
    {
        id: 9,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/videos/ai%20productions/electra_Precise_Speed_LOW_bv6bzb.mp4',
        name: 'Electra',
        slug: 'electra-precise',
        alt: 'Electra',
        delay: 0.8,
        maxDuration: 20
    },
    {
        id: 10,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/videos/ai%20productions/takeda_fin_LOWER_sgeqe4.mp4',
        name: 'Takeda',
        slug: 'takeda',
        alt: 'Takeda',
        delay: 0.9,
        maxDuration: 20
    },
    {
        id: 11,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/videos/reuth/REUT_4K_VIDEO_CLEAN.mp4',
        name: 'Reuth Hospital',
        slug: 'reuth-hospital',
        alt: 'Reuth Hospital',
        delay: 1.0,
        maxDuration: 20
    },
    {
        id: 12,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/videos/aion/1008_jr9vrx.mp4',
        name: 'Aion',
        slug: 'aion',
        alt: 'Aion',
        delay: 1.1,
        maxDuration: 20
    },
    {
        id: 13,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/videos/trans%20israel/3785_HOTZE_ISRAEL_CONNECITING_THE_NORTH_AI_VIDEO_1080x1350.mp4',
        name: 'Trans Israel',
        slug: 'trans-israel',
        alt: 'Trans Israel',
        delay: 1.2,
        maxDuration: 20,
        objectPosition: 'center 40%'
    },
    {
        id: 15,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/videos/Culture%20Center/3137_TARBUT_OCT_VID_1080X1920_G.mp4',
        name: 'Petach Tikva Center For The Performing Arts',
        slug: 'petach-tikva-center',
        alt: 'Petach Tikva Center For The Performing Arts',
        delay: 1.3,
        maxDuration: 20,
        objectPosition: 'center 20%'
    },
];

function ProjectCard({ project, height = 'h-[250px]' }: { project: Project; height?: string }) {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <Link href={`/work/${project.slug}`}>
            <motion.div
                initial="initial"
                whileHover="hover"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className={`${height} rounded-[40px] overflow-hidden cursor-pointer relative group isolation-auto`}
                style={{ transform: 'translateZ(0)' }}
                variants={{
                    initial: { scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
                    hover: { scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }
                }}
                transition={{
                    duration: 0.6,
                    scale: { type: "spring", stiffness: 300, damping: 20, mass: 1 }
                }}
            >
                <motion.div
                    className="w-full h-full relative rounded-[40px] overflow-hidden"
                    variants={{
                        initial: { scale: 1, y: 0 },
                        hover: { scale: 1.05, y: isMobile ? 0 : -20 }
                    }}
                    transition={{
                        duration: 0.8,
                        y: { type: "spring", stiffness: 100, damping: 15, mass: 1 }
                    }}
                >
                    <VideoPreview
                        videoUrl={project.videoUrl}
                        posterUrl={project.image}
                        alt={project.alt}
                        trimEnd={project.trimEnd}
                        maxDuration={project.maxDuration}
                        startTime={project.startTime}
                        objectPosition={project.objectPosition}
                        objectFit={project.objectFit || 'cover'}
                    />
                    {/* Subtle dark overlay on hover to make text pop */}
                    <motion.div
                        className="absolute inset-0 bg-black/10 transition-colors"
                        variants={{
                            initial: { opacity: 0 },
                            hover: { opacity: 1 }
                        }}
                    />
                </motion.div>

                {/* Overlay Bar */}
                <motion.div
                    variants={{
                        initial: { y: "100%", opacity: 0 },
                        hover: { y: 0, opacity: 1 },
                        visible: {
                            y: 0,
                            opacity: 1
                        }
                    }}
                    transition={{
                        duration: 0.6,
                        y: { type: "spring", stiffness: isMobile ? 200 : 120, damping: isMobile ? 22 : 14, mass: 1 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute bottom-0 left-0 right-0 px-6 md:px-10 py-4 md:py-6 flex items-center justify-between z-10 rounded-b-[40px] bg-primary-600/90 backdrop-blur-md border-t border-white/10"
                >
                    {/* Concave Shims - Smooth small liquid joints */}
                    <div className="absolute -top-[15.9px] left-0 w-[16px] h-[16px] pointer-events-none text-primary-600/90">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" shapeRendering="geometricPrecision">
                            <path d="M 0 0 A 16 16 0 0 0 16 16 L 0 16 Z" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="absolute -top-[15.9px] right-0 w-[16px] h-[16px] pointer-events-none text-primary-600/90">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" shapeRendering="geometricPrecision">
                            <path d="M 16 0 A 16 16 0 0 1 0 16 L 16 16 Z" fill="currentColor" />
                        </svg>
                    </div>

                    <span className="text-white font-medium text-[16px] md:text-[28px] tracking-tight">{project.name}</span>

                    {isMobile ? (
                        /* Mobile Arrow Button */
                        <motion.div
                            className="flex items-center justify-center bg-white rounded-full h-10 w-10 shrink-0 overflow-hidden cursor-pointer shadow-sm ml-auto"
                        >
                            <ArrowRight
                                className="w-5 h-5 text-[#5046E4]"
                                strokeWidth={2}
                            />
                        </motion.div>
                    ) : (
                        /* Desktop Expanding Button (refined for ultra-smooth animation) */
                        <motion.div
                            className="flex items-center rounded-full group/btn cursor-pointer overflow-hidden h-10 bg-white relative z-20 ml-auto"
                            initial="initial"
                            whileHover="hover"
                            variants={{
                                initial: { width: "40px" },
                                hover: { width: "160px" }
                            }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center w-full px-0 h-full relative">
                                <motion.div
                                    className="overflow-hidden flex items-center justify-center h-full"
                                    variants={{
                                        initial: { width: 0, opacity: 0 },
                                        hover: { width: 115, opacity: 1 }
                                    }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <span className="font-bold text-sm text-[#5046E4] whitespace-nowrap pl-5">
                                        View Case
                                    </span>
                                </motion.div>
                                <div className="flex items-center justify-center w-10 h-10 shrink-0">
                                    <motion.div
                                        className="relative w-5 h-5 flex items-center justify-center"
                                        variants={{
                                            initial: { x: 0 },
                                            hover: { x: 0 }
                                        }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            variants={{
                                                initial: { opacity: 1, rotate: 0, color: "#5046E4" },
                                                hover: { opacity: 0, rotate: 45, color: "#5046E4" }
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <ArrowRight className="w-5 h-5" strokeWidth={2} />
                                        </motion.div>
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            initial={{ opacity: 0, rotate: -45 }}
                                            variants={{
                                                initial: { opacity: 0, rotate: -45, color: "#5046E4" },
                                                hover: { opacity: 1, rotate: 0, color: "#5046E4" }
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </Link>
    );
}

export default function ProjectsGrid() {
    return (
        <section id="work" className="pt-10 md:pt-16 pb-24 md:pb-44 px-6 md:px-[120px]">
            <div className="max-w-[1550px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-6">
                    <motion.h2
                        className="text-[40px] md:text-[56px] font-medium max-w-4xl leading-[1.1] text-black tracking-[-0.04em]"
                    >
                        The Brands <br className="md:hidden" />
                        <span className="text-primary-600">We&apos;ve Grown.</span>
                    </motion.h2>

                    <Link href="/work" className="hidden md:block">
                        <InteractiveHoverButton
                            className="bg-[#4F39F6] text-white rounded-full font-medium h-[64px] flex items-center justify-center"
                            variants={{
                                initial: { width: "190px" },
                                hover: { width: "auto" }
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            View All Projects
                        </InteractiveHoverButton>
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="space-y-4">
                    {/* First Row Block (4 cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-4">
                            <ProjectCard project={projects[0]} height="h-[400px] md:h-[516px]" />
                        </div>

                        <div className="md:col-span-8 flex flex-col gap-4">
                            <ProjectCard project={projects[1]} height="h-[300px] md:h-[200px]" />

                            <div className="grid grid-cols-2 gap-4">
                                <ProjectCard project={projects[2]} height="h-[300px]" />
                                <ProjectCard project={projects[3]} height="h-[300px]" />
                            </div>
                        </div>
                    </div>

                    {/* Third Row Block (Showcase new clients) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-8">
                            <ProjectCard project={projects[9]} height="h-[300px]" />
                        </div>
                        <div className="md:col-span-4">
                            <ProjectCard project={projects[10]} height="h-[300px]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ProjectCard project={projects[4]} height="h-[300px]" />
                        <ProjectCard project={projects[8]} height="h-[300px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
