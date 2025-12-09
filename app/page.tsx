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
      <TextReveal className="py-44">
        We are KNBL. Born in storytelling. Amplified by technology. We don&apos;t just craft the message; we build the engine behind it. By fusing strategy and content with in-house AI and code, we turn great stories into holistic, high-performance solutions.
      </TextReveal>

      <ServicesGrid />

      {/* Second About Section */}
      <TextReveal className="py-44 [&>div]:max-w-5xl">
        We believe noise doesn&apos;t build brands. Focus, direction, and a smart engine do.
      </TextReveal>

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
