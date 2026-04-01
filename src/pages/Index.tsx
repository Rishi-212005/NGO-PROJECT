import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MissionPreview from "@/components/MissionPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <MissionPreview />
    <ProjectsPreview />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
