import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Publishing101() {
  const breadcrumbs = [
    { label: "Guides" },
    { label: "Publishing 101", href: "/guides/publishing-101" }
  ];

  const faqs = [
    {
      question: "Should I self-publish or find a publisher?",
      answer: "Self-publishing (Kickstarter) means you keep all profits but do all the work (marketing, fulfillment). Signing with a publisher means you get royalties (5-8%) but they handle the business side."
    },
    {
      question: "What is a standard royalty rate?",
      answer: "Standard industry royalties for game designers are 5-8% of the wholesale price (or sometimes net sales). Advances vary widely but often range from $1,000 to $5,000."
    },
    {
      question: "Do I need an agent?",
      answer: "Most board game designers do not have agents. The industry is open enough that you can pitch directly to publishers at conventions or via email forms."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Board Game Publishing 101: Licensing vs. Self-Publishing | Oakheart Games"
        description="Deciding how to bring your game to market? Compare the pros and cons of pitching to publishers versus self-publishing on Kickstarter."
        keywords="board game publishing, pitch board game, game licensing, self-publishing board games, publisher royalties"
      />
      <Header />
      
      <main className="container mx-auto px-4 pt-18 pb-18 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />
        
        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <h1>Publishing 101: Choosing Your Path</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
              You have a great game. Now, how do you get it into players' hands? There are two main paths in the modern board game industry, and they require very different skill sets.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
              <div className="p-6 bg-secondary/20 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">Path A: Licensing (The Designer)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">✅ Focus purely on game design</li>
                  <li className="flex gap-2">✅ No financial risk</li>
                  <li className="flex gap-2">✅ Leverage publisher's distribution</li>
                  <li className="flex gap-2">❌ Lower profit per unit (Royalties)</li>
                  <li className="flex gap-2">❌ Less control over final art/production</li>
                </ul>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="text-xl font-bold mb-4">Path B: Self-Publishing (The Entrepreneur)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">✅ Full creative control</li>
                  <li className="flex gap-2">✅ Higher profit margins</li>
                  <li className="flex gap-2">✅ Build your own brand/community</li>
                  <li className="flex gap-2">❌ High financial risk</li>
                  <li className="flex gap-2">❌ Requires marketing & logistics skills</li>
                </ul>
              </div>
            </div>

            <h2>Pitching to Publishers</h2>
            <p>
              If you choose Path A, your job is sales. You need to attend conventions (Gen Con, Essen, Origins) and book meetings with publishers.
            </p>
            <ul>
              <li><strong>Research:</strong> Don't pitch a heavy war game to a family game publisher. Know their catalog.</li>
              <li><strong>The Pitch:</strong> You have 5 minutes. Explain the hook, teach the core loop, and show why it fits their line.</li>
              <li><strong>The Follow-up:</strong> If they like it, they'll ask for a prototype. Send it promptly.</li>
            </ul>

            <h2>Self-Publishing via Kickstarter</h2>
            <p>
              If you choose Path B, you are now a small business owner. You need to handle:
            </p>
            <ul>
              <li><strong>Art Direction:</strong> Hiring illustrators and graphic designers.</li>
              <li><strong>Manufacturing:</strong> Finding a factory (like Oakheart) and managing quality control.</li>
              <li><strong>Marketing:</strong> Building an audience before you launch.</li>
            </ul>

            <div className="bg-muted/30 p-6 rounded-xl border border-dashed my-8 not-prose">
              <h3 className="text-lg font-bold mb-2">Ready to Self-Publish?</h3>
              <p className="text-muted-foreground mb-4">
                We've built a comprehensive guide specifically for Kickstarter creators. It covers everything from pre-launch marketing to fulfillment.
              </p>
              <Link href="/guides/kickstarter-masterclass">
                <Button>Go to Kickstarter Masterclass</Button>
              </Link>
            </div>

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
