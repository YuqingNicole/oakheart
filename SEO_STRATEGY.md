# Oakheart SEO Strategy & Recommendations

## 1. Core Keyword Strategy

Based on the content analysis and business domain (Premium Board Game Manufacturing), we target the following keyword clusters:

### Primary Keywords (High Intent)
- **"Board Game Manufacturing"**: The core service.
- **"Custom Board Game Printing"**: Direct service search.
- **"Tabletop Game Production"**: Industry-standard term.
- **"Board Game Manufacturer"**: Vendor search.

### Secondary Keywords (Niche/Specific)
- **"Eco-friendly board game manufacturing"**: Differentiator (aligned with `eco-friendly` page).
- **"Small batch board game printing"**: Targets indie creators/Kickstarter.
- **"Card Game Manufacturer"**: Specific product type (aligned with `components/cards`).
- **"Board Game Prototype"**: Early-stage funnel.

### Long-tail & Content Keywords (Informational)
- "How to manufacture a board game" (Targeted by `manufacturing-101`).
- "Board game production cost" (Targeted by `cost-calculator`).
- "Kickstarter board game fulfillment" (Targeted by `kickstarter-masterclass`).

## 2. Component Strategy

We have implemented a modular SEO component architecture to ensure consistency and scalability:

### `SeoHead` (Centralized Metadata)
- **Function**: Manages Title, Description, Open Graph, Twitter Cards, and Canonical URLs.
- **Enhancement**: Auto-generates JSON-LD Structured Data (Organization, Article).
- **Usage**: Every page wraps content with `<SeoHead />`.

### `SeoBreadcrumbs` (Navigation & Schema)
- **Function**: Provides visual navigation path and generates `BreadcrumbList` schema.
- **Benefit**: Enhanced SERP display (rich snippets).

### `ContentSection` (Semantic Structure)
- **Function**: Wraps rich text content (blogs, guides) in semantic HTML (`<article>`, `<section>`, `<h2>`, etc.).
- **Benefit**: Improves readability for search engines and accessibility.

### `StickyCTA` (Conversion Optimization)
- **Function**: Persistent "Request a Quote" button on long-form content.
- **Benefit**: Captures traffic from informational pages (blogs) into the sales funnel.

## 3. Content Architecture (Hub & Spoke)

We structure content to build topical authority:

### Hubs (Pillar Content)
- **Manufacturing Guide** (`/guides/manufacturing-101`): Comprehensive resource.
- **Kickstarter Masterclass** (`/guides/kickstarter-masterclass`): Targeting the crowdfunding audience.
- **Game Design 101** (`/guides/board-game-design-101`): Early-funnel acquisition.

### Spokes (Supporting Content)
- **Blog Posts** (`/blog/*`): Timely topics, industry news, specific deep dives.
- **Case Studies** (`/case-studies/*`): Proof of expertise (e.g., Realm of Shadows).
- **Features** (`/features/*`): Specific capabilities (Eco-friendly).

### Programmatic SEO Engine
- **Publisher Database** (`/publishers/*`): 
    - Scalable generation of pages for game publishers.
    - Targets searches like "[Publisher Name] board game manufacturer" or "[Publisher Name] production quality".
    - **Status**: Implemented with data structure and dynamic routing.

## 4. Technical SEO Checklist

- [x] **Sitemap**: Auto-generated via `next-sitemap`.
- [x] **Robots.txt**: Standard configuration.
- [x] **Canonical URLs**: Self-referencing to prevent duplicate content issues.
- [x] **Structured Data**: JSON-LD implemented for Organization and Articles.
- [x] **Performance**: Next.js SSG (Static Site Generation) ensures fast TTFB (Time to First Byte).
- [x] **Mobile Friendly**: Responsive design with Tailwind CSS.

## 5. Next Steps & Recommendations

1.  **Backlink Building**: leverage the "Publisher Database" to reach out to publishers for backlinks.
2.  **Content Expansion**: Continue converting internal resources into Blog posts.
3.  **Tool Development**: Enhance the Cost Calculator with more precise logic to capture leads (e.g., "Email me this estimate").
4.  **Internal Linking**: Ensure all Blog posts link back to relevant Service pages or Guides.
