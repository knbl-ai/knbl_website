'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { VideoPreview } from '../../components/ui/VideoPreview';
import { Maximize2, X } from 'lucide-react';

const aiVideos = [
    {
        id: 1,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767175045/3452_HO_Black_Friday_commerical_VIDEO_1920X1080_C_V7_bgm8ew.mp4',
        title: 'H&O Black Friday',
        category: 'Motion Design'
    },
    {
        id: 2,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767175274/HO_JEANS_NEW_7-9_VIDEO_1920x1080_25FPS_tm0bbf.mp4',
        title: 'H&O Jeans',
        category: 'Product Launch'
    },
    {
        id: 3,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767617056/Pocco_X7_launch_for_Xiaomi_-_AI_production_uetowy.mp4',
        title: 'POCO X7 Series',
        category: 'Creative AI'
    },
    {
        id: 4,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767617054/Pocco_X7_launch_for_Xiaomi_-_AI_production_no2_f9b9c3.mp4',
        title: 'POCO X7 Series',
        category: 'Immersive Experience',
        startTime: 1
    },
    {
        id: 5,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769007136/electra_Precise_Speed_LOW_bv6bzb.mp4',
        title: 'Electra Shneider',
        category: 'Gen-AI Storytelling'
    },
    {
        id: 6,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005810/2749_ELECTRA_Robotic_Parking_VIDEO_1920X1080_02_iakpwj.mp4',
        title: 'Electra Robotic Parking',
        category: 'Innovation'
    },
    {
        id: 7,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005785/1926_ELECTRA_AI_NOFIT_VID_B_ENGLISH_1920x1080_hrnc1a.mp4',
        title: 'Electra "BEYOND" project',
        category: 'Tech Visualization'
    },
    {
        id: 8,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005841/roladin_moon-video-export-2025-12-30T08-37-46.443Z_qk44k2.mp4',
        title: 'Roladin AI Moon',
        category: 'Automotive AI'
    },
    {
        id: 9,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005747/8u2Q50QoEmcqTVa6DJdGe_output_1_mxzzbt.mp4',
        title: "AI",
        category: 'Emotional AI'
    },
    {
        id: 15,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005735/Woman_talking_in_202601021508_ab1pf_k46tar.mp4',
        title: 'AI Virtual Spokesperson',
        category: 'Avatar Realism'
    }
];

const portraitVideos = [
    {
        id: 10,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768993607/IMG_1820_nxuyj4.mov',
        title: 'Rafael Developer Day',
    },
    {
        id: 11,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768993590/%D7%99%D7%95%D7%9D_%D7%94%D7%9E%D7%93%D7%A2_%D7%94%D7%91%D7%93%D7%99%D7%95%D7%A0%D7%99_-_%D7%9E%D7%AA%D7%95%D7%A7%D7%9F_ldcugm.mp4',
        title: 'Rafael Science Fiction Day',
    },
    {
        id: 12,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1768993557/%D7%A1%D7%95%D7%A3_%D7%A9%D7%A0%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA_gvo3xc.mp4',
        title: 'Rafael 2026',
    },
    {
        id: 16,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769084546/WhatsApp_Video_2026-01-22_at_13.59.38_lw2ehh.mp4',
        title: 'Rafael Digital Future',
    }
];

const productVideos = [
    {
        id: 13,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005773/0112_ylhhh4.mp4',
        title: 'Trends Agents',
        headline: 'Trends agents by category',
        description: 'Research and analysis + newsletter automation'
    },
    {
        id: 14,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005759/0108_jow8a4.mp4',
        title: 'iGentity',
        headline: 'iGentity',
        description: 'AI powered platform for social media creation and management'
    }
];

interface Video {
    id: number;
    url: string;
    title: string;
    category?: string;
    startTime?: number;
    maxDuration?: number;
    headline?: string;
    description?: string;
}

function AIVideoCard({
    video,
    index,
    height = "aspect-video",
    isPlaying = false,
    objectFit = 'cover' as 'cover' | 'contain',
    onMouseEnter,
    onMouseLeave,
    onPlay
}: {
    video: Video,
    index: number,
    height?: string,
    isPortrait?: boolean,
    isPlaying?: boolean,
    objectFit?: 'cover' | 'contain',
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    onPlay?: () => void
}) {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`${height} rounded-[12px] overflow-hidden cursor-default relative group isolation-auto`}
            style={{ transform: 'translateZ(0)' }}
            variants={{
                initial: { opacity: 0, y: 20, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
                animate: { opacity: 1, y: 0 },
                hover: { scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }
            }}
            animate="animate"
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                scale: { type: "spring", stiffness: 300, damping: 20 }
            }}
        >
            <motion.div
                className="w-full h-full relative rounded-[12px] overflow-hidden"
                variants={{
                    initial: { scale: 1, y: 0 },
                    hover: { scale: 1.05, y: -20 }
                }}
                transition={{
                    duration: 0.8,
                    y: { type: "spring", stiffness: 100, damping: 15 }
                }}
            >
                <VideoPreview
                    videoUrl={video.url}
                    posterUrl=""
                    alt={video.title}
                    maxDuration={video.maxDuration || 20}
                    isPlaying={isPlaying}
                    startTime={video.startTime}
                    objectFit={objectFit}
                />

                <motion.div
                    className="absolute inset-0 bg-black/10 transition-colors"
                    variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                />
            </motion.div>

            {/* Purple Bar Overlay - Only visible on hover */}
            <motion.div
                variants={{
                    initial: { y: "100%", opacity: 1 },
                    hover: { y: 0, opacity: 1 }
                }}
                transition={{
                    duration: 0.6,
                    y: { type: "spring", stiffness: 120, damping: 14 }
                }}
                className="absolute bottom-0 left-0 right-0 bg-[#5046E4] px-6 py-3 flex items-center justify-between z-10 rounded-b-[12px]"
            >
                {/* Concave Shims - Small liquid joints */}
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

                <div className="flex flex-col">
                    <span className="text-white font-normal text-[18px] tracking-tight leading-tight">
                        {video.title}
                    </span>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPlay?.();
                    }}
                    className="flex items-center justify-center bg-white rounded-full h-8 w-8 flex-shrink-0 ml-4 hover:scale-110 transition-transform active:scale-95 z-20"
                >
                    <Maximize2 className="w-3.5 h-3.5 text-[#5046E4]" />
                </button>
            </motion.div>
        </motion.div>
    );
}

function VideoModal({ video, onClose }: { video: Video, onClose: () => void }) {
    if (!video) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative flex items-center justify-center z-50"
            >
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <video
                        src={video.url}
                        className="max-w-[95vw] max-h-[90vh] block"
                        autoPlay
                        controls
                        playsInline
                    />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-xl rounded-full transition-all group z-50 border border-white/20"
                    >
                        <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function AIProductionsPage() {
    const [playingId, setPlayingId] = useState<number | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedVideo]);

    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-44 pb-12 px-6 md:px-[120px]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl md:text-[84px] font-medium text-black leading-[0.95] tracking-[-0.04em] mb-6">
                            AI <span className="text-primary-600">Productions.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Video Grid Section */}
            <section className="pb-32 px-6 md:px-[120px]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiVideos.map((video, index) => (
                            <AIVideoCard
                                key={video.id}
                                video={video}
                                index={index}
                                isPlaying={playingId === video.id}
                                onMouseEnter={() => setPlayingId(video.id)}
                                onMouseLeave={() => setPlayingId(null)}
                                onPlay={() => setSelectedVideo(video)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Portrait Videos Section (Black Stripe) */}
            <section className="bg-black py-24 px-6 md:px-[120px]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1fr] gap-8 items-center">
                        {portraitVideos.map((video, index) => (
                            <AIVideoCard
                                key={video.id}
                                video={video}
                                index={index}
                                height={index === 1 ? "aspect-[4/5]" : "aspect-[9/16]"}
                                isPortrait={true}
                                isPlaying={playingId === video.id}
                                onMouseEnter={() => setPlayingId(video.id)}
                                onMouseLeave={() => setPlayingId(null)}
                                onPlay={() => setSelectedVideo(video)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Videos Section (White Stripe) */}
            <section className="bg-white py-32 px-6 md:px-[120px]">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-[56px] font-medium text-black leading-[1.1] tracking-[-0.02em] mb-16"
                    >
                        AI agents & <br />
                        <span className="text-primary-600">Product development.</span>
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {productVideos.map((video, index) => (
                            <div key={video.id} className="flex flex-col gap-2">
                                <div className="space-y-1">
                                    <h3 className="text-2xl md:text-[32px] font-medium text-black tracking-tight">{video.headline}</h3>
                                    <p className="text-lg text-neutral-500 font-normal">{video.description}</p>
                                </div>
                                <AIVideoCard
                                    video={video}
                                    index={index}
                                    height="aspect-[4/3]"
                                    objectFit="contain"
                                    isPlaying={playingId === video.id}
                                    onMouseEnter={() => setPlayingId(video.id)}
                                    onMouseLeave={() => setPlayingId(null)}
                                    onPlay={() => setSelectedVideo(video)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <AnimatePresence>
                {selectedVideo && (
                    <VideoModal
                        video={selectedVideo}
                        onClose={() => setSelectedVideo(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}
