import Image from "next/image";
import { motion } from "framer-motion";

const factoryImages = [
  {
    src: "/factory_photos/04_heidelberg_pressroom.jpg",
    alt: "Precision printing on Heidelberg press",
    caption: "Precision Printing",
    description: "Our skilled technicians operate state-of-the-art Heidelberg presses for vibrant, accurate color reproduction.",
  },
  {
    src: "/factory_photos/02_production_workers.jpg",
    alt: "Production team at work",
    caption: "Hands-On Assembly",
    description: "Every game component passes through the careful hands of our experienced assembly team.",
  },
  {
    src: "/factory_photos/10_quality_control.jpg",
    alt: "Quality control inspection",
    caption: "Color Calibration",
    description: "Advanced color management systems ensure your artwork looks exactly as intended.",
  },
  {
    src: "/factory_photos/12_packaging_workers.jpg",
    alt: "Packaging and fulfillment team",
    caption: "Final Assembly",
    description: "Our dedicated packaging team ensures every box is perfectly assembled and ready to ship.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

export const BehindTheScenes = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-aged-brass uppercase tracking-[0.2em] text-sm font-body font-medium">
            Behind the Scenes
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 mb-6">
            Where Quality Meets Craftsmanship
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Step inside our production facilities and meet the dedicated teams
            who bring your game designs to life with precision and care.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {factoryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elevated transition-shadow duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                <span className="inline-block px-3 py-1 bg-aged-brass/90 text-xs uppercase tracking-wider rounded-sm mb-3 font-body">
                  {image.caption}
                </span>
                <p className="font-body text-sm md:text-base text-cream/90 leading-relaxed transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "500+", label: "Skilled Workers" },
            { number: "15+", label: "Years Experience" },
            { number: "50M+", label: "Games Produced" },
            { number: "99.2%", label: "Quality Rate" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="font-display text-3xl md:text-4xl text-aged-brass group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="font-body text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
