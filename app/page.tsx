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

      {/* About Section */}
      <TextReveal>
        We are KNBL. Born in storytelling. Amplified by technology. We don&apos;t just craft the message; we build the engine behind it. By fusing strategy and content with in-house AI and code, we turn great stories into holistic, high-performance solutions.
      </TextReveal>

      <ServicesGrid />

      {/* Second About Section */}
      <section className="py-44 px-4">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-2xl font-medium leading-8 tracking-tight">
            <span>we exist because brands don&apos;t need more noise. </span>
            <span className="text-neutral-300">they need direction, focus, and a partner to turn vision into results.</span>
          </p>
        </div>
      </section>

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
