import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Calculator, ArrowRight, DollarSign, Info } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CostCalculator() {
  const [quantity, setQuantity] = useState([1000]);
  const [cardCount, setCardCount] = useState([54]);
  const [hasBoard, setHasBoard] = useState(false);
  const [hasMiniatures, setHasMiniatures] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState(0);

  useEffect(() => {
    // Simple estimation logic (for demonstration purposes)
    // Base setup cost
    let cost = 1500;
    
    // Per unit cost calculation
    let unitCost = 0;
    
    // Cards cost (approx $0.05 per card)
    unitCost += cardCount[0] * 0.05;
    
    // Board cost (approx $2.00)
    if (hasBoard) unitCost += 2.00;
    
    // Miniatures cost (approx $0.50 per mini, assuming 10 minis if selected)
    if (hasMiniatures) unitCost += 5.00;
    
    // Box and packaging (approx $1.50)
    unitCost += 1.50;
    
    // Volume discount (10% off for > 2000 units)
    if (quantity[0] > 2000) unitCost *= 0.9;
    
    // Total manufacturing cost
    cost += unitCost * quantity[0];
    
    setEstimatedCost(Math.round(cost));
  }, [quantity, cardCount, hasBoard, hasMiniatures]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatUnitCost = (total: number, qty: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(total / qty);
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Board Game Manufacturing Cost Calculator | Instant Estimate"
        description="Get an instant estimated cost for manufacturing your board game. Adjust quantity, components, and specs to see how they affect your budget."
        keywords="board game cost calculator, manufacturing estimate, print on demand pricing, game production cost"
      />
      
      <Header />
      
      <main className="pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                Manufacturing Cost Calculator
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
                Get a rough estimate for your project in seconds. Note that this is a simplified calculator for budgeting purposes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Calculator Inputs */}
              <Card className="border-2 border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    Project Specs
                  </CardTitle>
                  <CardDescription>
                    Adjust the sliders to match your game design.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Quantity Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-semibold">Quantity</Label>
                      <span className="text-2xl font-bold text-primary">{quantity[0].toLocaleString()} units</span>
                    </div>
                    <Slider
                      value={quantity}
                      onValueChange={setQuantity}
                      min={500}
                      max={10000}
                      step={500}
                      className="py-4"
                    />
                    <p className="text-xs text-muted-foreground">
                      MOQ starts at 500 units. Price per unit decreases as quantity increases.
                    </p>
                  </div>

                  {/* Card Count Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-semibold">Cards per Game</Label>
                      <span className="text-xl font-bold">{cardCount[0]} cards</span>
                    </div>
                    <Slider
                      value={cardCount}
                      onValueChange={setCardCount}
                      min={0}
                      max={300}
                      step={18}
                      className="py-4"
                    />
                  </div>

                  {/* Additional Components */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Additional Components</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant={hasBoard ? "default" : "outline"}
                        onClick={() => setHasBoard(!hasBoard)}
                        className="h-auto py-4 justify-start"
                      >
                        <div className="flex flex-col items-start gap-1 text-left">
                          <span className="font-semibold">Game Board</span>
                          <span className="text-xs opacity-80">Mounted board</span>
                        </div>
                        {hasBoard && <div className="ml-auto text-primary-foreground"><DollarSign className="w-4 h-4" /></div>}
                      </Button>

                      <Button
                        type="button"
                        variant={hasMiniatures ? "default" : "outline"}
                        onClick={() => setHasMiniatures(!hasMiniatures)}
                        className="h-auto py-4 justify-start"
                      >
                        <div className="flex flex-col items-start gap-1 text-left">
                          <span className="font-semibold">Miniatures</span>
                          <span className="text-xs opacity-80">~10 Plastic Minis</span>
                        </div>
                        {hasMiniatures && <div className="ml-auto text-primary-foreground"><DollarSign className="w-4 h-4" /></div>}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Estimate Result */}
              <div className="sticky top-32">
                <Card className="bg-primary text-primary-foreground border-none shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                  
                  <CardHeader>
                    <CardTitle className="text-primary-foreground/90">Estimated Total Cost</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative z-10">
                    <div>
                      <motion.div 
                        key={estimatedCost}
                        initial={{ scale: 0.9, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-5xl font-bold font-display tracking-tight"
                      >
                        {formatCurrency(estimatedCost)}
                      </motion.div>
                      <div className="mt-2 flex items-center gap-2 text-primary-foreground/80">
                        <span className="font-semibold text-lg">{formatUnitCost(estimatedCost, quantity[0])}</span>
                        <span>per unit</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-primary-foreground/70 bg-black/10 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <span>Setup & Tooling</span>
                        <span>Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Manufacturing</span>
                        <span>Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Assembly</span>
                        <span>Included</span>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start text-xs text-primary-foreground/60">
                      <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>This is a rough estimate for budgeting only. Final pricing depends on material choices, artwork, and shipping.</p>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="bg-black/20 p-6">
                    <Button asChild variant="secondary" size="lg" className="w-full font-bold shadow-lg hover:shadow-xl transition-all">
                      <Link href="/quote" className="flex items-center gap-2">
                        Get Exact Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}
