import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RulebookWriting() {
  const breadcrumbs = [
    { label: "Guides" },
    { label: "Rulebook Writing", href: "/guides/rulebook-writing" }
  ];

  const faqs = [
    {
      question: "How long should my rulebook be?",
      answer: "As short as possible while being complete. A 20-minute game shouldn't have a 30-page rulebook. Use layout, examples, and diagrams to communicate efficiently. Most gateway games are 4-8 pages; complex games 16-24 pages."
    },
    {
      question: "Should I hire a professional editor?",
      answer: "Yes, if budget allows. A fresh pair of eyes catches ambiguities and errors you've become blind to. At minimum, have multiple people unfamiliar with your game read and try to play from the rules alone."
    },
    {
      question: "When should I write the rulebook?",
      answer: "Start documenting rules early, but don't finalize until the game is done. Writing rules often reveals design issues. The final polish should happen after gameplay is locked and all playtesting is complete."
    },
    {
      question: "Should I include strategy tips in the rulebook?",
      answer: "Keep them separate from core rules. Some players enjoy discovering strategy themselves. Consider a 'Tips' section at the end, or a separate strategy guide. Never mix strategy with rules - it creates confusion."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="How to Write a Clear Board Game Rulebook | Oakheart Games"
        description="Learn the art of rulebook writing. Create clear, organized rules that players can understand and reference easily. Includes structure templates, writing tips, and common mistakes to avoid."
        keywords="board game rulebook, writing game rules, rulebook design, clear instructions, game documentation, rulebook template"
      />
      <Header />

      <main className="container mx-auto px-4 pt-18 pb-18 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />

        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <h1>How to Write a Clear Rulebook</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
              A confusing rulebook can ruin a great game. Clear rules get players into the action quickly and prevent arguments. This guide will help you write rules that players actually understand.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 my-8 not-prose">
              <h3 className="text-lg font-bold mb-2">The Rulebook Test</h3>
              <p className="text-muted-foreground">
                Can someone who has never played your game read the rules and play correctly without your help? If not, the rulebook needs work.
              </p>
            </div>

            <h2>Rulebook Structure</h2>
            <p>
              A well-organized rulebook follows a logical flow that mirrors how players learn and play the game.
            </p>

            <h3>Recommended Order:</h3>
            <ol>
              <li><strong>Game Overview:</strong> 1-2 sentences about what the game is and how you win.</li>
              <li><strong>Components List:</strong> Everything in the box with images.</li>
              <li><strong>Setup:</strong> Step-by-step with diagrams.</li>
              <li><strong>Turn Structure:</strong> What happens on each turn.</li>
              <li><strong>Actions:</strong> Detailed explanation of each action.</li>
              <li><strong>Game End:</strong> When and how the game ends.</li>
              <li><strong>Scoring:</strong> How to calculate final scores.</li>
              <li><strong>Card/Component Reference:</strong> Details for specific cards or pieces.</li>
              <li><strong>FAQ/Edge Cases:</strong> Common questions answered.</li>
            </ol>

            <h2>Writing Clear Rules</h2>

            <h3>Use Active Voice</h3>
            <p>Active voice is clearer and more direct than passive voice.</p>
            <ul>
              <li><strong>Good:</strong> "Draw 2 cards."</li>
              <li><strong>Bad:</strong> "2 cards should be drawn by the player."</li>
            </ul>

            <h3>Be Consistent with Terminology</h3>
            <p>Pick one term and use it throughout. Create a glossary if needed.</p>
            <ul>
              <li>Don't switch between "discard," "remove," and "trash."</li>
              <li>Define terms on first use.</li>
              <li>Bold or italicize game-specific terms.</li>
            </ul>

            <h3>Use Numbered Lists for Sequences</h3>
            <p>When order matters, number the steps clearly.</p>
            <ul>
              <li>Setup procedures</li>
              <li>Turn phases</li>
              <li>Scoring calculations</li>
            </ul>

            <h3>Include Examples</h3>
            <p>Show rules in action with concrete examples.</p>
            <ul>
              <li>Use actual game situations.</li>
              <li>Include images or diagrams.</li>
              <li>Clarify edge cases through examples.</li>
            </ul>

            <h2>Visual Design</h2>

            <h3>Layout Best Practices:</h3>
            <ul>
              <li><strong>Headers:</strong> Clear hierarchy with different sizes.</li>
              <li><strong>White Space:</strong> Don't cram text; let it breathe.</li>
              <li><strong>Images:</strong> Diagrams for setup, icons for reference.</li>
              <li><strong>Callout Boxes:</strong> Highlight important rules or tips.</li>
              <li><strong>Page Numbers:</strong> Reference specific pages easily.</li>
              <li><strong>Index:</strong> For longer rulebooks, include an index.</li>
            </ul>

            <h3>Diagram Tips:</h3>
            <ul>
              <li>Show before and after states.</li>
              <li>Use arrows to indicate movement or sequence.</li>
              <li>Label components clearly.</li>
              <li>Match diagram style to game art.</li>
            </ul>

            <h2>Common Rulebook Mistakes</h2>

            <h3>Mistakes to Avoid:</h3>
            <ul>
              <li><strong>Burying Important Rules:</strong> Key rules should be prominent, not hidden.</li>
              <li><strong>Assuming Knowledge:</strong> Define everything; don't assume familiarity.</li>
              <li><strong>Inconsistent Formatting:</strong> Headers, bullets, and text should follow patterns.</li>
              <li><strong>Missing Edge Cases:</strong> Address what happens in unusual situations.</li>
              <li><strong>Wall of Text:</strong> Break up long paragraphs; use lists and headers.</li>
              <li><strong>No Examples:</strong> Abstract rules need concrete illustrations.</li>
            </ul>

            <h2>Testing Your Rulebook</h2>

            <h3>Blind Rulebook Testing:</h3>
            <ol>
              <li>Give the rulebook to someone who hasn't played.</li>
              <li>Ask them to set up and play without your help.</li>
              <li>Watch silently and note every point of confusion.</li>
              <li>After playing, ask what was unclear.</li>
              <li>Revise and repeat with new testers.</li>
            </ol>

            <h2>Quick Reference Materials</h2>
            <p>
              Consider creating supplementary materials for easy reference during play.
            </p>
            <ul>
              <li><strong>Player Aids:</strong> Turn summary cards for each player.</li>
              <li><strong>Icon Reference:</strong> Card explaining all symbols.</li>
              <li><strong>Setup Guide:</strong> Quick setup on one page.</li>
              <li><strong>FAQ Sheet:</strong> Common questions answered briefly.</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 not-prose">
              <Link href="/guides/playtesting-guide">
                <Button size="lg" className="w-full sm:w-auto">Playtesting Guide</Button>
              </Link>
              <Link href="/quote">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Get a Quote</Button>
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
