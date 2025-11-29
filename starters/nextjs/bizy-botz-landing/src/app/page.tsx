import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <CapabilitiesSection />
      <HowItWorksSection />
      <ResultsSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
