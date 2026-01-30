import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg"; // Using existing asset as placeholder

export default function RealmOfShadows() {
  const breadcrumbs = [
    { label: "Case Studies" },
    { label: "Realm of Shadows", href: "/case-studies/realm-of-shadows" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Realm of Shadows - Board Game Manufacturing Case Study | Oakheart"
        description="See how Oakheart Games manufactured Realm of Shadows, featuring custom miniatures, gold foil packaging, and linen-finish cards. A Kickstarter success story."
        keywords="board game case study, custom miniatures manufacturing, kickstarter game fulfillment, gold foil game box, premium card printing"
      />
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />
        
        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
              <Image 
                src={heroBg} 
                alt="Realm of Shadows Board Game Components" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                 <h1 className="text-4xl md:text-5xl font-display font-bold text-white text-center px-4">
                  Realm of Shadows
                  <span className="block text-xl md:text-2xl font-body font-normal mt-4 text-white/90">
                    From Kickstarter Concept to Retail Reality
                  </span>
                </h1>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-border pb-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Client</h3>
                <p className="text-muted-foreground">Mythic Horizons Games</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Services</h3>
                <p className="text-muted-foreground">Manufacturing, Tooling, Fulfillment</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Production Run</h3>
                <p className="text-muted-foreground">5,000 Units (Kickstarter Edition)</p>
              </div>
            </div>

            <h2>The Challenge</h2>
            <p>
              <em>Realm of Shadows</em> is a dark fantasy dungeon crawler that promised backers an immersive experience. The campaign raised over $450k, unlocking ambitious stretch goals including:
            </p>
            <ul>
              <li><strong>Intricate Miniatures:</strong> 12 unique hero sculpts with fine details (weapons, cloth textures).</li>
              <li><strong>Premium Packaging:</strong> A large box with spot UV and gold foil stamping to capture the magical theme.</li>
              <li><strong>Tactile Components:</strong> Dual-layer player boards and linen-finish cards for durability.</li>
            </ul>
            <p>
              The creators needed a manufacturing partner who could handle complex plastic tooling while ensuring the color consistency of the dark, moody artwork across different materials (cardboard, cards, and box).
            </p>

            <h2>Our Solution</h2>
            <p>
              Oakheart's engineering team worked closely with Mythic Horizons during the pre-production phase.
            </p>
            <h3>1. Precision Tooling for Miniatures</h3>
            <p>
              We used multi-part steel molds for the hero miniatures to capture undercuts and dynamic poses. Our PVC injection process ensured the figures were durable yet detailed, holding paint well for hobbyists.
            </p>

            <h3>2. Color Calibration</h3>
            <p>
              Dark artwork is notoriously difficult to print without looking muddy. We ran multiple rounds of wet proofs using our Heidelberg presses, adjusting the CMYK curves to ensure the "shadows" retained detail and the magical effects popped with vibrancy.
            </p>

            <h3>3. Structural Engineering</h3>
            <p>
              To accommodate the 12 miniatures and heavy dual-layer boards, we designed a custom vacuum-formed insert. This kept components secure during shipping, preventing damage and providing a premium unboxing experience.
            </p>

            <h2>The Outcome</h2>
            <p>
              Production was completed 2 weeks ahead of schedule. The games were shipped directly from our facility to fulfillment hubs in the US, EU, and Australia.
            </p>
            <blockquote>
              "Oakheart didn't just print our game; they improved it. The gold foil on the box is stunning, and the miniatures came out better than our 3D renders. Our backers are thrilled!" 
              <br/>— <span className="not-italic font-medium text-foreground">Sarah Jenkins, Lead Designer at Mythic Horizons</span>
            </blockquote>
          </ContentSection>
        </div>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
