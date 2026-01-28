import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Award, Users, Globe, Heart } from "lucide-react";
import gameComponents1 from "@/assets/game-components-1.jpg";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on materials or craftsmanship. Every component meets our exacting standards.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work closely with publishers and designers to understand their vision and bring it to life.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "With worldwide shipping and logistics expertise, we deliver your games wherever they need to go.",
  },
  {
    icon: Heart,
    title: "Passion for Games",
    description: "We're gamers ourselves. We understand what makes a great tabletop experience.",
  },
];

const timeline = [
  { year: "2009", event: "Founded with a passion for quality game manufacturing" },
  { year: "2012", event: "Expanded production capacity and added premium finishing options" },
  { year: "2015", event: "Partnered with 100th publisher milestone" },
  { year: "2018", event: "Opened dedicated Kickstarter fulfillment services" },
  { year: "2021", event: "Introduced eco-friendly materials and sustainable options" },
  { year: "2024", event: "Serving over 200 publishers across 50+ countries" },
];

const About = () => {
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
                About Oakheart
              </h1>
              <p className="text-lg text-muted-foreground">
                Crafting exceptional tabletop experiences since 2009. We're more than manufacturers — we're partners in bringing your game to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Oakheart Games Manufacturing was born from a simple belief: every tabletop game deserves to be crafted with the same care and attention that went into designing it.
                  </p>
                  <p>
                    What started as a small operation has grown into a full-service manufacturing partner for publishers and designers worldwide. We've had the privilege of bringing hundreds of games to life, from indie passion projects to bestselling titles.
                  </p>
                  <p>
                    Our team combines decades of manufacturing expertise with genuine love for tabletop gaming. We understand the nuances that make a game special — the satisfying weight of quality components, the perfect shuffle of premium cards, the beauty of well-crafted wooden pieces.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={gameComponents1.src}
                  alt="Oakheart manufacturing facility"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-aged-brass text-primary-foreground p-6 rounded-lg shadow-lg">
                  <div className="font-serif text-3xl font-bold">15+</div>
                  <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-aged-brass/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-aged-brass" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-20 font-serif text-2xl font-bold text-aged-brass">
                    {item.year}
                  </div>
                  <div className="flex-grow pt-1">
                    <div className="w-3 h-3 bg-aged-brass rounded-full mb-2" />
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
