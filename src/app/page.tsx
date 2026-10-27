import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { CaseStudiesSection } from "@/components/projects/CaseStudiesSection";
import { TechnicalIdentity } from "@/components/about/TechnicalIdentity";
import { LabSection } from "@/components/lab/LabSection";
import { ClosingCTA } from "@/components/contact/ClosingCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] flex flex-col justify-between selection:bg-[var(--accent-indigo)] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Interactive Case Studies */}
        <CaseStudiesSection />

        {/* 4. Technical Identity */}
        <TechnicalIdentity />

        {/* 5. Live Engineering Lab Simulations */}
        <LabSection />

        {/* 6. Closing CTA / Contact */}
        <ClosingCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
