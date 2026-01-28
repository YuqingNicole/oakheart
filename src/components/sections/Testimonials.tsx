import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Oakheart has been transformative for our publishing business. Their attention to detail and commitment to quality is unmatched in the industry.",
    author: "Sarah Mitchell",
    company: "Oakwood Publishing",
  },
  {
    quote: "The team at Oakheart truly understands what makes a great game. They've been instrumental in bringing our vision to life with exceptional craftsmanship.",
    author: "James Rodriguez",
    company: "Fireside Games",
  },
  {
    quote: "From prototyping to final production, Oakheart's expertise and dedication have made them an invaluable partner. We couldn't ask for better collaborators.",
    author: "Emily Chen",
    company: "Golden Age Games",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-aged-brass mb-4 font-body">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Trusted by Publishers
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto font-body">
            Hear from the creators who bring their games to life with Oakheart
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/10"
            >
              <Quote className="w-10 h-10 text-aged-brass mb-6" />
              <p className="text-primary-foreground/90 font-body leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-lg">
                  {testimonial.author}
                </p>
                <p className="text-primary-foreground/60 text-sm font-body">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
