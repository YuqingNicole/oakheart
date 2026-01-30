import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Image from "next/image";
import cardImage from "@/assets/game-components-1.jpg"; // Using existing asset

export default function CustomCards() {
  const breadcrumbs = [
    { label: "Components" },
    { label: "Custom Playing Cards", href: "/components/cards" }
  ];

  const faqs = [
    {
      question: "What card stocks do you offer?",
      answer: "We offer a range of premium card stocks including 300gsm Grey Core (Standard), 310gsm Ivory Core (Premium), and 330gsm German Black Core (Casino Grade). We also offer eco-friendly recycled paper options."
    },
    {
      question: "What is the difference between Blue Core and Black Core?",
      answer: "The 'core' refers to the opaque layer in the middle of the card stock. Black Core is more opaque and has a higher 'snap' and durability, making it the preferred choice for professional casinos and premium board games. Blue/Grey core is excellent for standard board games."
    },
    {
      question: "Do you offer Linen Finish?",
      answer: "Yes! Linen finish is one of our most popular options. It adds a textured, cross-hatched feel to the cards that improves handling and reduces glare. We also offer smooth matte and high-gloss finishes."
    },
    {
      question: "Can you print custom card sizes?",
      answer: "Absolutely. While Standard Poker (63x88mm) and Tarot (70x120mm) are most common, we can manufacture cards of any dimension, including mini cards, square cards, and hexagonal tiles."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Custom Playing Card Manufacturing - Premium Black Core & Linen Finish | Oakheart"
        description="High-quality custom playing card printing for board games. Choose from German Black Core, Blue Core, and eco-friendly stocks with linen or matte finishes."
        keywords="custom playing cards, board game card printing, black core cards, linen finish cards, tarot card printing, playing card manufacturer"
      />
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />
        
        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
              <Image 
                src={cardImage} 
                alt="Custom Printed Playing Cards with Linen Finish" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                 <h1 className="text-4xl md:text-5xl font-display font-bold text-white text-center px-4">
                  Custom Playing Cards
                  <span className="block text-xl md:text-2xl font-body font-normal mt-4 text-white/90">
                    Casino-Grade Quality for Your Board Game
                  </span>
                </h1>
              </div>
            </div>

            <p className="lead text-xl text-muted-foreground mb-8">
              Cards are the heart of many board games. At Oakheart, we treat card manufacturing as an art form, ensuring every shuffle feels perfect and every artwork detail pops.
            </p>

            <h2>Paper Stock Options</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="mt-0 text-aged-brass">Standard Grey Core</h3>
                <p className="text-sm mb-0"><strong>300gsm.</strong> The industry standard for board games. Great opacity and snap at an affordable price point.</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="mt-0 text-aged-brass">Premium Ivory Core</h3>
                <p className="text-sm mb-0"><strong>310gsm.</strong> Smoother and stiffer than grey core. A popular choice for deck-building games.</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="mt-0 text-aged-brass">German Black Core</h3>
                <p className="text-sm mb-0"><strong>330gsm.</strong> The finest card stock available. Totally opaque with superior memory and snap. Casino grade.</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="mt-0 text-aged-brass">White Core</h3>
                <p className="text-sm mb-0"><strong>350gsm.</strong> A heavy, stiff art paper without a center core. Ideal for flashcards or oversized tarot cards.</p>
              </div>
            </div>

            <h2>Finishes & Coatings</h2>
            <ul>
              <li><strong>Linen Finish:</strong> A textured pattern pressed into the card that creates air pockets for smoother shuffling. Reduces glare and hides wear.</li>
              <li><strong>Matte Varnish:</strong> A smooth, non-reflective finish that makes text easy to read.</li>
              <li><strong>Gloss Varnish:</strong> A shiny finish that makes colors vibrant. Great for image-heavy games.</li>
              <li><strong>Spot UV / Foil:</strong> Add premium details to card backs for special editions.</li>
            </ul>

            <h2>Manufacturing Process</h2>
            <p>
              We print using state-of-the-art Heidelberg offset presses for unmatched color consistency. After printing, sheets are coated, cut, and collated with precision to ensure every deck has the exact right card count.
            </p>
          </ContentSection>
          
          <div className="mt-12">
            <h2 className="text-2xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
            <SeoFaq items={faqs} />
          </div>
        </div>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
