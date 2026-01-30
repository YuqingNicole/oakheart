import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children?: React.ReactNode;
  html?: string;
  className?: string;
}

export function ContentSection({ children, html, className }: ContentSectionProps) {
  return (
    <article 
      className={cn(
        "prose prose-stone prose-lg max-w-none mx-auto",
        // Typography overrides for brand consistency
        "prose-headings:font-display prose-headings:font-semibold prose-headings:text-primary",
        "prose-h1:text-4xl prose-h1:mb-8",
        "prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6",
        "prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4",
        "prose-p:font-body prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6",
        "prose-a:text-aged-brass prose-a:no-underline hover:prose-a:underline prose-a:font-medium",
        "prose-strong:text-foreground prose-strong:font-semibold",
        "prose-ul:list-disc prose-ul:pl-6 prose-li:text-muted-foreground prose-li:font-body prose-li:marker:text-aged-brass",
        "prose-ol:list-decimal prose-ol:pl-6 prose-li:text-muted-foreground prose-li:font-body prose-li:marker:text-aged-brass",
        "prose-blockquote:border-l-4 prose-blockquote:border-aged-brass prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground",
        className
      )}
    >
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        children
      )}
    </article>
  );
}
