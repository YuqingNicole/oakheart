import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-aged-brass mb-4 font-body">
            Start Your Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 font-body max-w-2xl mx-auto">
            Partner with Oakheart to bring your game vision to life. Our team of craftsmen and game enthusiasts are ready to guide you through every step of the manufacturing process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline-gold" size="xl">
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
