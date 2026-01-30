import { Header } from "@/components/layout/Header";
import { SeoHead } from "@/components/seo/SeoHead";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { GlobalFeatures } from "@/components/sections/GlobalFeatures";
import { Showcase } from "@/components/sections/Showcase";
import { BehindTheScenes } from "@/components/sections/BehindTheScenes";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Oakheart - Premium Board Game Manufacturing" 
        description="Turn your tabletop concepts into reality with Oakheart's premium manufacturing services. From prototypes to mass production, we deliver quality."
        canonicalUrl="/"
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
    </div>
  );
};

export default Index;
