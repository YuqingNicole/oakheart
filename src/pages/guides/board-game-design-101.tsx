import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BoardGameDesign101() {
  const breadcrumbs = [
    { label: "Guides" },
    { label: "Board Game Design 101", href: "/guides/board-game-design-101" }
  ];

  const faqs = [
    {
      question: "How do I protect my game idea?",
      answer: "Ideas cannot be copyrighted, but rulebooks and artwork can. The best protection is to be first to market and build a community. NDAs are rarely used in the industry for submissions."
    },
    {
      question: "What software should I use for card design?",
      answer: "Adobe InDesign and Illustrator are industry standards. For beginners, Nandeck or Canva can work, but learning professional tools ensures your files are print-ready."
    },
    {
      question: "How many playtests do I need?",
      answer: "More than you think! Aim for 50-100 playtests with different groups (blind playtesting is crucial). Don't just test with friends; test with strangers who aren't afraid to be honest."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Board Game Design 101: From Idea to Prototype | Oakheart Games"
        description="Start your journey as a board game designer. Learn about mechanics, prototyping, playtesting, and preparing your game for pitching or publishing."
        keywords="board game design, game mechanics, prototyping board games, playtesting guide, game design software"
      />
      <Header />
      
      <main className="container mx-auto px-4 pt-18 pb-18 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />
        
        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <h1>Board Game Design 101</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
              Every great game starts with a spark. But turning that spark into a playable, enjoyable product requires a structured design process.
            </p>

            <h2>Step 1: The Core Loop</h2>
            <p>
              Define the heart of your game. What do players <em>do</em> on their turn? Whether it's worker placement, deck building, or rolling and moving, this core mechanic must be engaging on its own.
            </p>
            <ul>
              <li><strong>Theme vs. Mechanics:</strong> Some start with a story (Ameritrash), others with a system (Euro). Both are valid, but they must support each other.</li>
              <li><strong>Hook:</strong> What makes your game different? Is it a unique theme? A twist on a classic mechanic?</li>
            </ul>

            <h2>Step 2: Rapid Prototyping</h2>
            <p>
              Fail faster. Don't worry about art yet. Use index cards, scribbles, and spare parts from other games. The goal is to get it to the table immediately to see if the core loop works.
            </p>
            <p>
              <em>Pro Tip:</em> Oakheart offers <Link href="/quote" className="text-primary hover:underline">prototype manufacturing</Link> when you're ready for higher fidelity, but stick to paper and scissors for the first 10 versions.
            </p>

            <h2>Step 3: Playtesting & Iteration</h2>
            <p>
              This is the grind. Playtesting comes in stages:
            </p>
            <ol>
              <li><strong>Self-Testing:</strong> Play against yourself to fix broken math.</li>
              <li><strong>Friends & Family:</strong> Check if the game is fun and understandable.</li>
              <li><strong>Blind Playtesting:</strong> Give the game and rulebook to strangers. Sit back and watch. Do NOT intervene. If they play it wrong, your rulebook needs fixing.</li>
            </ol>

            <h2>Step 4: The Sell Sheet</h2>
            <p>
              Once your game is polished, you need a Sell Sheet—a one-page resume for your game. It should include:
            </p>
            <ul>
              <li><strong>Hook/Tagline:</strong> "Die Hard in a bus."</li>
              <li><strong>Stats:</strong> Player count, time, age.</li>
              <li><strong>Component List:</strong> Publishers need to know how much it costs to make.</li>
              <li><strong>Photo:</strong> A beauty shot of the game on the table.</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 not-prose">
              <Link href="/guides/publishing-101">
                <Button size="lg" className="w-full sm:w-auto">Read Publishing 101</Button>
              </Link>
              <Link href="/guides/kickstarter-masterclass">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Kickstarter Guide</Button>
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
