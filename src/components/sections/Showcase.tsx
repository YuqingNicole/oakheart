import { motion } from "framer-motion";
import gameComponents1 from "@/assets/game-components-1.jpg";
import gameComponents2 from "@/assets/game-components-2.jpg";
import gameComponents3 from "@/assets/game-components-3.jpg";

const showcaseItems = [
  {
    image: gameComponents1,
    title: "Precision Tokens",
    description: "Hand-crafted wooden components with exceptional detail",
  },
  {
    image: gameComponents2,
    title: "Premium Cards",
    description: "Superior card stock with elegant finishing options",
  },
  {
    image: gameComponents3,
    title: "Custom Miniatures",
    description: "Detailed miniatures and custom dice for any game",
  },
];

export function Showcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-aged-brass mb-4 font-body">
            Craftsmanship
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">
            Exceptional Components
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Every piece we create reflects our commitment to quality and attention to detail
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-soft mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
