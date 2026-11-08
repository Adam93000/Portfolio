import {
  Header,
  Footer,
  HeroSection,
  AboutPitch,
  SkillsSection,
  ProjectsSection,
  TimelineSection,
  ContactSection,
} from '../../components';

export default function Home() {
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
      <Footer />
    </div>
  );
}

