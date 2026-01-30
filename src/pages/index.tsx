import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { GlobalFeatures } from "@/components/sections/GlobalFeatures";
import { Showcase } from "@/components/sections/Showcase";
import { BehindTheScenes } from "@/components/sections/BehindTheScenes";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { StickyCTA } from "@/components/layout/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Custom Board Game Manufacturing & Printing Services"
        description="Premium board game manufacturing for indie designers and publishers. High-quality components, eco-friendly options, and reliable fulfillment from China."
        keywords="board game manufacturing, custom game printing, tabletop game manufacturer, game components, card printing"
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <GlobalFeatures />
        <Showcase />
        <BehindTheScenes />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
