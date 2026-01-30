import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface SeoFaqProps {
  items: FaqItem[];
  title?: string;
  description?: string;
}

export function SeoFaq({ 
  items, 
  title = "Frequently Asked Questions",
  description = "Common questions about our manufacturing process."
}: SeoFaqProps) {
  // Generate JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-12 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            {description}
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-4 data-[state=open]:border-aged-brass/50 data-[state=open]:bg-aged-brass/5 transition-all duration-300"
            >
              <AccordionTrigger className="font-display text-lg text-foreground hover:text-aged-brass hover:no-underline text-left py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base text-muted-foreground leading-relaxed pb-4">
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
