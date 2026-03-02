import { useScrollProgress } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import JourneySection from "@/components/portfolio/JourneySection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import PageLoader from "@/components/portfolio/PageLoader";

const Index = () => {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <PageLoader />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
