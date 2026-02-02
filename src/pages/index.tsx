import { Header } from "../components/layout/Header";
import { SeoHead } from "../components/seo/SeoHead";
import { Hero } from "../components/sections/Hero";
import { Stats } from "../components/sections/Stats";
import { GlobalFeatures } from "../components/sections/GlobalFeatures";
import { Showcase } from "../components/sections/Showcase";
import { BehindTheScenes } from "../components/sections/BehindTheScenes";
import { Testimonials } from "../components/sections/Testimonials";
import { CTA } from "../components/sections/CTA";
import { Footer } from "../components/layout/Footer";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Oakheart Games",
    "url": "https://oakheart.com",
    "logo": "https://oakheart.com/oakheart-logo.png",
    "sameAs": [
      "https://www.facebook.com/oakheartgames",
      "https://twitter.com/oakheartgames",
      "https://www.instagram.com/oakheartgames"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-555-5555",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Oakheart - Premium Board Game Manufacturing" 
        description="Turn your tabletop concepts into reality with Oakheart's premium manufacturing services. From prototypes to mass production, we deliver quality."
        canonicalUrl="/"
        schema={organizationSchema}
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
