import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function KickstarterMasterclass() {
  const breadcrumbs = [
    { label: "Guides" },
    { label: "Kickstarter Masterclass", href: "/guides/kickstarter-masterclass" }
  ];

  const faqs = [
    {
      question: "When should I contact a manufacturer for my Kickstarter?",
      answer: "Ideally, 3-4 months before your launch. This gives you time to get accurate quotes, create prototypes for reviewers, and understand shipping costs to set your pledge levels correctly."
    },
    {
      question: "Do I need a finished prototype for the campaign page?",
      answer: "Yes! Backers want to see what they are buying. A high-quality 'Golden Prototype' is essential for photography, reviews, and building trust. Oakheart can produce these single units for you."
    },
    {
      question: "How do I estimate shipping for backers?",
      answer: "Shipping is volatile. We recommend charging shipping after the campaign in a pledge manager. Consult with fulfillment partners early to get estimates for different regions (US, EU, UK, etc.)."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Board Game Kickstarter Masterclass: The Ultimate Guide | Oakheart Games"
        description="Launch your board game on Kickstarter with confidence. Learn about pre-launch community building, campaign page design, manufacturing quotes, and fulfillment strategies."
        keywords="kickstarter board games, crowdfunding guide, board game marketing, kickstarter fulfillment, game manufacturing quotes"
      />
      <Header />
      
      <main className="container mx-auto px-4 pt-18 pb-18 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />
        
        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <h1>Kickstarter Masterclass: From Concept to Funded</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
              Crowdfunding has revolutionized the board game industry. But a successful campaign requires months of preparation. This guide covers the critical pillars of a winning Kickstarter strategy.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 my-8 not-prose">
              <h3 className="text-lg font-bold mb-2">Why This Matters</h3>
              <p className="text-muted-foreground">
                70% of board game projects on Kickstarter succeed, but the top 10% raise 90% of the funds. The difference is preparation and professional execution.
              </p>
            </div>

            <h2>Phase 1: Pre-Launch (The "Quiet" Phase)</h2>
            <p>
              The battle is won before the campaign starts. Your goal is to bring 30% of your funding goal on Day 1 through your email list and community.
            </p>
            <ul>
              <li><strong>Build an Email List:</strong> Use a landing page (like Carrd or Mailchimp) to collect emails in exchange for Print & Play files.</li>
              <li><strong>Community Engagement:</strong> Be active in Facebook groups and BGG forums. Don't just sell; add value.</li>
              <li><strong>Reviewer Copies:</strong> Send prototypes to previews and influencers 2 months before launch.</li>
            </ul>

            <h2>Phase 2: The Campaign Page</h2>
            <p>
              Your Kickstarter page is your sales pitch. It needs to look professional and answer every backer's question immediately.
            </p>
            <h3>Key Elements:</h3>
            <ul>
              <li><strong>The Video:</strong> Keep it under 2 minutes. Show the game being played, not just cinematic trailers.</li>
              <li><strong>The Components:</strong> High-resolution photos of cards, meeples, and the box. <Link href="/quote" className="text-primary hover:underline">Get a prototype quote</Link> to make these real.</li>
              <li><strong>Reviews:</strong> Social proof from trusted voices in the industry.</li>
              <li><strong>Shipping Section:</strong> Be transparent about estimated costs and VAT.</li>
            </ul>

            <h2>Phase 3: Manufacturing & Fulfillment</h2>
            <p>
              Success can be fatal if you miscalculate costs. Ensure your funding goal covers manufacturing, freight, customs, and last-mile delivery—plus a 10% buffer.
            </p>
            <p>
              Oakheart helps you plan this early. We provide:
            </p>
            <ul>
              <li><strong>Accurate Manufacturing Quotes:</strong> Locked in for your campaign duration.</li>
              <li><strong>Weight & Dimensions:</strong> Crucial for calculating shipping costs.</li>
              <li><strong>Low MOQs:</strong> We start at 500 units, making it easier to fund.</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 not-prose">
              <Link href="/quote">
                <Button size="lg" className="w-full sm:w-auto">Get a Campaign Quote</Button>
              </Link>
              <Link href="/guides/manufacturing-101">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Read Manufacturing 101</Button>
              </Link>
            </div>

            <h2>Phase 4: Post-Campaign</h2>
            <p>
              After the confetti settles, the real work begins. Use a Pledge Manager (BackerKit, Gamefound) to handle shipping addresses and upsells. Keep backers updated at least once a month—transparency builds lifelong fans.
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
