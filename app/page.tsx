import Footer from "@/components/layout/Footer";
import AdvantageSection from "@/components/sections/AdvantageSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between mx-4 sm:mx-20 2xl:mx-40">
      <HeroSection />
      <SocialProofSection/>
      <AdvantageSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    </main>
  );
}
