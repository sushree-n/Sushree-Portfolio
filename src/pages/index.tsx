import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import AICompanion from "@/components/AICompanion";
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionId);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('IntersectionObserver: section in view:', entry.target.id);
            setCurrentSection(entry.target.id || "hero");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Main Content */}
      <HeroSection onScrollToSection={scrollToSection} />
      <EducationSection />
      <ExperienceSection />
      {/* <TechnicalSkillsSection /> */}
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      
      {/* AI Companion */}
      <AICompanion 
        onNavigate={scrollToSection} 
        currentSection={currentSection}
      />
    </div>
  );
};

export default Index;
