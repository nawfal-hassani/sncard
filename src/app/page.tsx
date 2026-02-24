import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import AuroraBackground from "@/components/shared/AuroraBackground";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import Benefits from "@/components/home/Benefits";
import UseCases from "@/components/home/UseCases";
import ProductDetails from "@/components/home/ProductDetails";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <AuroraBackground />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <UseCases />
        <ProductDetails />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
