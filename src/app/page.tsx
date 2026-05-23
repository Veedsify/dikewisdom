import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import SkillsSection from '@/components/sections/SkillsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <AboutSection />
        <FeaturedProjects />
        <SkillsSection />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
