import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";

interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const guides: Guide[] = [
  {
    slug: "manufacturing-101",
    title: "Board Game Manufacturing 101",
    description: "A comprehensive guide to manufacturing board games, from choosing materials to quality control and working with factories.",
    category: "Manufacturing",
    readingTime: "10 min read",
    difficulty: "Beginner"
  },
  {
    slug: "board-game-design-101",
    title: "Board Game Design 101",
    description: "Learn the fundamentals of board game design, from concept to prototype. Perfect for aspiring game designers.",
    category: "Game Design",
    readingTime: "12 min read",
    difficulty: "Beginner"
  },
  {
    slug: "kickstarter-masterclass",
    title: "Kickstarter Masterclass",
    description: "Master the art of crowdfunding with this complete guide to launching a successful Kickstarter campaign for your board game.",
    category: "Crowdfunding",
    readingTime: "15 min read",
    difficulty: "Intermediate"
  },
  {
    slug: "publishing-101",
    title: "Board Game Publishing 101",
    description: "Everything you need to know about publishing board games, from finding publishers to understanding contracts and royalties.",
    category: "Publishing",
    readingTime: "10 min read",
    difficulty: "Beginner"
  }
];

const categories = [
  {
    name: "Manufacturing",
    description: "Learn about production, materials, and working with manufacturers",
    icon: "🏭",
    color: "bg-blue-500/10 text-blue-600 border-blue-200"
  },
  {
    name: "Game Design",
    description: "Master the fundamentals of creating engaging board games",
    icon: "🎲",
    color: "bg-purple-500/10 text-purple-600 border-purple-200"
  },
  {
    name: "Crowdfunding",
    description: "Launch successful Kickstarter and crowdfunding campaigns",
    icon: "💰",
    color: "bg-green-500/10 text-green-600 border-green-200"
  },
  {
    name: "Publishing",
    description: "Navigate the world of board game publishing",
    icon: "📚",
    color: "bg-orange-500/10 text-orange-600 border-orange-200"
  }
];

const GuidesIndex = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const filteredGuides = selectedCategory
    ? guides.filter(guide => guide.category === selectedCategory)
    : guides;

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Board Game Creation Guides & Resources"
        description="Comprehensive guides for board game creators. Learn about manufacturing, design, crowdfunding, and publishing from industry experts."
        canonicalUrl="/guides"
      />
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <SeoBreadcrumbs
          items={[
            { label: "Guides", href: "/guides" },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Board Game Creation Guides
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Everything you need to know about creating, manufacturing, and publishing board games.
            From beginner basics to advanced strategies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )}
                className={`p-6 border-2 rounded-lg text-left transition-all hover:shadow-lg ${
                  selectedCategory === category.name
                    ? category.color + " shadow-md"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </button>
            ))}
          </div>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 text-sm text-primary hover:underline"
            >
              ← Clear filter
            </button>
          )}
        </div>

        {/* Guides Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory ? `${selectedCategory} Guides` : "All Guides"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <a
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group block p-6 border-2 border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {guide.category}
                  </span>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    guide.difficulty === "Beginner"
                      ? "bg-green-500/10 text-green-600"
                      : guide.difficulty === "Intermediate"
                      ? "bg-yellow-500/10 text-yellow-600"
                      : "bg-red-500/10 text-red-600"
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{guide.readingTime}</span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform inline-block">
                    Read Guide →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Why These Guides Matter */}
        <div className="mt-16 p-8 bg-accent/30 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Why These Guides Matter</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-muted-foreground">
                Written by experienced board game manufacturers, designers, and publishers who have
                successfully brought hundreds of games to market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Practical & Actionable</h3>
              <p className="text-muted-foreground">
                Every guide includes real-world examples, step-by-step instructions, and actionable
                advice you can implement immediately.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Regularly Updated</h3>
              <p className="text-muted-foreground">
                The board game industry evolves quickly. Our guides are regularly updated to reflect
                the latest trends, tools, and best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-16 p-8 border-2 border-primary/20 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">More Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/blog"
              className="p-6 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Blog Articles</h3>
              <p className="text-muted-foreground mb-3">
                In-depth articles on specific topics, case studies, and industry insights.
              </p>
              <span className="text-primary">Browse Articles →</span>
            </a>
            <a
              href="/rankings"
              className="p-6 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Game Rankings</h3>
              <p className="text-muted-foreground mb-3">
                Discover the best board games of 2025 with our curated rankings and reviews.
              </p>
              <span className="text-primary">View Rankings →</span>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Bring Your Game to Life?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            At Oakheart, we specialize in manufacturing high-quality board games for creators and publishers.
            Let's discuss your project and how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="/process"
              className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Learn Our Process
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuidesIndex;
