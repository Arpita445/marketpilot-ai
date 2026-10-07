import LandingNavbar from "@/components/landing/Navbar";
import LandingHero from "@/components/landing/Hero";
import TrustSection from "@/components/landing/TrustSection";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <LandingNavbar />
      <main className="flex-1">
        <LandingHero />
        <TrustSection />
        <HowItWorks />
        <FeaturesGrid />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
