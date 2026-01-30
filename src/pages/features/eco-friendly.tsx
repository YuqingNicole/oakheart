import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Leaf, Recycle, Droplets, Package } from "lucide-react";

export default function EcoFriendly() {
  const breadcrumbs = [
    { label: "Features" },
    { label: "Eco-Friendly Manufacturing", href: "/features/eco-friendly" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Eco-Friendly Board Game Manufacturing - Sustainable & Plastic-Free | Oakheart"
        description="Manufacture your board game sustainably. We offer FSC-certified paper, soy-based inks, plastic-free packaging, and biodegradable components."
        keywords="eco-friendly board game manufacturing, sustainable game printing, plastic free board games, fsc certified printing, soy based ink"
      />
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block p-3 rounded-full bg-green-100 text-green-700 mb-6">
              <Leaf className="w-8 h-8" />
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Sustainable Manufacturing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create games that are good for players and the planet. We offer a full suite of eco-friendly materials and production processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <Recycle className="w-10 h-10 text-aged-brass mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3">FSC® Certified Paper</h3>
              <p className="text-muted-foreground">
                All our paper and cardboard comes from responsibly managed forests. We can provide FSC certification logos for your box to show your commitment to sustainability.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <Droplets className="w-10 h-10 text-aged-brass mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3">Soy-Based Inks</h3>
              <p className="text-muted-foreground">
                We use vegetable-based inks instead of petroleum-based ones. They produce vibrant colors while being easier to recycle and releasing fewer VOCs during drying.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <Package className="w-10 h-10 text-aged-brass mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3">Plastic-Free Packaging</h3>
              <p className="text-muted-foreground">
                Replace shrink wrap with paper belly bands or wafer seals. Use molded pulp or cardboard inserts instead of plastic vacuum trays.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <Leaf className="w-10 h-10 text-aged-brass mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3">Wood & Bamboo</h3>
              <p className="text-muted-foreground">
                Swap plastic tokens for FSC-certified wood or fast-growing bamboo. We offer custom shapes, laser engraving, and non-toxic tumbling finishes.
              </p>
            </div>
          </div>

          <ContentSection>
            <h2>Why Go Green?</h2>
            <p>
              The board game industry is shifting. Gamers are increasingly conscious of the environmental impact of their hobbies. By choosing sustainable manufacturing, you not only reduce your carbon footprint but also appeal to a growing market segment that values eco-conscious products.
            </p>
            
            <h3>Our Commitment</h3>
            <p>
              Oakheart is committed to reducing waste in our own facility. We recycle 100% of our paper scraps and aluminum printing plates. Our factory runs partially on solar energy, and we are constantly researching new biodegradable materials.
            </p>

            <h3>Cost Implications</h3>
            <p>
              Historically, "going green" meant higher costs. However, with the rising cost of plastic and our optimized supply chain, sustainable options are now very competitive.
            </p>
            <ul>
              <li><strong>Paper bands</strong> are cheaper than shrink wrap.</li>
              <li><strong>Grey core card stock</strong> (recycled content) is the industry standard for affordability.</li>
              <li><strong>Soy inks</strong> are our standard, with no extra charge.</li>
            </ul>
          </ContentSection>
        </div>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
