import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FileCheck, Palette, Factory, Package, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileCheck,
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and budget to understand exactly what you need for your game.",
    duration: "1-2 weeks",
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description: "Our team creates detailed specifications and produces sample prototypes for your approval.",
    duration: "2-4 weeks",
  },
  {
    icon: Factory,
    title: "Pre-Production",
    description: "Final artwork preparation, material selection, and manufacturing setup are completed.",
    duration: "2-3 weeks",
  },
  {
    icon: Package,
    title: "Mass Production",
    description: "Your game components are manufactured with strict quality control at every stage.",
    duration: "4-8 weeks",
  },
  {
    icon: Truck,
    title: "Quality Assurance & Shipping",
    description: "Final inspection, packaging, and worldwide delivery to your specified locations.",
    duration: "2-4 weeks",
  },
  {
    icon: CheckCircle,
    title: "Post-Delivery Support",
    description: "Ongoing support for reorders, updates, and any additional manufacturing needs.",
    duration: "Ongoing",
  },
];

const Process = () => {
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
                Our Manufacturing Process
              </h1>
              <p className="text-lg text-muted-foreground">
                From concept to delivery, we guide you through every step of bringing your tabletop game to life with precision and care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  {/* Timeline line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[15px] top-12 w-0.5 h-full bg-border" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-aged-brass flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-primary-foreground" />
                  </div>

                  <div className="ml-8 bg-card rounded-lg p-6 border border-border shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        Step {index + 1}: {step.title}
                      </h3>
                      <span className="text-sm font-medium text-aged-brass bg-aged-brass/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Total Timeline */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-xl opacity-90">
              11-21 weeks from initial consultation to delivery
            </p>
            <p className="mt-4 opacity-75">
              Timeline varies based on order complexity and quantity
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Process;
