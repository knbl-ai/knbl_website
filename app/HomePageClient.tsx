'use client';

import { useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServicesGrid from './components/ServicesGrid';
import HowWeDoIt from './components/HowWeDoIt';
import ProjectsGrid from './components/ProjectsGrid';
import BrandsSection from './components/BrandsSection';
import BlogSection from './components/BlogSection';
import CommunitySection from './components/CommunitySection';
import FAQSection from './components/FAQSection';
import { TextReveal } from '@/components/ui/text-reveal';
import ThemeController from './components/ThemeController';

export default function HomePageClient() {
    const secondAboutRef = useRef<HTMLDivElement>(null);

    return (
        <main className="min-h-screen">
            <ThemeController />
            <Navigation />
            <div data-theme-section="white">
                <Hero />
            </div>

            <div data-theme-section="white">
                <section id="about" className="flex flex-col items-center justify-center py-24 md:py-44 px-6 min-h-screen md:min-h-0">
                    <div className="max-w-[1200px] mx-auto text-center">
                        <TextReveal startEarly className="justify-center text-center text-[21px] md:text-[26px] leading-[1.4] md:leading-[1.5] font-medium tracking-tight max-w-[400px] md:max-w-3xl mx-auto">
                            {`We're KNBL a strategy-driven collective built for what's next.\nWe started in storytelling, where every brand moment had a voice and a purpose. Today, that voice meets technology, partnered by AI, guided by insight, and scaled with precision.\nOur model connects every step.`}
                        </TextReveal>
                    </div>
                </section>
            </div>

            <div data-theme-section="black" className="my-[200px]">
                <ServicesGrid />
            </div>

            {/* Second About Section */}
            <div data-theme-section="white">
                <div className="py-24 px-6 flex flex-col items-center justify-center min-h-screen md:min-h-0">
                    {/* Mobile version: 7 lines exactly */}
                    <div className="md:hidden w-full">
                        <TextReveal
                            startEarly
                            initialColor="#B3B3B3"
                            revealedColor="#000000"
                            className="justify-center text-center text-[21px] leading-[1.4] font-medium tracking-tight max-w-[320px] mx-auto"
                        >
                            {`We believe noise doesn't build\nbrands. Focus, direction, and\na smart engine do. We\ncombine strategic clarity with\nhigh-precision execution to\nensure every move our brands\nmake is intentional and impactful.`}
                        </TextReveal>
                    </div>

                    {/* Desktop version: Original layout */}
                    <div className="hidden md:block w-full">
                        <TextReveal
                            startEarly
                            initialColor="#B3B3B3"
                            revealedColor="#000000"
                            className="justify-center text-center text-[26px] leading-[1.5] font-medium tracking-tight max-w-[950px] mx-auto"
                        >
                            {`We believe noise doesn't build brands. Focus, direction, and a smart engine do.\nWe combine strategic clarity with high-precision execution to ensure every move our brands make is intentional and impactful.`}
                        </TextReveal>
                    </div>
                </div>
            </div>

            <div data-theme-section="white">
                <HowWeDoIt />
            </div>

            <div data-theme-section="white">
                <ProjectsGrid />
            </div>

            <div data-theme-section="black" className="my-[200px]">
                <BrandsSection />
            </div>

            <div data-theme-section="white">
                <BlogSection />
            </div>

            <div data-theme-section="white">
                <CommunitySection />
            </div>

            <div data-theme-section="white">
                <FAQSection />
            </div>

            <div data-theme-section="black" className="pt-[200px]">
                <Footer />
            </div>
        </main>
    );
}
