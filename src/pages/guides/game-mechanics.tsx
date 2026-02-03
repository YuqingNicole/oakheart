import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GameMechanics() {
  const breadcrumbs = [
    { label: "Guides" },
    { label: "Game Mechanics", href: "/guides/game-mechanics" }
  ];

  const faqs = [
    {
      question: "How many mechanics should my game have?",
      answer: "Most successful games focus on 1-3 core mechanics and support them with secondary systems. Too many mechanics can overwhelm players and dilute what makes your game special."
    },
    {
      question: "Can I combine mechanics that don't usually go together?",
      answer: "Absolutely! Some of the most innovative games come from unexpected combinations. The key is ensuring the mechanics enhance rather than conflict with each other."
    },
    {
      question: "Which mechanics are best for new designers?",
      answer: "Set collection, card drafting, and simple action selection are forgiving mechanics that are easy to prototype and balance. Save complex mechanics like legacy systems or real-time elements for later projects."
    },
    {
      question: "How do I know which mechanic is right for my theme?",
      answer: "Ask yourself: what actions would make sense in this world? A trading game might use negotiation and resource management. A war game might use area control and dice combat. Let the theme guide you."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Core Board Game Mechanics Explained: Complete Guide | Oakheart Games"
        description="Master the essential board game mechanics: worker placement, deck building, area control, engine building, and more. Learn when and how to use each mechanic in your game design."
        keywords="board game mechanics, worker placement, deck building, area control, engine building, game design mechanics, card drafting"
      />
      <Header />

      <main className="container mx-auto px-4 pt-18 pb-18 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />

        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <h1>Core Board Game Mechanics Explained</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
              Game mechanics are the building blocks of every board game. Understanding these fundamental systems will help you design more engaging, balanced, and innovative games.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 my-8 not-prose">
              <h3 className="text-lg font-bold mb-2">Mechanics vs. Theme</h3>
              <p className="text-muted-foreground">
                Mechanics are the "how" of your game - the rules and systems. Theme is the "what" - the story and setting. Great games integrate both seamlessly.
              </p>
            </div>

            <h2>Worker Placement</h2>
            <p>
              Players assign a limited number of workers to action spaces on the board. Once a space is occupied, other players typically cannot use it that round.
            </p>
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Scarcity:</strong> Limited workers force difficult decisions.</li>
              <li><strong>Blocking:</strong> Strategic denial of actions to opponents.</li>
              <li><strong>Turn Order:</strong> Going first provides significant advantages.</li>
            </ul>
            <h3>Classic Examples:</h3>
            <ul>
              <li>Agricola - Farm building with family growth</li>
              <li>Lords of Waterdeep - Fantasy quest completion</li>
              <li>Viticulture - Wine making and selling</li>
            </ul>

            <h2>Deck Building</h2>
            <p>
              Players start with identical basic decks and acquire new cards during the game to improve their deck's power and efficiency.
            </p>
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Starting Equality:</strong> All players begin the same.</li>
              <li><strong>Emergent Strategy:</strong> Deck identity develops during play.</li>
              <li><strong>Deck Thinning:</strong> Removing weak cards is often as important as adding strong ones.</li>
            </ul>
            <h3>Classic Examples:</h3>
            <ul>
              <li>Dominion - The genre originator</li>
              <li>Clank! - Deck building meets dungeon crawling</li>
              <li>Star Realms - Compact two-player combat</li>
            </ul>

            <h2>Area Control</h2>
            <p>
              Players compete for dominance over regions of the board, typically scoring points based on majorities or exclusive control.
            </p>
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Spatial Thinking:</strong> Board position matters.</li>
              <li><strong>Conflict:</strong> Direct competition for territory.</li>
              <li><strong>Timing:</strong> When to commit resources is crucial.</li>
            </ul>
            <h3>Classic Examples:</h3>
            <ul>
              <li>Risk - The classic conquest game</li>
              <li>Blood Rage - Viking area control with drafting</li>
              <li>El Grande - Pure area majority mechanics</li>
            </ul>

            <h2>Engine Building</h2>
            <p>
              Players construct systems that generate increasing returns over time - resources produce more resources, which unlock better abilities.
            </p>
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Compound Growth:</strong> Early investments pay dividends.</li>
              <li><strong>Satisfying Progression:</strong> Players feel increasingly powerful.</li>
              <li><strong>Strategic Depth:</strong> Multiple viable engine types.</li>
            </ul>
            <h3>Classic Examples:</h3>
            <ul>
              <li>Terraforming Mars - Corporate engine building on Mars</li>
              <li>Wingspan - Bird-powered engine creation</li>
              <li>Splendor - Gem engine for prestige points</li>
            </ul>

            <h2>Card Drafting</h2>
            <p>
              Players select cards from a shared pool or passing hand, building their collection while denying options to opponents.
            </p>
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Hate Drafting:</strong> Taking cards to deny opponents.</li>
              <li><strong>Information:</strong> Players see what's available.</li>
              <li><strong>Adaptation:</strong> Adjusting strategy based on available options.</li>
            </ul>
            <h3>Classic Examples:</h3>
            <ul>
              <li>7 Wonders - Civilization building through drafting</li>
              <li>Sushi Go! - Quick family-friendly drafting</li>
              <li>Azul - Tile drafting with spatial puzzle</li>
            </ul>

            <h2>Set Collection</h2>
            <p>
              Players gather groups of matching items, scoring bonuses for completing sets or collecting specific combinations.
            </p>
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Clear Goals:</strong> Players understand what to collect.</li>
              <li><strong>Push Your Luck:</strong> Wait for better sets or score now?</li>
              <li><strong>Accessibility:</strong> Easy to teach and understand.</li>
            </ul>
            <h3>Classic Examples:</h3>
            <ul>
              <li>Ticket to Ride - Train route set collection</li>
              <li>Rummy - The classic card game</li>
              <li>Century: Spice Road - Spice trading and sets</li>
            </ul>

            <h2>Action Point Allowance</h2>
            <p>
              Players have a pool of action points to spend on various actions, with different actions costing different amounts.
            </p>
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Flexibility:</strong> Many options each turn.</li>
              <li><strong>Optimization:</strong> Finding the best combination of actions.</li>
              <li><strong>Scalability:</strong> Easy to add new actions.</li>
            </ul>
            <h3>Classic Examples:</h3>
            <ul>
              <li>Pandemic - Cooperative disease fighting</li>
              <li>Tikal - Archaeological exploration</li>
              <li>Dead of Winter - Zombie survival</li>
            </ul>

            <h2>Combining Mechanics</h2>
            <p>
              The most interesting modern games combine multiple mechanics. Here are some successful combinations:
            </p>
            <ul>
              <li><strong>Deck Building + Area Control:</strong> Tyrants of the Underdark</li>
              <li><strong>Worker Placement + Engine Building:</strong> Agricola</li>
              <li><strong>Drafting + Set Collection:</strong> Sushi Go!</li>
              <li><strong>Area Control + Deck Building:</strong> A Few Acres of Snow</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 not-prose">
              <Link href="/guides/board-game-design-101">
                <Button size="lg" className="w-full sm:w-auto">Game Design Basics</Button>
              </Link>
              <Link href="/guides/game-balance">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Learn About Balance</Button>
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
