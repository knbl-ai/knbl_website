'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function Hero() {
    return (
        <section className="relative min-h-[600px] h-screen md:h-[1025px] flex flex-col items-center justify-center bg-gradient-to-b from-white via-indigo-50/30 to-white pt-20">
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
                    className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] md:w-[1100px] md:h-[1100px] opacity-60"
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
                    className="absolute top-[40%] left-[-15%] w-[700px] h-[700px] md:w-[1200px] md:h-[1200px] opacity-60"
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
                    className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-[1400px] md:h-[1400px] opacity-60"
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
                            <span className="text-[#4F39F6]">Be impossible</span> to ignore
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ color: "#B3B3B3" }}
                        whileInView={{ color: "#000000" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        className="mt-6 md:mt-8 text-[18px] md:text-[24px] font-normal leading-none tracking-[-0.02em] font-sans"
                    >
                        Creative marketing for ambitious brands
                    </motion.p>
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

            {/* Floating Elements - Precision Replaced per Reference Image */}

            {/* Wave 1: Far Left & Far Right */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -800 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.95, 0.8],
                    x: [-800, -150, 0, 10, -180, -800],
                    y: [0, -60, 0, -20, 50, 0]
                }}
                transition={{
                    duration: 50,
                    times: [0, 0.25, 0.45, 0.65, 0.85, 1],
                    delay: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 15
                }}
                className="absolute top-[32%] left-[5%] hidden lg:block z-20"
            >
                <motion.div
                    animate={{ x: [0, 20, -15, 0], y: [0, -30, 20, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[180px] h-[180px]"
                >
                    <Image
                        src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768751289/%D7%9B%D7%99%D7%A4%D7%AA_%D7%91%D7%A8%D7%96%D7%9C_1_wlekhg.jpg"
                        alt=""
                        fill
                        className="rounded-full object-cover shadow-sm"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 800 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.95, 0.8],
                    x: [800, 150, 0, -10, 180, 800],
                    y: [0, 60, 0, 20, -50, 0]
                }}
                transition={{
                    duration: 50,
                    times: [0, 0.25, 0.45, 0.65, 0.85, 1],
                    delay: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 15
                }}
                className="absolute top-[24%] right-[5%] hidden lg:block z-20"
            >
                <motion.div
                    animate={{ x: [0, -25, 20, 0], y: [0, 30, -20, 0] }}
                    transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[140px] h-[140px]"
                >
                    <Image
                        src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768752115/KARELA_-00628_fr67ju.jpg"
                        alt=""
                        fill
                        className="rounded-full object-cover shadow-sm"
                    />
                </motion.div>
            </motion.div>

            {/* Wave 2: Mid-Height Left & Right */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -800 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.95, 0.8],
                    x: [-800, -120, 0, -15, -200, -800],
                    y: [0, 70, 0, 30, -40, 0]
                }}
                transition={{
                    duration: 55,
                    times: [0, 0.25, 0.45, 0.65, 0.85, 1],
                    delay: 15,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 10
                }}
                className="absolute bottom-[28%] left-[8%] hidden lg:block z-20"
            >
                <motion.div
                    animate={{ x: [0, -20, 30, 0], y: [0, 25, -35, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[150px] h-[150px]"
                >
                    <Image
                        src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768753146/SKIP_HOP_images_1920x1080_8_aksib1.jpg"
                        alt=""
                        fill
                        className="rounded-full object-cover shadow-sm"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 800 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.95, 0.8],
                    x: [800, 120, 0, 15, 200, 800],
                    y: [0, -70, 0, -30, 40, 0]
                }}
                transition={{
                    duration: 55,
                    times: [0, 0.25, 0.45, 0.65, 0.85, 1],
                    delay: 18,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 10
                }}
                className="absolute top-[48%] right-[8%] hidden lg:block z-20"
            >
                <motion.div
                    animate={{ x: [0, -18, 22, 0], y: [0, 20, -25, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[160px] h-[160px]"
                >
                    <Image
                        src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768897140/2%D7%94%D7%93%D7%9E%D7%99%D7%94-_%D7%92%D7%A9%D7%A8_6400_dpdo57.jpg"
                        alt=""
                        fill
                        className="rounded-full object-cover shadow-sm"
                    />
                </motion.div>
            </motion.div>

            {/* Wave 3: Bottom Left & Right */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -800 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.95, 0.8],
                    x: [-800, -100, 0, 15, -150, -800],
                    y: [0, -50, 0, -25, 40, 0]
                }}
                transition={{
                    duration: 52,
                    times: [0, 0.25, 0.45, 0.65, 0.85, 1],
                    delay: 30,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 12
                }}
                className="absolute bottom-[20%] left-[3%] hidden lg:block z-20"
            >
                <motion.div
                    animate={{ x: [0, 25, -15, 0], y: [0, -20, 25, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[140px] h-[140px]"
                >
                    <Image
                        src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768896799/LOOKBOOK_RESERVED_25AW13540_pja1ad.jpg"
                        alt=""
                        fill
                        className="rounded-full object-cover shadow-sm"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 800 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.95, 0.8],
                    x: [800, 100, 0, -15, 150, 800],
                    y: [0, 50, 0, 25, -40, 0]
                }}
                transition={{
                    duration: 52,
                    times: [0, 0.25, 0.45, 0.65, 0.85, 1],
                    delay: 33,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 12
                }}
                className="absolute bottom-[35%] right-[5%] hidden lg:block z-20"
            >
                <motion.div
                    animate={{ x: [0, 20, -25, 0], y: [0, -18, 15, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[130px] h-[130px]"
                >
                    <Image
                        src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768896722/DSC06761_q2igcl.jpg"
                        alt=""
                        fill
                        className="rounded-full object-cover shadow-sm"
                    />
                </motion.div>
            </motion.div>

            {/* Wave 4: Top Edge Left & Right */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -800 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.95, 0.8],
                    x: [-800, -100, 0, -15, -120, -800],
                    y: [0, 40, 0, 20, -50, 0]
                }}
                transition={{
                    duration: 58,
                    times: [0, 0.25, 0.45, 0.65, 0.85, 1],
                    delay: 45,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 8
                }}
                className="absolute top-[18%] left-[10%] hidden lg:block z-20"
            >
                <motion.div
                    animate={{ x: [0, -20, 25, 0], y: [0, 25, -20, 0] }}
                    transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[120px] h-[120px]"
                >
                    <Image
                        src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768895211/AION-V-KV_2__EDIT_BG_lihyav.jpg"
                        alt=""
                        fill
                        className="rounded-full object-cover shadow-sm"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 800 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.95, 0.8],
                    x: [800, 100, 0, 15, 120, 800],
                    y: [0, -40, 0, -20, 50, 0]
                }}
                transition={{
                    duration: 58,
                    times: [0, 0.25, 0.45, 0.65, 0.85, 1],
                    delay: 50,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 8
                }}
                className="absolute top-[22%] right-[10%] hidden lg:block z-20"
            >
                <motion.div
                    animate={{ x: [0, -22, 18, 0], y: [0, 25, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[150px] h-[150px]"
                >
                    <Image
                        src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768753216/%D7%A2%D7%95%D7%AA%D7%A7OK_FAL25_BBG_01_162_E_psmtg5.jpg"
                        alt=""
                        fill
                        className="rounded-full object-cover shadow-sm"
                    />
                </motion.div>
            </motion.div>

            {/* Static Badges (Always Visible Floating) - Lateral Positions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: [0, -12, 8, 0],
                    x: [0, 8, -5, 0]
                }}
                transition={{
                    opacity: { duration: 0.6, delay: 1 },
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-[28%] left-[12%] hidden lg:block z-30"
            >
                <div className="bg-black/[0.05] backdrop-blur-[15px] px-5 py-2 rounded-full">
                    <p className="text-[14px] font-medium text-black whitespace-nowrap tracking-tight">20 years of experience</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: [0, 10, -15, 0],
                    x: [0, -6, 10, 0]
                }}
                transition={{
                    opacity: { duration: 0.6, delay: 1.2 },
                    y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 11, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-[20%] right-[15%] hidden lg:block z-30"
            >
                <div className="bg-black/[0.05] backdrop-blur-[15px] px-5 py-2 rounded-full">
                    <p className="text-[14px] font-medium text-black whitespace-nowrap tracking-tight">50+ campaigns launched</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: [0, -8, 12, 0],
                    x: [0, -10, 5, 0]
                }}
                transition={{
                    opacity: { duration: 0.6, delay: 1.3 },
                    y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-[12%] left-[18%] hidden lg:block z-30"
            >
                <div className="bg-black/[0.05] backdrop-blur-[15px] px-5 py-2 rounded-full">
                    <p className="text-[14px] font-medium text-black whitespace-nowrap tracking-tight">Creative teams in TLV</p>
                </div>
            </motion.div>

            {/* Background Decorative Dots - Lateral Only */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, 20, -15, 0], y: [0, -30, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[35%] left-[4%] w-6 h-6 bg-[#4F39F6] rounded-full hidden lg:block"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, -15, 20, 0], y: [0, 25, -20, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[64%] left-[6%] w-4 h-4 bg-[#4F39F6] rounded-full hidden lg:block"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, 15, -10, 0], y: [0, -20, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[40%] right-[4%] w-5 h-5 bg-[#4F39F6] rounded-full hidden lg:block"
            />
        </section>
    );
}
