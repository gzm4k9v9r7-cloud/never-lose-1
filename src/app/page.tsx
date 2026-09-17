import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { RevenueRecoveredSection } from "@/components/marketing/RevenueRecovered";
import { Features } from "@/components/marketing/Features";
import { OneEmployee } from "@/components/marketing/OneEmployee";
import { WhoItsFor } from "@/components/marketing/WhoItsFor";
import { Pricing } from "@/components/marketing/Pricing";
import { FAQ } from "@/components/marketing/FAQ";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <RevenueRecoveredSection />
        <Features />
        <OneEmployee />
        <WhoItsFor />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
