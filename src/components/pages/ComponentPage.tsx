import React from 'react';
import styled from 'styled-components';
import { Container, Section, Breadcrumb } from '../layout';
import { Button, SectionLabel, SectionTitle, SectionSubtitle, PricingCard } from '../ui';
import { SpecCard, MaterialCard, PricingTier } from '../../types';

// ============ Types ============
interface ComponentPageProps {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  description: string;
  heroVisual: React.ReactNode;
  specs: SpecCard[];
  materials: MaterialCard[];
  pricing: PricingTier[];
}

// ============ Hero Styles ============
const ComponentHero = styled.div`
  padding: calc(60px + var(--space-xl)) 0 var(--space-xl);
  background: var(--oak-deep);
  color: var(--cream);
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const HeroTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  margin-bottom: var(--space-md);
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.85;
  margin-bottom: var(--space-lg);
  line-height: 1.7;
`;

const HeroVisual = styled.div`
  background: linear-gradient(135deg, var(--oak-forest) 0%, var(--oak-sage) 100%);
  border-radius: 16px;
  padding: var(--space-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  @media (max-width: 1024px) {
    min-height: 200px;
  }
`;

// ============ Specs Styles ============
const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-lg);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SpecCardWrapper = styled.div`
  background: var(--mist);
  border-radius: 12px;
  padding: var(--space-lg);
`;

const SpecCardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--oak-deep);
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`;

const SpecList = styled.ul`
  list-style: none;
`;

const SpecItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: var(--space-xs) 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }
`;

const SpecLabel = styled.span`
  color: var(--stone);
`;

const SpecValue = styled.span`
  font-weight: 600;
  color: var(--charcoal);
`;

// ============ Materials Styles ============
const MaterialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-top: var(--space-lg);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const MaterialCardWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-md);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(27, 67, 50, 0.1);
  }
`;

const MaterialSwatch = styled.div<{ $color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto var(--space-sm);
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: ${({ $color }) => $color};
`;

const MaterialName = styled.h4`
  font-weight: 600;
  color: var(--oak-deep);
  margin-bottom: var(--space-xs);
`;

const MaterialDescription = styled.p`
  font-size: 0.85rem;
  color: var(--stone);
  margin: 0;
`;

// ============ Pricing Styles ============
const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-lg);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

// ============ Component ============
export const ComponentPage: React.FC<ComponentPageProps> = ({
  breadcrumbs,
  title,
  description,
  heroVisual,
  specs,
  materials,
  pricing,
}) => {
  return (
    <>
      {/* Hero */}
      <ComponentHero>
        <Container>
          <HeroGrid>
            <div>
              <Breadcrumb items={breadcrumbs} light />
              <HeroTitle>{title}</HeroTitle>
              <HeroDescription>{description}</HeroDescription>
              <Button variant="gold" href="/quote">
                Get Quote
              </Button>
            </div>
            <HeroVisual>{heroVisual}</HeroVisual>
          </HeroGrid>
        </Container>
      </ComponentHero>

      {/* Specs */}
      <Section background="white" padding="lg">
        <Container>
          <SectionLabel>Specifications</SectionLabel>
          <SectionTitle>Options & Sizes</SectionTitle>
          <SpecsGrid>
            {specs.map((spec, index) => (
              <SpecCardWrapper key={index}>
                <SpecCardTitle>
                  <span>{spec.icon}</span>
                  {spec.title}
                </SpecCardTitle>
                <SpecList>
                  {spec.specs.map((item, sIndex) => (
                    <SpecItem key={sIndex}>
                      <SpecLabel>{item.label}</SpecLabel>
                      <SpecValue>{item.value}</SpecValue>
                    </SpecItem>
                  ))}
                </SpecList>
              </SpecCardWrapper>
            ))}
          </SpecsGrid>
        </Container>
      </Section>

      {/* Materials */}
      <Section background="gold" padding="lg">
        <Container>
          <SectionLabel>Materials</SectionLabel>
          <SectionTitle>Stock Options</SectionTitle>
          <MaterialsGrid>
            {materials.map((material, index) => (
              <MaterialCardWrapper key={index}>
                <MaterialSwatch $color={material.color} />
                <MaterialName>{material.name}</MaterialName>
                <MaterialDescription>{material.description}</MaterialDescription>
              </MaterialCardWrapper>
            ))}
          </MaterialsGrid>
        </Container>
      </Section>

      {/* Pricing */}
      <Section background="white" padding="lg">
        <Container>
          <SectionLabel>Pricing</SectionLabel>
          <SectionTitle>Pricing Tiers</SectionTitle>
          <SectionSubtitle>
            Price per unit. Volume discounts available.
          </SectionSubtitle>
          <PricingGrid>
            {pricing.map((tier, index) => (
              <PricingCard key={index} {...tier} />
            ))}
          </PricingGrid>
        </Container>
      </Section>
    </>
  );
};

export default ComponentPage;
