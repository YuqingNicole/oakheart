"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ZoomIn, RotateCw } from "lucide-react";
import gameComponents1 from "@/assets/game-components-1.jpg";
import gameComponents2 from "@/assets/game-components-2.jpg";
import gameComponents3 from "@/assets/game-components-3.jpg";
import { MaterialDetail, Material } from "@/components/ui/MaterialDetail";
import { SeoHead } from "@/components/seo/SeoHead";

const materialFilters = ["All", "Wood", "Paper", "Plastic", "Metal"];
const processFilters = ["All", "Hot Stamping", "UV Coating", "Embossing", "Screen Print", "Laser Cut"];

const materials: Material[] = [
  {
    id: 1,
    name: "Premium Linen Card Stock",
    material: "Paper",
    process: ["UV Coating", "Embossing"],
    image: gameComponents1,
    weight: "320gsm",
    description: "Cross-weave linen texture with excellent shuffle feel. Available in blue core for opacity.",
    specs: ["Core: Blue/Black/White", "Finish: Matte/Gloss", "Size: Custom"],
    has3D: false,
  },
  {
    id: 2,
    name: "Birch Wood Meeples",
    material: "Wood",
    process: ["Screen Print", "Laser Cut"],
    image: gameComponents2,
    weight: "Natural Birch",
    description: "Sustainably sourced birch wood with smooth edges and vibrant color options.",
    specs: ["Wood: FSC Certified", "Colors: 12+", "Custom shapes available"],
    has3D: true,
  },
  {
    id: 3,
    name: "Injection Molded Miniatures",
    material: "Plastic",
    process: ["Screen Print"],
    image: gameComponents3,
    weight: "HIPS/ABS",
    description: "High-detail injection molded figures with excellent paint adhesion surface.",
    specs: ["Material: HIPS/ABS", "Detail: 0.3mm", "Assembly: Single/Multi-part"],
    has3D: true,
  },
  {
    id: 4,
    name: "Hot Stamped Foil Cards",
    material: "Paper",
    process: ["Hot Stamping"],
    image: gameComponents1,
    weight: "350gsm",
    description: "Luxury gold and silver foil stamping on premium card stock for special editions.",
    specs: ["Foil: Gold/Silver/Custom", "Stock: 350gsm", "Full bleed printing"],
    has3D: false,
  },
  {
    id: 5,
    name: "Metal Coins & Tokens",
    material: "Metal",
    process: ["Embossing"],
    image: gameComponents2,
    weight: "Zinc Alloy",
    description: "Weighty zinc alloy coins with antique finish for premium game feel.",
    specs: ["Alloy: Zinc/Brass", "Finish: Antique/Polished", "Custom dies"],
    has3D: true,
  },
  {
    id: 6,
    name: "Embossed Game Board",
    material: "Paper",
    process: ["Embossing", "UV Coating"],
    image: gameComponents3,
    weight: "2.5mm Chipboard",
    description: "Quad-fold game board with raised texture areas and spot UV highlights.",
    specs: ["Core: 2.5mm", "Fold: 4/6 panels", "Finish: Matte/UV Spot"],
    has3D: false,
  },
];

const Materials = () => {
  const [activeMaterial, setActiveMaterial] = useState("All");
  const [activeProcess, setActiveProcess] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  const filteredMaterials = materials.filter(m => {
    const materialMatch = activeMaterial === "All" || m.material === activeMaterial;
    const processMatch = activeProcess === "All" || m.process.includes(activeProcess);
    return materialMatch && processMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Board Game Materials & Manufacturing Finishes Library"
        description="Explore our premium board game materials including linen card stock, wood meeples, miniatures, and special finishes like spot UV and foil stamping."
        keywords="board game materials, card stock types, custom meeples, manufacturing finishes, game component library"
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Material Library
              </h1>
              <p className="text-lg text-muted-foreground font-body">
                Explore our extensive collection of premium materials and finishing processes. 
                Experience textures up close with our interactive viewer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-border sticky top-20 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body">
                  Material Type
                </p>
                <div className="flex flex-wrap gap-2">
                  {materialFilters.map((filter) => (
                    <Button
                      key={filter}
                      variant={activeMaterial === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveMaterial(filter)}
                      className="text-xs"
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body">
                  Process / Finish
                </p>
                <div className="flex flex-wrap gap-2">
                  {processFilters.map((filter) => (
                    <Button
                      key={filter}
                      variant={activeProcess === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveProcess(filter)}
                      className="text-xs"
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMaterials.map((material, index) => (
                <motion.div
                  key={material.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMaterial(material)}
                >
                  <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-aged-brass/50 transition-all hover:shadow-lg">
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={material.image.src}
                        alt={material.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                        <div className="flex gap-3">
                          <Button variant="secondary" size="sm">
                            <ZoomIn className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          {material.has3D && (
                            <Button variant="secondary" size="sm">
                              <RotateCw className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                      {material.has3D && (
                        <div className="absolute top-3 right-3 bg-aged-brass text-primary-foreground text-xs px-2 py-1 rounded font-body">
                          3D View
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs uppercase tracking-wider text-aged-brass font-medium font-body">
                          {material.material}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground font-body">
                          {material.weight}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {material.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body line-clamp-2">
                        {material.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-4">
                        {material.process.map((p) => (
                          <span
                            key={p}
                            className="text-xs bg-muted px-2 py-1 rounded font-body"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredMaterials.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-body">
                  No materials match your current filters. Try adjusting your selection.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Material Detail Modal */}
        {selectedMaterial && (
          <MaterialDetail
            material={selectedMaterial}
            onClose={() => setSelectedMaterial(null)}
          />
        )}

        {/* Sample Request CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-semibold mb-4">
              Need Physical Samples?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto font-body">
              Request a material sample kit to experience our quality firsthand. 
              Includes card stock swatches, wood finishes, and finish examples.
            </p>
            <Button variant="gold" size="lg">
              Order Sample Kit
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Materials;
