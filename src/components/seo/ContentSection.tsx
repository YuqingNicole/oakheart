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
        "prose prose-lg max-w-none mx-auto",
        // Base typography
        "prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground",
        "prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-0",
        "prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border",
        "prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-primary",
        "prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2",
        // Paragraphs
        "prose-p:font-body prose-p:text-foreground/80 prose-p:leading-[1.8] prose-p:mb-5",
        // Links
        "prose-a:text-primary prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80 prose-a:font-medium prose-a:transition-colors",
        // Strong & emphasis
        "prose-strong:text-foreground prose-strong:font-semibold",
        "prose-em:text-foreground/90",
        // Lists
        "prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6",
        "prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6",
        "prose-li:text-foreground/80 prose-li:font-body prose-li:my-2 prose-li:leading-[1.7]",
        // Blockquotes
        "prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-foreground/90 prose-blockquote:my-8",
        // Code
        "prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:bg-muted prose-pre:rounded-lg prose-pre:p-4",
        // Images
        "prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8",
        // Horizontal rule
        "prose-hr:my-12 prose-hr:border-border",
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
