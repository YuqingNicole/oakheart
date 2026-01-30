import { Globe, Truck, Shield, MessageSquare, FileCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Worldwide fulfillment with competitive rates to US, EU, and beyond.",
  },
  {
    icon: Truck,
    title: "Fast Production",
    description: "Typical turnaround of 3-4 weeks from approval to delivery.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous QC process ensures every component meets your standards.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Support",
    description: "Personal project manager for seamless communication.",
  },
  {
    icon: FileCheck,
    title: "Free Samples",
    description: "Review physical samples before committing to production.",
  },
  {
    icon: BarChart3,
    title: "Scalable Orders",
    description: "From 500 to 50,000+ units with flexible MOQ options.",
  },
];

export function GlobalFeatures() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Why Choose Oakheart
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern manufacturing to deliver exceptional board games.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
