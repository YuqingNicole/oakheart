import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";

export default function Manufacturing101() {
  const breadcrumbs = [
    { label: "Guides" },
    { label: "Manufacturing 101", href: "/guides/manufacturing-101" }
  ];

  const faqs = [
    {
      question: "What is the Minimum Order Quantity (MOQ)?",
      answer: "At Oakheart, we specialize in low-volume manufacturing. Our MOQ starts at just 1 unit for prototypes, with cost-effective production runs starting at 500 units."
    },
    {
      question: "How long does the manufacturing process take?",
      answer: "Standard production time is 35-45 days after proof approval. Shipping time depends on the destination and method (air vs. ocean freight)."
    },
    {
      question: "Do you offer physical samples?",
      answer: "Yes! We provide digital proofs for all orders and physical prototypes (PPC) for bulk orders to ensure everything looks perfect before mass production."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Board Game Manufacturing 101: A Complete Guide | Oakheart Games"
        description="Learn the ins and outs of board game manufacturing. From file preparation and material selection to printing and shipping, this guide covers everything you need to know."
        keywords="board game manufacturing, game production guide, printing board games, custom game components, board game publishing"
      />
      <Header />
      
      <main className="container mx-auto px-4 pt-18 pb-18 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />
        
        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <h1>Board Game Manufacturing 101</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
              Turning a game concept into a physical product is a journey. This comprehensive guide walks you through every step of the board game manufacturing process.
            </p>

            <h2>Phase 1: Pre-Production</h2>
            <p>
              Before a single card is printed, your game goes through a rigorous pre-production phase. This involves finalizing your artwork, selecting materials, and creating digital proofs.
            </p>
            <ul>
              <li><strong>File Preparation:</strong> Ensuring all assets are CMYK, 300 DPI, and have proper bleed.</li>
              <li><strong>Material Selection:</strong> Choosing between Greycore, Bluecore, or Ivorycore for cards, and deciding on finishes like Linen or Matte.</li>
            </ul>

            <h2>Phase 2: Tooling & Printing</h2>
            <p>
              Once proofs are approved, we create the molds (tooling) for any plastic or metal components and set up the printing plates. Oakheart uses state-of-the-art Heidelberg offset printers for vibrant, consistent colors.
            </p>

            <h2>Phase 3: Assembly & Quality Control</h2>
            <p>
              This is where it all comes together. Cards are cut, boards are wrapped, and components are packed into the box. Our QC team inspects a percentage of every batch to ensure zero defects.
            </p>

            <h2>Phase 4: Freight & Fulfillment</h2>
            <p>
              The final step is getting the games to you. We handle ocean freight, customs clearance, and can even ship directly to your backers or warehouse.
            </p>
          </ContentSection>
        </div>

        <div className="mt-20">
            <SeoFaq items={faqs} />
        </div>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
