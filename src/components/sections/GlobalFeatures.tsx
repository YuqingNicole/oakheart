import { motion } from "framer-motion";
import { Globe, MessageSquare, Truck, Shield, FileCheck, BarChart3 } from "lucide-react";

const globalFeatures = [
  {
    icon: MessageSquare,
    title: "Native English Support",
    description: "Fluent English-speaking project managers ensure crystal-clear communication throughout your project.",
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "Direct logistics to 50+ countries with DDP/FOB options and fulfillment center partnerships.",
  },
  {
    icon: Truck,
    title: "Multi-Port Delivery",
    description: "Flexible shipping from multiple ports to optimize transit time and reduce costs.",
  },
];

const techFeatures = [
  {
    icon: FileCheck,
    title: "Online File Pre-Check",
    description: "Upload your files for instant automated quality analysis before production begins.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Tracking",
    description: "Monitor production progress 24/7 through our dedicated client dashboard.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "AI-powered inspection system catches defects before they leave the factory.",
  },
];

export function GlobalFeatures() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Global Connectivity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-aged-brass mb-4 font-body">
            Global Connectivity
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
            Seamless Communication, Worldwide Delivery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            We bridge the gap between East and West with professional English support and a comprehensive global logistics network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {globalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-aged-brass/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-aged-brass/20 transition-colors">
                <feature.icon className="w-7 h-7 text-aged-brass" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech-Enabled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-aged-brass mb-4 font-body">
            Tech-Enabled Manufacturing
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
            Digital-First Production Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Our proprietary technology platform streamlines every step from file upload to delivery tracking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-aged-brass/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-aged-brass/20 transition-colors">
                <feature.icon className="w-7 h-7 text-aged-brass" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-br from-primary/5 to-aged-brass/10 rounded-2xl p-8 md:p-12 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Production Dashboard Preview
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                Track your order status in real-time: from file approval to shipping confirmation. 
                Get instant notifications at every milestone.
              </p>
              <div className="space-y-3">
                {["File Received", "Pre-Press Complete", "Printing", "Assembly", "QC Passed", "Shipped"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${i < 4 ? "bg-green-500" : i === 4 ? "bg-aged-brass animate-pulse" : "bg-muted"}`} />
                    <span className={`font-body text-sm ${i <= 4 ? "text-foreground" : "text-muted-foreground"}`}>
                      {step}
                    </span>
                    {i === 4 && <span className="text-xs text-aged-brass font-medium">In Progress</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-sm text-muted-foreground">Order #OAK-2024-1892</span>
                <span className="text-xs bg-aged-brass/20 text-aged-brass px-2 py-1 rounded">Active</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-body text-foreground">Overall Progress</span>
                    <span className="font-body text-aged-brass">78%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-aged-brass rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground font-body">Est. Completion</p>
                    <p className="font-display font-semibold text-foreground">Mar 15, 2024</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-body">Quantity</p>
                    <p className="font-display font-semibold text-foreground">2,500 units</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
