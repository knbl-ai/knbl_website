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
      <TextReveal id="about" className="py-44">
        We are KNBL. Born in storytelling. Amplified by technology. We don&apos;t just craft the message; we build the engine behind it. By fusing strategy and content with in-house AI and code, we turn great stories into holistic, high-performance solutions.
      </TextReveal>

      <ServicesGrid />

      {/* Second About Section */}
      {/* Second About Section */}
      <div className="py-44 flex flex-col items-center justify-center">
        <TextReveal className="py-0 pb-2 [&>div]:max-w-5xl">
          We believe noise doesn&apos;t build brands.
        </TextReveal>
        <TextReveal className="py-0 pt-2 [&>div]:max-w-5xl">
          Focus, direction, and a smart engine do.
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
