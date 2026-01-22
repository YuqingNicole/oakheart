import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import gameComponents1 from "@/assets/game-components-1.jpg";
import gameComponents2 from "@/assets/game-components-2.jpg";
import gameComponents3 from "@/assets/game-components-3.jpg";

const games = [
  {
    title: "Realm of Shadows",
    publisher: "Mystic Games Publishing",
    image: gameComponents1,
    category: "Strategy",
    description: "A dark fantasy deck-building game with premium metal coins and custom dice.",
  },
  {
    title: "Trade Routes",
    publisher: "Euro Board Games Co.",
    image: gameComponents2,
    category: "Euro Game",
    description: "Economic strategy game featuring wooden resource tokens and double-layered player boards.",
  },
  {
    title: "Cosmic Frontier",
    publisher: "Stellar Studios",
    image: gameComponents3,
    category: "Sci-Fi",
    description: "Space exploration game with detailed plastic miniatures and modular board tiles.",
  },
  {
    title: "Garden Seasons",
    publisher: "Cozy Games Publishing",
    image: gameComponents1,
    category: "Family",
    description: "Family-friendly tile-laying game with beautiful artwork and wooden meeples.",
  },
  {
    title: "Dragon's Hoard",
    publisher: "Adventure Games Ltd.",
    image: gameComponents2,
    category: "Adventure",
    description: "Dungeon crawl adventure with custom dice, miniatures, and modular dungeon tiles.",
  },
  {
    title: "Market Square",
    publisher: "Independent Designer",
    image: gameComponents3,
    category: "Card Game",
    description: "Quick-playing market game with linen-finish cards and metal coins.",
  },
];

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Featured Games
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover some of the incredible tabletop games we've helped bring to life for publishers and designers worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game, index) => (
                <motion.div
                  key={game.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-aged-brass text-primary-foreground text-xs uppercase tracking-wider font-medium px-3 py-1 rounded-full">
                          {game.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {game.title}
                      </h3>
                      <p className="text-aged-brass text-sm font-medium mb-3">
                        {game.publisher}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-serif text-4xl font-bold text-foreground mb-2">500+</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">Games Produced</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-bold text-foreground mb-2">200+</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">Publishers</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">Countries</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-bold text-foreground mb-2">15+</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Ready to Create Your Game?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of publishers who trust Oakheart Games Manufacturing to bring their visions to life.
            </p>
            <Button variant="hero" size="lg">
              Start Your Project
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
