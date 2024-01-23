import AdvantageSection from "@/components/sections/AdvantageSection";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between mx-20">
      <HeroSection />
      <SocialProofSection/>
      <AdvantageSection/>
    </main>
  );
}
