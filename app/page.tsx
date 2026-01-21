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

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <Hero />

            <section id="about" className="flex flex-col items-center py-44">
                <div className="max-w-[1200px] mx-auto text-center">
                    <TextReveal className="justify-center text-center text-lg md:text-[26px] leading-[1.5] font-medium tracking-tight max-w-3xl mx-auto">
                        {`We're KNBL a strategy-driven collective built for what's next. We started in storytelling, where every brand moment had a voice and a purpose. Today, that voice meets technology, partnered by AI, guided by insight, and scaled with precision.\n\nOur model connects every step.`}
                    </TextReveal>
                </div>
            </section>

            <ServicesGrid />

            {/* Second About Section */}
            <div className="py-44 flex flex-col items-center justify-center">
                <TextReveal className="justify-center text-center text-lg md:text-[26px] leading-[1.5] font-medium tracking-tight max-w-[950px] mx-auto">
                    We believe noise doesn&apos;t build brands. Focus, direction, and a smart engine do. We combine strategic clarity with high-precision execution to ensure every move our brands make is intentional and impactful.
                </TextReveal>
            </div>

            <HowWeDoIt />
            <ProjectsGrid />
            <BrandsSection />
            <BlogSection />
            <CommunitySection />
            <FAQSection />
            <Footer />
        </main>
    );
}
