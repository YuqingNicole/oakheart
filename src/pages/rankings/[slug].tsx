import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { rankings, Ranking } from "@/data/rankings";

interface RankingPageProps {
  ranking: Ranking;
}

const RankingPage: React.FC<RankingPageProps> = ({ ranking }) => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={ranking.metaTitle}
        description={ranking.metaDescription}
        canonicalUrl={`/rankings/${ranking.slug}`}
      />
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Rankings", href: "/rankings" },
            { label: ranking.title, href: `/rankings/${ranking.slug}` },
          ]}
        />

        <article className="mt-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                {ranking.category}
              </span>
              <span>•</span>
              <time dateTime={ranking.date}>
                {new Date(ranking.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>By {ranking.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {ranking.title}
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              {ranking.introduction.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </header>

          {/* Rankings List */}
          <div className="space-y-8 mt-12">
            {ranking.games.map((game) => (
              <div
                key={game.rank}
                className="border-l-4 border-primary pl-6 py-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {game.rank}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">{game.name}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {game.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Honorable Mentions */}
          {ranking.honorableMentions && ranking.honorableMentions.length > 0 && (
            <div className="mt-12 p-6 bg-accent/30 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Honorable Mentions</h2>
              <ul className="space-y-2">
                {ranking.honorableMentions.map((mention, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {mention}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Links */}
          {ranking.relatedLinks && ranking.relatedLinks.length > 0 && (
            <div className="mt-12 p-6 border-2 border-primary/20 rounded-lg">
              <h2 className="text-xl font-bold mb-4">You May Also Enjoy</h2>
              <div className="space-y-2">
                {ranking.relatedLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block text-primary hover:underline"
                  >
                    → {link.text}
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Bring Your Board Game to Life?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            At Oakheart, we specialize in manufacturing high-quality board games for creators and publishers.
            From prototypes to full production runs, we're here to help you succeed.
          </p>
          <a
            href="/quote"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = rankings.map((ranking) => ({
    params: { slug: ranking.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<RankingPageProps> = async ({
  params,
}) => {
  const ranking = rankings.find((r) => r.slug === params?.slug);

  if (!ranking) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ranking,
    },
  };
};

export default RankingPage;
