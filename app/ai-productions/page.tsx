'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AiProductionForm from '../components/AiProductionForm';
import { VideoPreview } from '../../components/ui/VideoPreview';
import { Maximize2, X, Play, ArrowRight } from 'lucide-react';

const aiVideos = [
    {
        id: 7,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005785/1926_ELECTRA_AI_NOFIT_VID_B_ENGLISH_1920x1080_hrnc1a.mp4',
        title: 'Electra "BEYOND" Project',
        category: 'Tech Visualization'
    },
    {
        id: 6,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005810/2749_ELECTRA_Robotic_Parking_VIDEO_1920X1080_02_iakpwj.mp4',
        title: 'Electra Robotic Parking',
        category: 'Innovation'
    },
    {
        id: 5,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769007136/electra_Precise_Speed_LOW_bv6bzb.mp4',
        title: 'Electra Shneider',
        category: 'Gen-AI Storytelling'
    },
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
        id: 17,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769335973/takeda_fin_LOWER_sgeqe4.mp4',
        title: 'Takeda',
        category: 'Health-AI',
        startTime: 1
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
        id: 9,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769005747/8u2Q50QoEmcqTVa6DJdGe_output_1_mxzzbt.mp4',
        title: "AI",
        category: 'Emotional AI'
    },
    {
        id: 20,
        url: 'https://storage.googleapis.com/knbl_website/videos/ai%20productions/electra_Precise_Speed_LOW_bv6bzb.mp4',
        title: 'Electra',
        category: 'AI Production'
    },
];

const portraitVideos = [
    {
        id: 16,
        url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769084546/WhatsApp_Video_2026-01-22_at_13.59.38_lw2ehh.mp4',
        title: 'Xiaomi Redmi Note 15 Series',
    },
    {
        id: 10,
        url: 'https://storage.googleapis.com/knbl_website/videos/trans%20israel/3785_HOTZE_ISRAEL_CONNECITING_THE_NORTH_AI_VIDEO_1080x1350.mp4',
        title: 'Trans Israel',
    },
    {
        id: 11,
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
    trimEnd?: number;
}

function AIVideoCard({
    video,
    index,
    height = "aspect-video",
    isPlaying = false,
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
                    posterUrl=""
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

            {/* Purple Bar Overlay - Shows on hover for desktop (with slide), and when playing/active on mobile */}
            <motion.div
                variants={{
                    initial: {
                        y: "100%",
                        opacity: 0
                    },
                    hover: {
                        y: 0,
                        opacity: 1
                    },
                    visible: {
                        y: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : "100%",
                        opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0
                    }
                }}
                transition={{
                    duration: 0.5,
                    y: { type: "spring", stiffness: 200, damping: 22, mass: 1 },
                    opacity: { duration: 0.2 }
                }}
                className="absolute bottom-0 left-0 right-0 bg-[#5046E4] px-6 py-2.5 flex items-center justify-between z-10 rounded-b-[12px]"
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
                    <span className="text-white font-medium text-[15px] md:text-[17px] tracking-tight leading-tight">
                        {video.title}
                    </span>
                </div>
                <motion.div
                    className="flex items-center justify-center bg-black/20 hover:bg-black/30 rounded-full w-8 h-8 transition-colors duration-300 relative z-20"
                    whileHover="hoverIcon"
                    whileTap="tapIcon"
                >
                    <motion.div
                        variants={{
                            initial: { rotate: 0, scale: 1 },
                            hoverIcon: { rotate: -45, scale: 1.1 },
                            tapIcon: { rotate: -45, scale: 1.1 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        <ArrowRight className="w-4 h-4 text-white" />
                    </motion.div>
                </motion.div>
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
            <section className="pt-32 md:pt-48 pb-0 px-6 md:px-[120px] md:pb-2">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-[56px] font-medium text-black leading-[1.1] tracking-[-0.04em] mb-4">
                            AI <br className="md:hidden" /> <span className="text-primary-600">Productions.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Video Grid Section */}
            <section className="pt-12 md:pt-16 pb-10 px-6 md:px-[120px] md:pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-6 md:gap-6">
                        {/* All Landscape Videos (4 rows of 3) */}
                        {aiVideos.map((video, index) => (
                            <div key={video.id} className="col-span-2 md:col-span-6 lg:col-span-4">
                                <AIVideoCard
                                    video={video}
                                    index={index}
                                    isPlaying={playingId === video.id}
                                    onMouseEnter={() => setPlayingId(video.id)}
                                    onMouseLeave={() => setPlayingId(null)}
                                    onScrollEnter={() => {
                                        setPlayingId(video.id);
                                    }}
                                    onPlay={() => {
                                        setSelectedVideo(video);
                                        setPlayingId(null);
                                    }}
                                />
                            </div>
                        ))}

                        {/* Portrait Videos at the End (1 row of 4) */}
                        {portraitVideos.map((video, index) => (
                            <div key={video.id} className="col-span-1 md:col-span-6 lg:col-span-3">
                                <AIVideoCard
                                    video={video}
                                    index={aiVideos.length + index}
                                    height="aspect-[3/4]"
                                    isPortrait={true}
                                    isPlaying={playingId === video.id}
                                    onMouseEnter={() => setPlayingId(video.id)}
                                    onMouseLeave={() => setPlayingId(null)}
                                    onScrollEnter={() => {
                                        setPlayingId(video.id);
                                    }}
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
