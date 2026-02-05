import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface SeoBreadcrumbsProps {
  items: BreadcrumbItemType[];
}

export function SeoBreadcrumbs({ items }: SeoBreadcrumbsProps) {
  // Generate JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://oakheartglobal.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb className="font-body mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <Fragment key={item.label}>
                <BreadcrumbItem>
                  {isLast || !item.href ? (
                    <BreadcrumbPage className="font-medium text-foreground">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link 
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
