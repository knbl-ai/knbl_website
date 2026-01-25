'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { VideoPreview } from '@/components/ui/VideoPreview';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

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
        maxDuration: 20
    },
    {
        id: 2,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768731363/photo_to_video_ai_nktppl.mp4',
        name: 'Rafael',
        slug: 'rafael',
        alt: 'Rafael',
        delay: 0.1,
        maxDuration: 20
    },
    {
        id: 3,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768738072/10S__RN15_High_Battery__Horizontal__Clean_low_rpdqrs.mp4',
        name: 'Xiaomi',
        slug: 'xiaomi',
        alt: 'Xiaomi',
        delay: 0.2,
        maxDuration: 20
    },
    {
        id: 4,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/roladin%20-%20movie%202.mp4',
        name: 'Roladin',
        slug: 'roladin',
        alt: 'Roladin',
        delay: 0.3,
        maxDuration: 20
    },
    {
        id: 5,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768732094/3105_CARTERS_TADMIT_VIDEO_960X520_1_meeqfj.mp4',
        name: "Carter's",
        slug: 'carters',
        alt: "Carter's",
        delay: 0.4,
        maxDuration: 20
    },
    {
        id: 6,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767619624/3791_ELECTRA_AI_SARONA_VID_ENGLISH_1920x1080_tz9isv.mp4',
        name: 'Electra',
        slug: 'electra',
        alt: 'Electra',
        delay: 0.5,
        maxDuration: 20
    },
    {
        id: 7,
        image: '',
        videoUrl: 'https://storage.googleapis.com/knbl_website/2015_TAKEDA_GAUCHER_VID_FIX_1.mp4',
        name: 'Takeda',
        slug: 'takeda',
        alt: 'Takeda',
        delay: 0.6,
        maxDuration: 20
    },
    {
        id: 8,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176915/AION_-_16X9_%D7%9E%D7%A9%D7%95%D7%9C%D7%91_ngegbm.mp4',
        name: 'Aion',
        slug: 'aion',
        alt: 'Aion',
        delay: 0.7,
        maxDuration: 20
    },
    {
        id: 9,
        image: '',
        videoUrl: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176443/%D7%9C%D7%90%D7%AA%D7%92%D7%A8_%D7%90%D7%AA_%D7%94%D7%91%D7%9C%D7%AA%D7%99_%D7%90%D7%A4%D7%A9%D7%A8%D7%99-%D7%91%D7%99%D7%AA_%D7%97%D7%95%D7%9C%D7%99%D7%9D_%D7%A8%D7%A2%D7%95%D7%AA_cvxk0v.mp4',
        name: 'Reuth Hospital',
        slug: 'reuth-hospital',
        alt: 'Reuth Hospital',
        delay: 0.8,
        maxDuration: 10,
        startTime: 30
    },
];

function ProjectCard({ project, height = 'h-[250px]' }: { project: Project; height?: string }) {
    return (
        <Link href={`/work/${project.slug}`}>
            <motion.div
                initial="initial"
                whileHover="hover"
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
                        hover: { scale: 1.05, y: -20 }
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

                {/* Purple Bar Overlay */}
                <motion.div
                    variants={{
                        initial: { y: "100%" },
                        hover: { y: 0 }
                    }}
                    transition={{
                        duration: 0.6,
                        y: { type: "spring", stiffness: 120, damping: 14, mass: 1 }
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-[#5046E4] px-10 py-6 flex items-center justify-between z-10 rounded-b-[40px]"
                >
                    {/* Concave Shims - Smooth small liquid joints */}
                    <div className="absolute -top-[15.9px] left-0 w-[16px] h-[16px] pointer-events-none">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" shapeRendering="geometricPrecision">
                            <path d="M 0 0 A 16 16 0 0 0 16 16 L 0 16 Z" fill="#5046E4" />
                        </svg>
                    </div>
                    <div className="absolute -top-[15.9px] right-0 w-[16px] h-[16px] pointer-events-none">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" shapeRendering="geometricPrecision">
                            <path d="M 16 0 A 16 16 0 0 1 0 16 L 16 16 Z" fill="#5046E4" />
                        </svg>
                    </div>

                    <span className="text-white font-medium text-[20px] md:text-[28px] tracking-tight">{project.name}</span>
                    <motion.div
                        className="flex items-center bg-white rounded-full group/btn cursor-pointer overflow-hidden h-12"
                        initial="initial"
                        whileHover="hover"
                        variants={{
                            initial: { width: "48px" },
                            hover: { width: "160px" }
                        }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <div className="flex items-center justify-center w-full px-4 relative">
                            <motion.span
                                className="text-[#5046E4] font-bold text-sm whitespace-nowrap absolute left-5"
                                variants={{
                                    initial: { opacity: 0, x: 10 },
                                    hover: { opacity: 1, x: 0 }
                                }}
                            >
                                View Case
                            </motion.span>
                            <motion.div
                                className="ml-auto relative w-5 h-5"
                            >
                                <motion.div
                                    className="absolute inset-0"
                                    variants={{
                                        initial: { opacity: 1, rotate: 0 },
                                        hover: { opacity: 0, rotate: 45 }
                                    }}
                                >
                                    <ArrowRight className="w-5 h-5 text-[#5046E4]" />
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, rotate: -45 }}
                                    variants={{
                                        initial: { opacity: 0, rotate: -45 },
                                        hover: { opacity: 1, rotate: 0 }
                                    }}
                                >
                                    <ArrowUpRight className="w-5 h-5 text-[#5046E4]" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </Link>
    );
}

export default function ProjectsGrid() {
    return (
        <section id="work" className="py-24 md:py-44 px-6 md:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <motion.h2
                        className="text-4xl md:text-[56px] font-medium max-w-4xl leading-[1.1] text-black"
                    >
                        The Brands <br />
                        We&apos;ve <span className="text-primary-600">Grown.</span>
                    </motion.h2>

                    <Link href="/projects" className="hidden md:block">
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

                    {/* Third Row Block (2 cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ProjectCard project={projects[4]} height="h-[300px]" />
                        <ProjectCard project={projects[8]} height="h-[300px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
