import HeroSection from "@/components/home/HeroSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import StatsCounter from "@/components/home/StatsCounter";
import LatestNews from "@/components/home/LatestNews";
import CTABanner from "@/components/home/CTABanner";
import PartnersSection from "@/components/home/PartnersSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <StatsCounter />
      <LatestNews />
      <CTABanner />
      <PartnersSection />
    </>
  );
}
