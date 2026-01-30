import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { ContentSection } from "@/components/seo/ContentSection";

export default function Page() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* 1. 面包屑 */}
        <SeoBreadcrumbs 
          items={[
            { label: "Components", href: "/components" },
            { label: "Wood", href: "/components/wood" }
          ]} 
        />
        
        {/* 2. 内容文章 */}
        <ContentSection>
          <h1>Why Choose Custom Wood Components?</h1>
          <p>Wooden meeples and tokens add a tactile premium feel...</p>
        </ContentSection>

        {/* 3. FAQ */}
        <SeoFaq 
          items={[
            { question: "What wood types do you use?", answer: "We use FSC-certified maple and birch..." },
            { question: "What is the MOQ?", answer: "For custom wood shapes, MOQ starts at 1,000 units." }
          ]} 
        />
      </div>
    </>
  );
}