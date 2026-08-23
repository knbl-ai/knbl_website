'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AiProductionForm from '../components/AiProductionForm';
import { VideoPreview } from '../../components/ui/VideoPreview';
import { X, ArrowRight, ArrowUpRight } from 'lucide-react';

const aiVideos: Video[] = [
    {
        id: 26,
        url: 'https://storage.googleapis.com/knbl_website/videos/ai%20productions/AION%20Redefining%20Electric%20Travel_video.mp4',
        title: 'AION: Redefining Electric Travel',
        category: 'Electric Mobility'
    },
    {
        id: 7,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/electra/1926_ELECTRA_AI_NOFIT_VID_B_ENGLISH_1920x1080_hrnc1a.webm',
        title: 'Electra "BEYOND" Project',
        category: 'Tech Visualization'
    },
    {
        id: 6,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/electra/2749_ELECTRA_Robotic_Parking_VIDEO_1920X1080_02_iakpwj.webm',
        title: 'Electra Robotic Parking',
        category: 'Innovation'
    },
    {
        id: 5,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/electra/electra_Precise_Speed_LOW_bv6bzb.webm',
        title: 'Electra Shneider',
        category: 'Gen-AI Storytelling'
    },
    {
        id: 1,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ho/3452_HO_Black_Friday_commerical_VIDEO_1920X1080_C_V7_bubsky.webm',
        title: 'H&O Black Friday',
        category: 'Motion Design'
    },
    {
        id: 2,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ho/HO_JEANS_NEW_7-9_VIDEO_1920x1080_25FPS_ihsjsj.webm',
        title: 'H&O Jeans',
        category: 'Product Launch'
    },
    {
        id: 25,
        url: 'https://storage.googleapis.com/knbl_website/videos/ai%20productions/4207_HO_SPRING_26_VIDEO_1920X1080_25-3-26.mp4',
        title: 'H&0 SPRING 2026'
    },
    {
        id: 17,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/takeda/takeda_fin_LOWER_sgeqe4.webm',
        title: 'Takeda',
        category: 'Health-AI',
        startTime: 1
    },
    {
        id: 3,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/xiaomi/Pocco_X7_launch_for_Xiaomi_-_AI_production_uetowy.webm',
        title: 'POCO X7 Series',
        category: 'Creative AI'
    },
    {
        id: 4,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/xiaomi/Pocco_X7_launch_for_Xiaomi_-_AI_production_no2_f9b9c3.webm',
        title: 'POCO X7 Series',
        category: 'Immersive Experience',
        startTime: 1
    },
    {
        id: 9,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ai%20productions/8u2Q50QoEmcqTVa6DJdGe_output_1_mxzzbt.webm',
        title: "AI",
        category: 'Emotional AI'
    },
    {
        id: 21,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ai%20productions/roladin_moon-video-export-2025-12-30T08-37-46.443Z_qk44k2.webm',
        title: 'Roladin Moon',
        category: 'Automotive AI'
    },
    {
        id: 22,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ai%20productions/Woman_talking_in_202601021508_ab1pf_k46tar.webm',
        title: 'AI Virtual Spokesperson',
        category: 'Avatar Realism'
    },
    {
        id: 23,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ai%20productions/WhatsApp_Video_2026-01-08_at_19.41.18__without_end_of_video_czxoce.webm',
        title: 'AI Spec Work',
        category: 'Creative AI'
    },
];

const portraitVideos: Video[] = [
    {
        id: 27,
        url: 'https://storage.googleapis.com/knbl_website/videos/ai%20productions/Rafael%2065th%20Award%20Reveal.mp4',
        title: 'Rafael 65th Award Reveal',
    },
    {
        id: 16,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/xiaomi/WhatsApp_Video_2026-01-22_at_13.59.38_lw2ehh.webm',
        title: 'Xiaomi Redmi Note 15 Series',
    },
    {
        id: 11,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ai%20productions/IMG_1820_nxuyj4.webm',
        title: 'Rafael Developer Day',
    },
    {
        id: 18,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ai%20productions/%D7%99%D7%95%D7%9D_%D7%94%D7%9E%D7%93%D7%A2_%D7%94%D7%91%D7%93%D7%99%D7%95%D7%A0%D7%99_-_%D7%9E%D7%AA%D7%95%D7%A7%D7%9F_ldcugm.webm',
        title: 'Rafael Science Fiction Day',
    },
    {
        id: 12,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ai%20productions/%D7%A1%D7%95%D7%A3_%D7%A9%D7%A0%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA_gvo3xc.webm',
        title: 'Rafael 2026',
        posterUrl: 'https://storage.googleapis.com/knbl_website/optimized/images/rafael/%D7%9B%D7%99%D7%A4%D7%AA_%D7%91%D7%A8%D7%96%D7%9C_1_wlekhg.webp'
    },
    {
        id: 24,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/trans%20israel/3785_HOTZE_ISRAEL_CONNECITING_THE_NORTH_AI_VIDEO_1080x1350.webm',
        title: 'Trans Israel',
        aspectRatio: 'aspect-[4/5]'
    }
];

const productVideos: Video[] = [
    {
        id: 13,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ai%20productions/0112_ylhhh4.webm',
        title: 'Trends Agents',
        headline: 'Trends agents by category',
        description: 'Research and analysis + newsletter automation'
    },
    {
        id: 14,
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ai%20productions/0108_jow8a4.webm',
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
    trimEnd?: number;
    posterUrl?: string;
    aspectRatio?: string;
}

function AIVideoCard({
    video,
    index,
    height = "aspect-video",
    isPlaying = false,
    isPortrait = false,
    objectFit = 'cover' as 'cover' | 'contain',
    onMouseEnter,
    onMouseLeave,
    onScrollEnter,
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
    onScrollEnter?: () => void,
    onPlay?: () => void
}) {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6, margin: "-10% 0% -10% 0%" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onViewportEnter={() => {
                if (typeof window !== 'undefined') onScrollEnter?.();
            }}
            onTap={onPlay}
            role="button"
            tabIndex={0}
            className={`${height} rounded-[12px] overflow-hidden cursor-pointer relative group isolation-auto ${objectFit === 'contain' ? 'bg-white' : 'bg-neutral-900'}`}
            style={{ transform: 'translateZ(0)' }}
            variants={{
                initial: { opacity: 0, y: 20, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
                visible: { opacity: 1, y: 0 },
                animate: { opacity: 1, y: 0 },
                hover: { scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' },
                tap: { scale: 1.1, y: -10 }
            }}
            animate="animate"
            transition={{
                duration: 0.6,
                delay: index * 0.05,
                scale: { type: "spring", stiffness: 300, damping: 20 },
                y: { type: "spring", stiffness: 300, damping: 20 }
            }}
        >
            <motion.div
                className="w-full h-full relative rounded-[12px] overflow-hidden"
                variants={{
                    initial: { scale: 1, y: 0 },
                    visible: { scale: 1, y: 0 },
                    hover: { scale: 1.15, y: -20 }
                }}
                transition={{
                    duration: 0.8,
                    y: { type: "spring", stiffness: 100, damping: 15 }
                }}
            >
                <VideoPreview
                    videoUrl={video.url}
                    posterUrl={video.posterUrl || ""}
                    alt={video.title}
                    maxDuration={video.maxDuration || 20}
                    isPlaying={isPlaying}
                    startTime={video.startTime}
                    trimEnd={video.trimEnd}
                    objectFit={objectFit}
                />

                <motion.div
                    className="absolute inset-0 bg-black/10 transition-colors"
                    variants={{
                        initial: { opacity: 0 },
                        visible: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                />

            </motion.div>

            {/* Purple Bar Overlay - Matches ProjectsGrid style */}
            <motion.div
                variants={{
                    initial: { y: "100%" },
                    hover: { y: 0 },
                    visible: { y: "100%" }
                }}
                transition={{
                    duration: 0.6,
                    y: { type: "spring", stiffness: 120, damping: 14, mass: 1 }
                }}
                className={`absolute bottom-0 left-0 right-0 bg-[#5046E4] px-6 py-4 md:py-6 flex items-center justify-between z-10 rounded-b-[12px] ${isPortrait ? 'md:px-7' : 'md:px-10'}`}
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

                <div className="flex flex-col min-w-0 flex-1 mr-4">
                    <span className={`text-white font-medium tracking-tight leading-tight line-clamp-2 ${isPortrait ? 'text-[16px] md:text-[20px]' : 'text-[16px] md:text-[24px]'}`}>
                        {video.title}
                    </span>
                </div>

                {/* Desktop Expanding Button (Ultra-smooth version from ProjectsGrid) */}
                <motion.div
                    className="hidden md:flex items-center bg-white rounded-full group/btn cursor-pointer overflow-hidden h-10 ml-auto shrink-0"
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
                            >
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    variants={{
                                        initial: { opacity: 1, rotate: 0 },
                                        hover: { opacity: 0, rotate: 45 }
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ArrowRight className="w-5 h-5 text-[#5046E4]" strokeWidth={2} />
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ opacity: 0, rotate: -45 }}
                                    variants={{
                                        initial: { opacity: 0, rotate: -45 },
                                        hover: { opacity: 1, rotate: 0 }
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ArrowUpRight className="w-5 h-5 text-[#5046E4]" strokeWidth={2} />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Mobile Button */}
                <div className="flex md:hidden items-center justify-center bg-white rounded-full w-10 h-10 shrink-0 relative z-20">
                    <ArrowRight className="w-5 h-5 text-[#5046E4]" strokeWidth={2} />
                </div>
            </motion.div>
        </motion.div>
    );
}

function VideoModal({ video, onClose }: { video: Video, onClose: () => void }) {
    const [showControls, setShowControls] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        if (window.innerWidth >= 768) setShowControls(true);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!video) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => {
                if (isMobile) setShowControls(!showControls);
                else onClose();
            }}
        >
            <div
                className={`absolute inset-0 transition-colors duration-500 ${showControls ? 'bg-black/90' : 'bg-black/95'} backdrop-blur-xl`}
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative flex items-center justify-center z-50 group/modal"
                onClick={(e) => {
                    if (isMobile) {
                        e.stopPropagation();
                        setShowControls(!showControls);
                    }
                }}
            >
                <div className="relative w-full h-full bg-neutral-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <div className="bg-black">
                        <video
                            src={video.url}
                            className="max-w-[95vw] max-h-[85vh] block mx-auto"
                            autoPlay
                            controls={showControls}
                            playsInline
                        />
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        style={isMobile ? { display: showControls ? 'flex' : 'none' } : {}}
                        className={`absolute top-4 right-4 p-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full z-[70] border border-white/20 shadow-2xl items-center justify-center ${isMobile ? '' : 'hidden md:flex'
                            }`}
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function AiProductionsPageClient() {
    const [playingId, setPlayingId] = useState<number | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
        <main id="main-content" data-logo-theme="white" className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 md:pt-48 pb-0 px-6 md:px-[120px] md:pb-0">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="max-w-4xl mx-auto"
                    >
                        {isMobile ? (
                            <h1 className="text-4xl font-medium text-black leading-[1.1] tracking-[-0.04em] mb-4 text-center w-full">
                                AI <br className="md:hidden" /> <span className="text-primary-600">Productions.</span>
                            </h1>
                        ) : (
                            <h1 className="text-[56px] font-medium text-black leading-[0.95] tracking-[-0.03em] mb-8">
                                AI <span className="text-primary-600">Productions.</span>
                            </h1>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Content Section - Divergent Layouts */}
            {isMobile ? (
                /* Mobile Layout: Combined Continuous Grid */
                <section className="pt-12 pb-10 px-6">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                        {aiVideos.map((video, index) => (
                            <div key={video.id} className="col-span-2">
                                <AIVideoCard
                                    video={video}
                                    index={index}
                                    isPlaying={playingId === video.id}
                                    onMouseEnter={() => setPlayingId(video.id)}
                                    onMouseLeave={() => setPlayingId(null)}
                                    onScrollEnter={() => setPlayingId(video.id)}
                                    onPlay={() => {
                                        setSelectedVideo(video);
                                        setPlayingId(null);
                                    }}
                                />
                            </div>
                        ))}
                        {portraitVideos.map((video, index) => (
                            <div key={video.id} className="col-span-1">
                                <AIVideoCard
                                    video={video}
                                    index={aiVideos.length + index}
                                    height={video.aspectRatio || "aspect-[3/4]"}
                                    isPlaying={playingId === video.id}
                                    onMouseEnter={() => setPlayingId(video.id)}
                                    onMouseLeave={() => setPlayingId(null)}
                                    onScrollEnter={() => setPlayingId(video.id)}
                                    onPlay={() => {
                                        setSelectedVideo(video);
                                        setPlayingId(null);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            ) : (
                /* Desktop Layout: 3 Columns Landscape, 4 Columns Portrait */
                <section className="pt-0 pb-32 px-[120px]">
                    <div className="max-w-7xl mx-auto">
                        {/* Main Landscape Grid - 3 Columns */}
                        <div className="grid grid-cols-3 gap-6 mb-6">
                            {aiVideos.map((video, index) => (
                                <AIVideoCard
                                    key={video.id}
                                    video={video}
                                    index={index}
                                    isPlaying={playingId === video.id}
                                    onMouseEnter={() => setPlayingId(video.id)}
                                    onMouseLeave={() => setPlayingId(null)}
                                    onScrollEnter={() => setPlayingId(video.id)}
                                    onPlay={() => {
                                        setSelectedVideo(video);
                                        setPlayingId(null);
                                    }}
                                />
                            ))}
                        </div>

                        {/* Portrait Videos - 4 Columns */}
                        <div className="grid grid-cols-4 gap-6">
                            {portraitVideos.map((video, index) => (
                                <AIVideoCard
                                    key={video.id}
                                    video={video}
                                    index={index + aiVideos.length}
                                    height={video.aspectRatio || "aspect-[3/4.2]"}
                                    isPortrait={true}
                                    isPlaying={playingId === video.id}
                                    onMouseEnter={() => setPlayingId(video.id)}
                                    onMouseLeave={() => setPlayingId(null)}
                                    onScrollEnter={() => setPlayingId(video.id)}
                                    onPlay={() => {
                                        setSelectedVideo(video);
                                        setPlayingId(null);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Additional Videos Section (White Stripe) */}
            <section className="bg-white pt-0 pb-16 px-10 md:px-[120px] md:pt-8 md:pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-[56px] font-medium text-black leading-[1.1] tracking-[-0.04em]"
                        >
                            AI agents & <br />
                            <span className="text-primary-600">Product development.</span>
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 -ml-4 -mr-5 md:ml-0 md:mr-0">
                        {productVideos.map((video, index) => (
                            <div key={video.id} className="flex flex-col gap-8">
                                <div className="space-y-0 ml-0 md:ml-0">
                                    <motion.h3
                                        initial={{ color: "#B3B3B3" }}
                                        whileInView={{ color: "#000000" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                        className="text-2xl md:text-[32px] font-medium tracking-tight"
                                    >
                                        {video.headline}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ color: "#B3B3B3" }}
                                        whileInView={{ color: "#000000" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                                        className="text-lg font-normal"
                                    >
                                        {video.description}
                                    </motion.p>
                                </div>
                                <AIVideoCard
                                    video={video}
                                    index={index}
                                    height="aspect-[4/3]"
                                    objectFit="contain"
                                    isPlaying={playingId === video.id}
                                    onMouseEnter={() => setPlayingId(video.id)}
                                    onMouseLeave={() => setPlayingId(null)}
                                    onScrollEnter={() => setPlayingId(video.id)}
                                    onPlay={() => {
                                        setSelectedVideo(video);
                                        setPlayingId(null);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AiProductionForm />
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
