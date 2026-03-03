import Navbar from "@/components/Navbar";
import HeroTitle from "@/components/HeroTitle";
import BentoGrid from "@/components/BentoGrid";
import dynamic from "next/dynamic";

// Lazy load below-fold and heavy components
const CursorGlow = dynamic(() => import("@/components/CursorGlow"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const SkillsSection = dynamic(() => import("@/components/SkillsSection"));
const ExploreSection = dynamic(() => import("@/components/ExploreSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col items-center">
      <CursorGlow />
      <Navbar />
      <HeroTitle />
      <BentoGrid />
      <ProjectsSection />
      <SkillsSection />
      <ExploreSection />
      <Footer />
    </div>
  );
}
