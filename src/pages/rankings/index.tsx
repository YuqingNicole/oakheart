import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { rankings } from "@/data/rankings";

const RankingsIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Board Game Rankings & Best Of Lists | Oakheart"
        description="Discover the best board games of 2025 with our curated rankings. Family games, two-player games, kids games, and more top picks from industry experts."
        canonicalUrl="/rankings"
      />
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Rankings", href: "/rankings" },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Board Game Rankings
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover the best board games with our curated rankings and "Best Of" lists.
            From family favorites to competitive two-player duels, find your next game night hit.
          </p>
        </div>

        {/* Rankings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankings.map((ranking) => (
            <a
              key={ranking.slug}
              href={`/rankings/${ranking.slug}`}
              className="group block p-6 border-2 border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {ranking.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {ranking.title}
              </h2>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {ranking.metaDescription}
              </p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{ranking.games.length} Games</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform inline-block">
                  View List →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Have a Great Game Idea?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            At Oakheart, we help board game creators bring their visions to life.
            From prototyping to full production, we're your manufacturing partner.
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

export default RankingsIndex;
