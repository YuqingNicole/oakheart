import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ContentSection } from "@/components/seo/ContentSection";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { StickyCTA } from "@/components/layout/StickyCTA";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PlaytestingGuide() {
  const breadcrumbs = [
    { label: "Guides" },
    { label: "Playtesting Guide", href: "/guides/playtesting-guide" }
  ];

  const faqs = [
    {
      question: "How do I find playtesters?",
      answer: "Start with friends and family, then expand to local game stores, board game meetups, conventions, and online communities like BoardGameGeek. For blind playtesting, platforms like The Game Crafter and Tabletop Simulator can help you reach remote testers."
    },
    {
      question: "How do I handle negative feedback?",
      answer: "Remember that criticism of your game is not criticism of you. Thank testers for their honesty, take notes without defending your choices, and look for patterns across multiple playtests. If one person has a problem, it might be them. If five people have the same problem, it's the game."
    },
    {
      question: "Should I playtest with gamers or non-gamers?",
      answer: "Both! Experienced gamers provide detailed mechanical feedback but may have preconceptions. Non-gamers reveal accessibility issues and help ensure your game isn't too complex. Test with your target audience most."
    },
    {
      question: "When should I stop playtesting?",
      answer: "When blind playtesters consistently enjoy the game, understand the rules without help, and you're no longer finding significant issues. Most published games have 50-200+ playtests. If you're still finding major problems, keep testing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="The Art of Playtesting: A Board Game Designer's Guide | Oakheart Games"
        description="Master the playtesting process for your board game. Learn how to find testers, gather useful feedback, iterate effectively, and know when your game is ready for publication."
        keywords="playtesting board games, game testing, board game feedback, blind playtesting, game design iteration, prototype testing"
      />
      <Header />

      <main className="container mx-auto px-4 pt-18 pb-18 md:pt-40 md:pb-20">
        <SeoBreadcrumbs items={breadcrumbs} />

        <div className="max-w-4xl mx-auto">
          <ContentSection>
            <h1>The Art of Playtesting Your Board Game</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
              Playtesting is where good games become great. It's the process of iterative refinement that separates published games from abandoned projects. This guide will help you playtest effectively.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 my-8 not-prose">
              <h3 className="text-lg font-bold mb-2">The Golden Rule of Playtesting</h3>
              <p className="text-muted-foreground">
                Your game is not your baby - it's a product that needs to work for other people. Detach your ego and embrace criticism as the path to a better game.
              </p>
            </div>

            <h2>Stages of Playtesting</h2>
            <p>
              Different stages of development require different types of playtesting. Progress through these stages systematically.
            </p>

            <h3>Stage 1: Solo Testing</h3>
            <p>
              Before showing your game to anyone else, play it yourself. Control all players and look for obvious issues.
            </p>
            <ul>
              <li><strong>Check Basic Functionality:</strong> Does the game flow from start to finish?</li>
              <li><strong>Find Broken Combinations:</strong> Are there obviously overpowered strategies?</li>
              <li><strong>Test Edge Cases:</strong> What happens when resources run out?</li>
              <li><strong>Time the Game:</strong> How long do turns and the full game take?</li>
            </ul>

            <h3>Stage 2: Friends and Family</h3>
            <p>
              Your first human testers should be supportive people who will be patient with a rough prototype.
            </p>
            <ul>
              <li><strong>Explain Rules Verbally:</strong> Note where they get confused.</li>
              <li><strong>Watch, Don't Play:</strong> Observe their decisions and reactions.</li>
              <li><strong>Ask Open Questions:</strong> "What did you think?" not "Did you like it?"</li>
              <li><strong>Note Fun Moments:</strong> When do players laugh, cheer, or lean in?</li>
            </ul>

            <h3>Stage 3: Gaming Groups</h3>
            <p>
              Experienced gamers provide more detailed, critical feedback. Find local meetups or gaming cafes.
            </p>
            <ul>
              <li><strong>Test with Strangers:</strong> They'll be more honest than friends.</li>
              <li><strong>Observe Experienced Eyes:</strong> Gamers spot mechanical issues quickly.</li>
              <li><strong>Get Comparison Feedback:</strong> "This feels like X game" is valuable data.</li>
              <li><strong>Test Different Player Counts:</strong> Does the game scale well?</li>
            </ul>

            <h3>Stage 4: Blind Playtesting</h3>
            <p>
              The ultimate test: can strangers learn and enjoy your game without you present?
            </p>
            <ul>
              <li><strong>Send Complete Prototypes:</strong> Rules, components, everything needed.</li>
              <li><strong>Request Detailed Feedback:</strong> Provide a questionnaire.</li>
              <li><strong>Video Recording:</strong> Ask testers to record their session if possible.</li>
              <li><strong>Test the Rules:</strong> If they can't figure it out, the rules need work.</li>
            </ul>

            <h2>What to Observe During Playtests</h2>
            <p>
              Pay attention to these signals during every playtest session.
            </p>
            <ul>
              <li><strong>Body Language:</strong> Are players engaged or checking their phones?</li>
              <li><strong>Turn Length:</strong> Are turns taking too long? Too short?</li>
              <li><strong>Questions Asked:</strong> What rules are unclear?</li>
              <li><strong>Decisions Made:</strong> Are choices meaningful or obvious?</li>
              <li><strong>Player Interaction:</strong> Are people talking, negotiating, laughing?</li>
              <li><strong>End Game Feel:</strong> Is the ending exciting or anticlimactic?</li>
            </ul>

            <h2>Questions to Ask After Playtests</h2>
            <p>
              Prepare a consistent set of questions for all playtests to track improvement over time.
            </p>
            <h3>Essential Questions:</h3>
            <ol>
              <li>What was the most fun part of the game?</li>
              <li>What was the least fun part?</li>
              <li>Were there any confusing rules?</li>
              <li>Did you feel like your decisions mattered?</li>
              <li>Would you play this game again?</li>
              <li>Who would you recommend this game to?</li>
              <li>How did the length feel?</li>
              <li>Any moments of frustration?</li>
            </ol>

            <h2>Recording and Analyzing Feedback</h2>
            <p>
              Create a system for tracking feedback across playtests.
            </p>
            <ul>
              <li><strong>Playtest Log:</strong> Date, testers, version, duration, notes.</li>
              <li><strong>Issue Tracker:</strong> List problems and mark when they're resolved.</li>
              <li><strong>Version History:</strong> Track what changed between versions.</li>
              <li><strong>Pattern Recognition:</strong> Look for feedback that appears repeatedly.</li>
            </ul>

            <h2>Common Playtesting Mistakes</h2>
            <p>
              Avoid these pitfalls that many new designers encounter.
            </p>
            <ul>
              <li><strong>Defending Your Design:</strong> Don't argue with feedback - listen.</li>
              <li><strong>Changing Too Much:</strong> Test one change at a time when possible.</li>
              <li><strong>Only Testing with Gamers:</strong> Include casual players too.</li>
              <li><strong>Ignoring Repeated Feedback:</strong> If multiple people say it, address it.</li>
              <li><strong>Playtesting Too Rarely:</strong> Aim for weekly sessions during development.</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 not-prose">
              <Link href="/guides/game-balance">
                <Button size="lg" className="w-full sm:w-auto">Learn About Balance</Button>
              </Link>
              <Link href="/guides/rulebook-writing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Write Clear Rules</Button>
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
