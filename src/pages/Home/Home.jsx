import { useState } from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import HeroSection from '../../components/sections/Hero/HeroSection';
import AboutPitch from '../../components/sections/About/AboutPitch';
import SkillsSection from '../../components/sections/Skills/SkillsSection';
import ProjectsSection from '../../components/sections/Projects/ProjectsSection';
import TimelineSection from '../../components/sections/Timeline/TimelineSection';
import ContactSection from '../../components/sections/Contact/ContactSection';
import LegalModal from '../../components/common/LegalModal';

export default function Home() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <div className="page-home">
      <Header />
      <main>
        <HeroSection />
        <AboutPitch />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer onOpenLegal={() => setIsLegalOpen(true)} />

      {/* Modale des mentions légales */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
      />
    </div>
  );
}
