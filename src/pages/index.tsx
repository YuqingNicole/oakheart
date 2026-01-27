import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { SeoHead } from '../components/seo';

const PageWrapper = styled.main`
  min-height: 100vh;
  padding: var(--space-2xl) var(--space-lg);
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--oak-deep);
  margin-bottom: var(--space-md);
`;

const Subtitle = styled.p`
  color: var(--stone);
  font-size: 1.1rem;
  margin-bottom: var(--space-xl);
`;

const TemplateGrid = styled.div`
  display: grid;
  gap: var(--space-md);
`;

const TemplateCard = styled.a`
  display: block;
  background: white;
  border: 1px solid var(--mist);
  border-radius: 12px;
  padding: var(--space-lg);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--gold-warm);
    box-shadow: 0 8px 24px rgba(27, 67, 50, 0.1);
    transform: translateY(-2px);
  }
`;

const TemplateTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--oak-deep);
  margin-bottom: var(--space-xs);
`;

const TemplateDesc = styled.p`
  color: var(--stone);
  font-size: 0.9rem;
  margin-bottom: var(--space-sm);
`;

const TemplateUrl = styled.span`
  font-size: 0.8rem;
  color: var(--gold-warm);
  font-family: monospace;
`;

const templates = [
  {
    title: 'Service Landing Page',
    description: 'Main manufacturing service page with hero, customer segments, capabilities, and CTA',
    url: '/manufacturing',
    href: '/manufacturing',
  },
  {
    title: 'Guide Page',
    description: 'Step-by-step guide with TOC, steps, info boxes, and FAQ accordion',
    url: '/guides/manufacturing-101',
    href: '/guides/manufacturing-101',
  },
  {
    title: 'Component Page',
    description: 'Product component page with specs, materials, and pricing tiers',
    url: '/components/cards',
    href: '/components/cards',
  },
  {
    title: 'Case Study Page',
    description: 'Customer success story with stats, challenge/solution, and testimonial',
    url: '/case-studies/realm-of-shadows',
    href: '/case-studies/realm-of-shadows',
  },
];

export default function Home() {
  return (
    <>
      <SeoHead
        title="SEO Templates"
        description="A collection of SEO-optimized page templates for Oakheart manufacturing services."
        canonicalUrl="/"
      />
      <PageWrapper>
        <Title>Oakheart SEO Templates</Title>
        <Subtitle>
          Click on a template below to preview the page design.
        </Subtitle>
        <TemplateGrid>
          {templates.map((template) => (
            <Link key={template.href} href={template.href} passHref legacyBehavior>
              <TemplateCard>
                <TemplateTitle>{template.title}</TemplateTitle>
                <TemplateDesc>{template.description}</TemplateDesc>
                <TemplateUrl>{template.url}</TemplateUrl>
              </TemplateCard>
            </Link>
          ))}
        </TemplateGrid>
      </PageWrapper>
    </>
  );
}
