import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ChevronRight, 
  ChevronLeft, 
  Layers, 
  Grid3X3, 
  Box, 
  Check,
  AlertCircle
} from "lucide-react";

const gameTypes = [
  { id: "card", label: "Card Game", icon: Layers, description: "Trading cards, deck builders, party games" },
  { id: "board", label: "Board Game", icon: Grid3X3, description: "Strategy games with boards, tiles, tokens" },
  { id: "miniature", label: "Miniature Game", icon: Box, description: "Games featuring detailed miniatures" },
];

const quantityRanges = [
  { id: "500-1000", label: "500-1,000", moq: "MOQ for most components" },
  { id: "1000-3000", label: "1,000-3,000", moq: "Best price-quality balance" },
  { id: "3000-5000", label: "3,000-5,000", moq: "Volume discounts apply" },
  { id: "5000+", label: "5,000+", moq: "Maximum cost savings" },
];

const components = [
  { id: "cards", label: "Playing Cards", category: "Cards" },
  { id: "cardboard", label: "Cardboard Tokens", category: "Cards" },
  { id: "gameboard", label: "Game Board", category: "Board" },
  { id: "dice", label: "Custom Dice", category: "Accessories" },
  { id: "meeples", label: "Wooden Meeples", category: "Wooden" },
  { id: "cubes", label: "Resource Cubes", category: "Wooden" },
  { id: "miniatures", label: "Plastic Miniatures", category: "Plastic" },
  { id: "standees", label: "Standees", category: "Cardboard" },
  { id: "box", label: "Game Box", category: "Packaging" },
  { id: "insert", label: "Box Insert", category: "Packaging" },
  { id: "rulebook", label: "Rulebook", category: "Print" },
  { id: "sleeves", label: "Card Sleeves", category: "Accessories" },
];

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    gameType: "",
    quantity: "",
    components: [] as string[],
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const totalSteps = 4;

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleComponent = (componentId: string) => {
    setFormData(prev => ({
      ...prev,
      components: prev.components.includes(componentId)
        ? prev.components.filter(c => c !== componentId)
        : [...prev.components, componentId]
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.gameType !== "";
      case 2: return formData.quantity !== "";
      case 3: return formData.components.length > 0;
      case 4: return formData.name !== "" && formData.email !== "";
      default: return false;
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background">
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
                Request a Quote
              </h1>
              <p className="text-lg text-muted-foreground font-body">
                Tell us about your project and receive a detailed quote within 24-48 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Bar */}
        <div className="sticky top-20 bg-background z-40 border-b border-border py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold transition-colors ${
                      step < currentStep
                        ? "bg-aged-brass text-primary-foreground"
                        : step === currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step < currentStep ? <Check className="w-5 h-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`hidden sm:block w-16 md:w-24 h-1 mx-2 rounded ${
                        step < currentStep ? "bg-aged-brass" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between max-w-2xl mx-auto mt-2">
              <span className="text-xs font-body text-muted-foreground">Game Type</span>
              <span className="text-xs font-body text-muted-foreground">Quantity</span>
              <span className="text-xs font-body text-muted-foreground">Components</span>
              <span className="text-xs font-body text-muted-foreground">Contact</span>
            </div>
          </div>
        </div>

        {/* Form Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                {/* Step 1: Game Type */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                      What type of game are you creating?
                    </h2>
                    <p className="text-muted-foreground font-body mb-8">
                      Select the primary category that best describes your game.
                    </p>
                    <div className="grid gap-4">
                      {gameTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => updateFormData("gameType", type.id)}
                          className={`flex items-center gap-6 p-6 rounded-lg border-2 transition-all text-left ${
                            formData.gameType === type.id
                              ? "border-aged-brass bg-aged-brass/5"
                              : "border-border hover:border-aged-brass/50"
                          }`}
                        >
                          <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                            formData.gameType === type.id ? "bg-aged-brass/20" : "bg-muted"
                          }`}>
                            <type.icon className={`w-7 h-7 ${
                              formData.gameType === type.id ? "text-aged-brass" : "text-muted-foreground"
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              {type.label}
                            </h3>
                            <p className="text-sm text-muted-foreground font-body">
                              {type.description}
                            </p>
                          </div>
                          {formData.gameType === type.id && (
                            <Check className="w-6 h-6 text-aged-brass" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Quantity */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Estimated Production Quantity
                    </h2>
                    <p className="text-muted-foreground font-body mb-8">
                      Select your target quantity. This helps us provide accurate pricing.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {quantityRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => updateFormData("quantity", range.id)}
                          className={`p-6 rounded-lg border-2 transition-all text-left ${
                            formData.quantity === range.id
                              ? "border-aged-brass bg-aged-brass/5"
                              : "border-border hover:border-aged-brass/50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-display text-xl font-semibold text-foreground">
                              {range.label}
                            </h3>
                            {formData.quantity === range.id && (
                              <Check className="w-5 h-5 text-aged-brass" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground font-body">
                            {range.moq}
                          </p>
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg flex gap-3">
                      <AlertCircle className="w-5 h-5 text-aged-brass flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground font-body">
                        <strong className="text-foreground">MOQ Note:</strong> Minimum order quantities vary by component. 
                        Standard cards start at 500 units, while custom miniatures typically require 1,000+.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Components */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Select Core Components
                    </h2>
                    <p className="text-muted-foreground font-body mb-8">
                      Choose all the components your game will need.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {components.map((component) => (
                        <button
                          key={component.id}
                          onClick={() => toggleComponent(component.id)}
                          className={`flex items-center gap-3 p-4 rounded-lg border transition-all text-left ${
                            formData.components.includes(component.id)
                              ? "border-aged-brass bg-aged-brass/5"
                              : "border-border hover:border-aged-brass/50"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            formData.components.includes(component.id)
                              ? "border-aged-brass bg-aged-brass"
                              : "border-muted-foreground"
                          }`}>
                            {formData.components.includes(component.id) && (
                              <Check className="w-3 h-3 text-primary-foreground" />
                            )}
                          </div>
                          <div>
                            <p className="font-body text-sm font-medium text-foreground">
                              {component.label}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {component.category}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground font-body">
                      Selected: {formData.components.length} component{formData.components.length !== 1 ? "s" : ""}
                    </p>
                  </motion.div>
                )}

                {/* Step 4: Contact Info */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Your Contact Information
                    </h2>
                    <p className="text-muted-foreground font-body mb-8">
                      We'll send your detailed quote to this email address.
                    </p>
                    <div className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => updateFormData("name", e.target.value)}
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Publisher Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => updateFormData("company", e.target.value)}
                          placeholder="Your company name (optional)"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Details</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => updateFormData("message", e.target.value)}
                          placeholder="Tell us more about your project: special requirements, timeline, reference games..."
                          rows={4}
                        />
                      </div>
                      <div className="flex items-start gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                          I agree to receive quote information and occasional updates from Oakheart. 
                          We respect your privacy and never share your data.
                        </Label>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-12 pt-8 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                {currentStep < totalSteps ? (
                  <Button
                    variant="hero"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    disabled={!canProceed()}
                  >
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    variant="hero"
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                  >
                    Submit Quote Request
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
