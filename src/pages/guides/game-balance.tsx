import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GameBalance() {
  const breadcrumbs = [
    { label: "Guides" },
    { label: "Game Balance", href: "/guides/game-balance" }
  ];

  const faqs = [
    {
      question: "How do I know if my game is balanced?",
      answer: "Track win rates across strategies and player positions in playtests. If one approach wins significantly more than others, or first/last player has a major advantage, adjustments are needed. Aim for multiple viable paths to victory."
    },
    {
      question: "Should all strategies be equally powerful?",
      answer: "Not necessarily. Some asymmetry creates interesting choices. But every strategy should feel viable, and the best strategy shouldn't be obvious. Players should win by playing well, not by choosing the 'right' character or approach."
    },
    {
      question: "How do I fix a runaway leader problem?",
      answer: "Add catch-up mechanics (leader gets targeted, behind player gets bonuses), hidden scoring (unclear who's winning), or diminishing returns (leading is harder to maintain). Be careful not to punish skilled play too harshly."
    },
    {
      question: "Is perfect balance possible?",
      answer: "No game is perfectly balanced, and that's okay. The goal is to make the game feel fair and ensure skill matters more than luck or strategy choice. Some imbalance can create interesting metagame dynamics."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Game Balance: How to Balance Your Board Game | Oakheart Games"
        description="Master the art of game balance. Learn techniques for balancing asymmetric powers, preventing runaway leaders, and creating meaningful choices in your board game design."
        keywords="game balance, board game balance, balancing games, asymmetric balance, game design balance, fair gameplay"
      />
      <Header />

      <main className="container mx-auto px-4 pt-18 pb-18 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />

        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <h1>The Art of Game Balance</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
              A balanced game feels fair. Every choice matters, every strategy is viable, and the better player usually wins. Achieving this balance is one of the greatest challenges in game design.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 my-8 not-prose">
              <h3 className="text-lg font-bold mb-2">The Balance Paradox</h3>
              <p className="text-muted-foreground">
                Perfect balance can be boring. A little asymmetry creates drama and replayability. The goal is perceived fairness, not mathematical perfection.
              </p>
            </div>

            <h2>Types of Balance</h2>
            <p>
              Understanding different types of balance helps you identify and fix issues in your game.
            </p>

            <h3>1. Starting Balance</h3>
            <p>Do all players begin with equal chances of winning?</p>
            <ul>
              <li><strong>Turn Order:</strong> First player advantage is common and often needs compensation.</li>
              <li><strong>Starting Position:</strong> In spatial games, some locations may be inherently better.</li>
              <li><strong>Asymmetric Powers:</strong> Different abilities should be equally valuable overall.</li>
            </ul>

            <h3>2. Strategic Balance</h3>
            <p>Are multiple paths to victory viable?</p>
            <ul>
              <li><strong>Dominant Strategies:</strong> One approach that always wins is a problem.</li>
              <li><strong>Trap Options:</strong> Choices that seem good but never work are frustrating.</li>
              <li><strong>Rock-Paper-Scissors:</strong> Counter-strategies create healthy dynamics.</li>
            </ul>

            <h3>3. Player Count Balance</h3>
            <p>Does the game work well at all listed player counts?</p>
            <ul>
              <li><strong>Scaling Resources:</strong> Adjust availability based on player count.</li>
              <li><strong>Interaction Levels:</strong> 2-player and 5-player games play very differently.</li>
              <li><strong>Game Length:</strong> More players often means longer games.</li>
            </ul>

            <h2>Common Balance Problems</h2>

            <h3>The Runaway Leader</h3>
            <p>
              When early advantages compound, the leader becomes unbeatable. This makes the late game feel pointless.
            </p>
            <h4>Solutions:</h4>
            <ul>
              <li>Diminishing returns on leading strategies.</li>
              <li>Catch-up mechanics for trailing players.</li>
              <li>Hidden or delayed scoring.</li>
              <li>Natural player targeting of the leader.</li>
            </ul>

            <h3>The Snowball Effect</h3>
            <p>
              Similar to runaway leader, but resources or power grow exponentially.
            </p>
            <h4>Solutions:</h4>
            <ul>
              <li>Caps on resource accumulation.</li>
              <li>Increasing costs for expansion.</li>
              <li>Maintenance costs for large empires.</li>
              <li>Risk increases with reward.</li>
            </ul>

            <h3>Analysis Paralysis</h3>
            <p>
              Too many equally good options slow the game to a crawl.
            </p>
            <h4>Solutions:</h4>
            <ul>
              <li>Limit available options each turn.</li>
              <li>Create clear "good" and "better" choices.</li>
              <li>Add time pressure or simultaneous play.</li>
              <li>Make information easier to process.</li>
            </ul>

            <h3>Kingmaking</h3>
            <p>
              A player who can't win determines who does win among others.
            </p>
            <h4>Solutions:</h4>
            <ul>
              <li>Hidden scoring until the end.</li>
              <li>Limit targeted interaction.</li>
              <li>Keep all players competitive until the end.</li>
              <li>Make attacks equally costly to attacker.</li>
            </ul>

            <h2>Balancing Techniques</h2>

            <h3>Cost Curves</h3>
            <p>
              Assign costs to abilities based on their power. More powerful = more expensive.
            </p>
            <ul>
              <li>Create a baseline (1 gold = 1 action = 1 card draw).</li>
              <li>Price everything relative to this baseline.</li>
              <li>Adjust through playtesting.</li>
            </ul>

            <h3>Feedback Loops</h3>
            <p>
              Positive loops amplify differences. Negative loops reduce them.
            </p>
            <ul>
              <li><strong>Positive:</strong> Winner gets resources to win more (problematic).</li>
              <li><strong>Negative:</strong> Leader faces increased challenges (balancing).</li>
            </ul>

            <h3>Variance and Randomness</h3>
            <p>
              Controlled randomness can balance skill gaps without feeling unfair.
            </p>
            <ul>
              <li>Input randomness (drawing cards) is often better than output randomness (dice rolls).</li>
              <li>High variance early, low variance late.</li>
              <li>Randomness that creates opportunities, not just results.</li>
            </ul>

            <h2>Testing for Balance</h2>
            <p>
              Balance is discovered through rigorous testing, not theoretical design.
            </p>
            <ul>
              <li><strong>Track Win Rates:</strong> By strategy, starting position, and player count.</li>
              <li><strong>Note Dominant Strategies:</strong> What do winners usually do?</li>
              <li><strong>Watch for Frustration:</strong> When do players feel cheated?</li>
              <li><strong>Test Extremes:</strong> What happens if someone focuses entirely on one strategy?</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 not-prose">
              <Link href="/guides/playtesting-guide">
                <Button size="lg" className="w-full sm:w-auto">Playtesting Guide</Button>
              </Link>
              <Link href="/guides/game-mechanics">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Explore Mechanics</Button>
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
