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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />

      {/* About Section */}
      <section className="py-44 px-4">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-2xl leading-8 tracking-tight">
            <span>we&apos;re </span>
            <span className="uppercase">knbl</span>
            <span> a </span>
            <span className="font-medium">strategy-driven</span>
            <span> collective built for what&apos;s next. we started in storytelling, where every brand moment had a voice and a purpose.</span>
            {' '}
            <span className="text-neutral-300">today, that voice meets technology, partnered by AI, guided by insight, and scaled with precision. our model connects every step.</span>
          </p>
        </div>
      </section>

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
