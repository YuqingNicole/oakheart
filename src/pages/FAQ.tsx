import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/Button";

const faqCategories = [
  {
    title: "Ordering & Pricing",
    faqs: [
      {
        question: "What is the minimum order quantity (MOQ)?",
        answer: "Our standard MOQ is 1,000 units for most products. However, we offer flexible options for smaller runs starting at 500 units with adjusted pricing. For Kickstarter projects, we can work with lower quantities based on campaign needs.",
      },
      {
        question: "How do I get a quote for my project?",
        answer: "Simply click the 'Request Quote' button and fill out our detailed form with your specifications. Our team will review your requirements and provide a comprehensive quote within 2-3 business days.",
      },
      {
        question: "What payment terms do you offer?",
        answer: "We typically require a 30% deposit to begin production, with the remaining 70% due before shipping. For established publishers, we offer NET 30 terms. We accept bank transfers, credit cards, and PayPal.",
      },
      {
        question: "Do you offer samples before full production?",
        answer: "Yes! We provide pre-production samples for approval before beginning mass production. Sample costs vary based on complexity and are often credited toward your final order.",
      },
    ],
  },
  {
    title: "Production & Timeline",
    faqs: [
      {
        question: "How long does production typically take?",
        answer: "Standard production time is 4-8 weeks after sample approval, depending on order complexity and size. Rush orders are available with adjusted pricing. The complete process from initial consultation to delivery typically takes 11-21 weeks.",
      },
      {
        question: "Can you handle Kickstarter fulfillment?",
        answer: "Absolutely! We have extensive experience with Kickstarter projects and offer complete fulfillment services including warehousing, packing, and worldwide shipping to backers.",
      },
      {
        question: "What quality control measures do you have?",
        answer: "Every order undergoes rigorous QC inspection at multiple stages. We check materials upon arrival, inspect during production, and perform final checks before packaging. We're happy to share detailed QC reports.",
      },
      {
        question: "Do you offer eco-friendly materials?",
        answer: "Yes! We offer FSC-certified papers, soy-based inks, recycled materials, and biodegradable packaging options. We can help you make sustainable choices without compromising quality.",
      },
    ],
  },
  {
    title: "Components & Customization",
    faqs: [
      {
        question: "What types of components can you manufacture?",
        answer: "We produce virtually all tabletop game components including cards, game boards, dice, wooden pieces, plastic miniatures, tokens, boxes, inserts, rulebooks, and custom accessories.",
      },
      {
        question: "Can you create custom molds for miniatures?",
        answer: "Yes! We offer custom molding services for plastic and resin miniatures. Mold costs depend on complexity, and we can provide detailed quotes based on your 3D files.",
      },
      {
        question: "What card finishes are available?",
        answer: "We offer multiple finishes including linen, matte, glossy, and spot UV. Our standard card stock is 300gsm with blue core, and we can customize thickness and materials based on your needs.",
      },
      {
        question: "Do you provide design services?",
        answer: "While we focus on manufacturing, we have trusted design partners we can recommend. We also offer file preparation services to ensure your artwork is production-ready.",
      },
    ],
  },
  {
    title: "Shipping & Logistics",
    faqs: [
      {
        question: "Where do you ship?",
        answer: "We ship worldwide! We have experience delivering to North America, Europe, Asia, Australia, and beyond. We can ship to your warehouse, fulfillment center, or directly to customers.",
      },
      {
        question: "What shipping options are available?",
        answer: "We offer sea freight (most economical), air freight (fastest), and rail options for certain destinations. We handle all export documentation and can arrange customs clearance.",
      },
      {
        question: "Can you store inventory for us?",
        answer: "Yes! We offer warehousing services with flexible terms. This is particularly useful for Kickstarter campaigns or publishers who need gradual fulfillment.",
      },
      {
        question: "How is shipping cost calculated?",
        answer: "Shipping costs depend on order volume, destination, and speed requirements. We provide detailed shipping quotes as part of your overall project estimate.",
      },
    ],
  },
];

const FAQ = () => {
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
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our manufacturing process, pricing, and services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${category.title}-${faqIndex}`}
                        className="bg-card border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground hover:text-aged-brass">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out and we'll get back to you within one business day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="lg">
                Contact Us
              </Button>
              <Button variant="outline-gold" size="lg">
                Request a Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
