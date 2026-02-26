import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import GastronomySection from "@/components/GastronomySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <GastronomySection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
