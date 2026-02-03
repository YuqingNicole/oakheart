import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThemeIntegration() {
  const breadcrumbs = [
    { label: "Guides" },
    { label: "Theme Integration", href: "/guides/theme-integration" }
  ];

  const faqs = [
    {
      question: "Should theme or mechanics come first?",
      answer: "Either approach works. Some designers start with a compelling theme and find mechanics that support it. Others create interesting mechanics and add theme later. The key is ensuring both work together by the end."
    },
    {
      question: "How do I know if my theme is too generic?",
      answer: "If your theme could be swapped for another without changing how the game plays or feels, it's too generic. Strong themes influence player decisions and create memorable moments that wouldn't exist with a different theme."
    },
    {
      question: "Can I use a popular IP theme?",
      answer: "Using licensed intellectual property (Star Wars, Marvel, etc.) requires permission from rights holders. For self-published games, create original themes or use public domain settings. Theme-alike designs can work, but avoid direct references."
    },
    {
      question: "How important is theme for selling a game?",
      answer: "Theme is often what catches a player's eye first. A unique, compelling theme can differentiate your game in a crowded market. However, weak mechanics will disappoint players regardless of theme. Both matter."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Theme and Mechanic Integration in Board Game Design | Oakheart Games"
        description="Learn how to seamlessly integrate theme and mechanics in your board game. Create immersive experiences where every rule feels natural and every action tells a story."
        keywords="board game theme, game design theme, mechanics and theme, thematic games, board game immersion, game narrative"
      />
      <Header />

      <main className="container mx-auto px-4 pt-18 pb-18 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />

        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <h1>Theme and Mechanic Integration</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
              The best board games make players feel like they're living the theme. When mechanics and theme work together, rules become intuitive and actions become meaningful.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 my-8 not-prose">
              <h3 className="text-lg font-bold mb-2">The Integration Test</h3>
              <p className="text-muted-foreground">
                Ask yourself: "Would this rule make sense to someone who knows the theme but hasn't read the rulebook?" If yes, you've achieved good integration.
              </p>
            </div>

            <h2>Understanding Thematic Integration</h2>
            <p>
              Theme integration exists on a spectrum from "pasted on" to "fully immersive." Understanding this spectrum helps you decide where your game should land.
            </p>

            <h3>Levels of Integration:</h3>
            <ul>
              <li><strong>Abstract:</strong> No theme at all (Chess, Go). Pure mechanics.</li>
              <li><strong>Pasted On:</strong> Theme exists but doesn't affect gameplay (many early Euros).</li>
              <li><strong>Supportive:</strong> Theme helps remember rules but could be swapped.</li>
              <li><strong>Integrated:</strong> Theme and mechanics reinforce each other.</li>
              <li><strong>Immersive:</strong> The game couldn't exist with a different theme.</li>
            </ul>

            <h2>Mechanics That Support Theme</h2>
            <p>
              Some mechanics naturally lend themselves to certain themes. Matching them creates intuitive experiences.
            </p>

            <h3>Natural Pairings:</h3>
            <ul>
              <li><strong>Worker Placement + Civilization:</strong> Assigning citizens to tasks feels natural.</li>
              <li><strong>Deck Building + Character Growth:</strong> Your deck represents your character's abilities.</li>
              <li><strong>Area Control + Warfare:</strong> Controlling territory mirrors actual conflict.</li>
              <li><strong>Resource Management + Economy:</strong> Trading and building feel authentic.</li>
              <li><strong>Push Your Luck + Adventure:</strong> Risk-taking matches heroic themes.</li>
            </ul>

            <h2>Naming and Language</h2>
            <p>
              The words you use shape how players experience your game. Thematic language makes rules memorable.
            </p>
            <ul>
              <li><strong>Action Names:</strong> "Harvest" instead of "gain 2 resources."</li>
              <li><strong>Resource Names:</strong> "Gold doubloons" instead of "yellow cubes."</li>
              <li><strong>Phase Names:</strong> "Dawn phase" instead of "phase 1."</li>
              <li><strong>Card Names:</strong> Evocative names that hint at function.</li>
            </ul>

            <h3>Examples of Good Naming:</h3>
            <ul>
              <li>Pandemic: "Infect" and "Outbreak" instead of "add cubes" and "spread cubes."</li>
              <li>Wingspan: Bird powers that match real bird behaviors.</li>
              <li>Spirit Island: Spirit names that describe their playstyle.</li>
            </ul>

            <h2>Component Design</h2>
            <p>
              Physical components should reinforce theme. Players touch and interact with these elements constantly.
            </p>
            <ul>
              <li><strong>Custom Meeples:</strong> Shaped pieces instead of generic pawns.</li>
              <li><strong>Resource Tokens:</strong> Metal coins, wooden resources, plastic gems.</li>
              <li><strong>Card Frames:</strong> Art style and borders that match the setting.</li>
              <li><strong>Board Art:</strong> Functional spaces that look like the world they represent.</li>
            </ul>

            <h2>Narrative Through Gameplay</h2>
            <p>
              The best games tell stories through play, not just flavor text. Each action should feel like part of a narrative.
            </p>

            <h3>Creating Narrative Moments:</h3>
            <ul>
              <li><strong>Cause and Effect:</strong> Actions have visible consequences.</li>
              <li><strong>Character Arc:</strong> Players feel their position evolving.</li>
              <li><strong>Dramatic Tension:</strong> Close finishes and comeback potential.</li>
              <li><strong>Memorable Events:</strong> Cards or events that create stories.</li>
            </ul>

            <h2>Avoiding Theme-Mechanic Conflicts</h2>
            <p>
              Watch for moments where your mechanics contradict your theme. These break immersion.
            </p>

            <h3>Common Conflicts:</h3>
            <ul>
              <li><strong>Peaceful Theme + Aggressive Mechanics:</strong> Cute animals attacking each other.</li>
              <li><strong>Survival Theme + Abundant Resources:</strong> Too easy to thrive.</li>
              <li><strong>Solo Hero + Co-op Mechanics:</strong> Why would this character share?</li>
              <li><strong>Historical Accuracy + Fun:</strong> Sometimes history is boring.</li>
            </ul>

            <h2>Case Study: Wingspan</h2>
            <p>
              Wingspan is a masterclass in theme integration. Here's what makes it work:
            </p>
            <ul>
              <li><strong>Bird Powers:</strong> Each bird's ability matches its real behavior.</li>
              <li><strong>Habitats:</strong> Forest, grassland, and wetland feel distinct.</li>
              <li><strong>Food Types:</strong> Birds eat what they actually eat in nature.</li>
              <li><strong>Egg Laying:</strong> Mechanics match bird reproduction patterns.</li>
              <li><strong>Art:</strong> Beautiful, scientifically accurate illustrations.</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 not-prose">
              <Link href="/guides/game-mechanics">
                <Button size="lg" className="w-full sm:w-auto">Explore Mechanics</Button>
              </Link>
              <Link href="/guides/board-game-design-101">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Design Basics</Button>
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
