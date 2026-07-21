'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutHero from './components/AboutHero';
import ImageGallery from './components/ImageGallery';
import StatsSection from './components/StatsSection';
import TeamSection from './components/TeamSection';
import WhyKNBLSection from './components/WhyKNBLSection';
import TeamPromise from './components/TeamPromise';

export default function AgencyPageClient() {
  return (
    <main data-logo-theme="white" className="min-h-screen bg-transparent">
      <Navigation />

      {/* Hero */}
      <AboutHero />

      {/* Image Gallery - horizontal scroll */}
      <ImageGallery />

      {/* Team Promise Section */}
      <TeamPromise />

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Why KNBL Section */}
      <WhyKNBLSection />

      <Footer />
    </main>
  );
}
