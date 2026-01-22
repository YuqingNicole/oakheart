import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import gameComponents1 from "@/assets/game-components-1.jpg";
import gameComponents2 from "@/assets/game-components-2.jpg";
import gameComponents3 from "@/assets/game-components-3.jpg";

const categories = ["All", "Cards", "Dice", "Wooden", "Plastic", "Boxes", "Accessories"];

const components = [
  {
    name: "Custom Playing Cards",
    category: "Cards",
    image: gameComponents1,
    description: "Premium card stock with custom finishes including linen, matte, and glossy options.",
  },
  {
    name: "Custom Dice Sets",
    category: "Dice",
    image: gameComponents2,
    description: "Engraved or printed dice in various sizes, materials, and colors.",
  },
  {
    name: "Wooden Meeples",
    category: "Wooden",
    image: gameComponents3,
    description: "Hand-crafted wooden pieces in custom shapes and vibrant colors.",
  },
  {
    name: "Game Boards",
    category: "Accessories",
    image: gameComponents1,
    description: "Folding and flat game boards with premium printing and finishes.",
  },
  {
    name: "Plastic Miniatures",
    category: "Plastic",
    image: gameComponents2,
    description: "Detailed plastic miniatures and custom-molded game pieces.",
  },
  {
    name: "Custom Game Boxes",
    category: "Boxes",
    image: gameComponents3,
    description: "Rigid boxes with magnetic closures, inserts, and premium printing.",
  },
  {
    name: "Token Sets",
    category: "Accessories",
    image: gameComponents1,
    description: "Cardboard tokens with die-cut shapes and full-color printing.",
  },
  {
    name: "Resource Cubes",
    category: "Wooden",
    image: gameComponents2,
    description: "Painted wooden cubes and custom resource pieces.",
  },
  {
    name: "Card Sleeves",
    category: "Cards",
    image: gameComponents3,
    description: "Protective card sleeves with custom printing options.",
  },
];

const Components = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredComponents = activeCategory === "All"
    ? components
    : components.filter(c => c.category === activeCategory);

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
                Game Components
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our extensive catalog of high-quality game components, from cards and dice to custom miniatures and packaging.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="uppercase tracking-wider text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Components Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredComponents.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={component.image}
                        alt={component.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-wider text-aged-brass font-medium">
                        {component.category}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3">
                        {component.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Need Custom Components?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              We can manufacture virtually any game component to your specifications. Contact us to discuss your unique requirements.
            </p>
            <Button variant="gold" size="lg">
              Request a Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Components;
