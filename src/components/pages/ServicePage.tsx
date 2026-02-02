import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Section } from '../layout';
import { Button, Card, SectionLabel, SectionTitle, SectionSubtitle } from '../ui';
import { StatItem, SegmentCard as SegmentCardType, Capability } from '../../types';

// ============ Types ============
interface ServicePageProps {
  hero: {
    badge?: string;
    title: React.ReactNode;
    description: string;
    stats: StatItem[];
  };
  segments: SegmentCardType[];
  capabilities: Capability[];
  cta: {
    title: string;
    description: string;
    primaryButton: { label: string; href: string };
    secondaryButton?: { label: string; href: string };
  };
}

// ============ Animations ============
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ============ Hero Styles ============
const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(165deg, var(--oak-deep) 0%, #0D2818 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(ellipse at 20% 80%, rgba(212, 163, 115, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(82, 121, 111, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const HeroText = styled.div`
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) both;
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  background: rgba(212, 163, 115, 0.15);
  border: 1px solid rgba(212, 163, 115, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  margin-bottom: var(--space-lg);

  span {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--gold-warm);
    letter-spacing: 0.05em;
  }
`;

const HeroTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--cream);
  line-height: 1.1;
  margin-bottom: var(--space-md);

  em {
    font-style: italic;
    color: var(--gold-warm);
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: var(--space-lg);
  max-width: 500px;
  line-height: 1.8;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
`;

const HeroStats = styled.ul`
  display: flex;
  gap: var(--space-xl);
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-md);
  }
`;

const Stat = styled.li<{ $delay: number }>`
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const StatValue = styled.div`
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gold-warm);
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: var(--space-xs);
`;

const HeroVisual = styled.div`
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeroCard = styled.div`
  background: linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: var(--space-lg);
`;

const HeroCardLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold-warm);
  margin-bottom: var(--space-md);
`;

const ComponentGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
`;

const ComponentItem = styled.li`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: var(--space-sm);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(212, 163, 115, 0.15);
    transform: translateY(-4px);
  }
`;

const ComponentIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto var(--space-xs);
  background: var(--oak-forest);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const ComponentName = styled.div`
  font-size: 0.8rem;
  color: var(--cream);
  font-weight: 500;
`;

// ============ Segments Styles ============
const SegmentsHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-xl);
`;

const SegmentCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SegmentCardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const SegmentIcon = styled.div`
  width: 64px;
  height: 64px;
  background: var(--gold-pale);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  margin-bottom: var(--space-md);
`;

const SegmentTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--oak-deep);
  margin-bottom: var(--space-sm);
`;

const SegmentDescription = styled.p`
  color: var(--stone);
  font-size: 0.95rem;
  margin-bottom: var(--space-md);
`;

const SegmentFeatures = styled.ul`
  list-style: none;
  flex-grow: 1;
`;

const SegmentFeature = styled.li`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.9rem;
  color: var(--graphite);
  padding: var(--space-xs) 0;

  &::before {
    content: '✓';
    color: var(--oak-forest);
    font-weight: 600;
  }
`;

const SegmentLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  margin-top: var(--space-md);
  color: var(--oak-deep);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  transition: gap 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    gap: var(--space-sm);
  }
`;

// ============ Capabilities Styles ============
const CapabilitiesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-top: var(--space-xl);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CapabilityItem = styled.li`
  background: white;
  padding: var(--space-md);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(27, 67, 50, 0.1);
  }
`;

const CapabilityIcon = styled.div`
  font-size: 2rem;
  margin-bottom: var(--space-sm);
`;

const CapabilityName = styled.div`
  font-weight: 600;
  color: var(--oak-deep);
  font-size: 0.95rem;
`;

// ============ CTA Styles ============
const CTASection = styled(Section)`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(212, 163, 115, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const CTAContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--cream);
  margin-bottom: var(--space-md);
`;

const CTADescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: var(--space-lg);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
`;

// ============ Component ============
const components: Capability[] = [
  { icon: '🃏', name: 'Cards' },
  { icon: '📦', name: 'Boxes' },
  { icon: '🗺️', name: 'Boards' },
  { icon: '🎲', name: 'Dice' },
  { icon: '♟️', name: 'Meeples' },
  { icon: '🪙', name: 'Tokens' },
];

export const ServicePage: React.FC<ServicePageProps> = ({
  hero,
  segments,
  capabilities,
  cta,
}) => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              {hero.badge && (
                <HeroBadge>
                  <span>{hero.badge}</span>
                </HeroBadge>
              )}
              <HeroTitle>{hero.title}</HeroTitle>
              <HeroDescription>{hero.description}</HeroDescription>
              <HeroButtons>
                <Button variant="gold" href="/quote">
                  Get Free Quote
                </Button>
                <Button variant="ghost" href="#capabilities">
                  View Capabilities
                </Button>
              </HeroButtons>
              <HeroStats>
                {hero.stats.map((stat, index) => (
                  <Stat key={index} $delay={0.2 + index * 0.1}>
                    <StatValue>{stat.value}</StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </Stat>
                ))}
              </HeroStats>
            </HeroText>
            <HeroVisual>
              <HeroCard>
                <HeroCardLabel>What We Manufacture</HeroCardLabel>
                <ComponentGrid>
                  {components.map((comp, index) => (
                    <ComponentItem key={index}>
                      <ComponentIcon>{comp.icon}</ComponentIcon>
                      <ComponentName>{comp.name}</ComponentName>
                    </ComponentItem>
                  ))}
                </ComponentGrid>
              </HeroCard>
            </HeroVisual>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Segments Section */}
      <Section background="cream" padding="lg">
        <Container>
          <SegmentsHeader>
            <SectionLabel>Who We Serve</SectionLabel>
            <SectionTitle>Manufacturing Solutions for Every Creator</SectionTitle>
            <SectionSubtitle style={{ margin: '0 auto' }}>
              Whether it's your first game or your fiftieth, we have the expertise
              and flexibility to bring your vision to life.
            </SectionSubtitle>
          </SegmentsHeader>
          <SegmentCards>
            {segments.map((segment, index) => (
              <SegmentCardWrapper key={index} hover as="li">
                <SegmentIcon>{segment.icon}</SegmentIcon>
                <SegmentTitle>{segment.title}</SegmentTitle>
                <SegmentDescription>{segment.description}</SegmentDescription>
                <SegmentFeatures>
                  {segment.features.map((feature, fIndex) => (
                    <SegmentFeature key={fIndex}>{feature}</SegmentFeature>
                  ))}
                </SegmentFeatures>
                <SegmentLink href={segment.href}>Learn More →</SegmentLink>
              </SegmentCardWrapper>
            ))}
          </SegmentCards>
        </Container>
      </Section>

      {/* Capabilities Section */}
      <Section background="mist" padding="lg" id="capabilities">
        <Container>
          <SectionLabel>Our Capabilities</SectionLabel>
          <SectionTitle>Everything You Need, Under One Roof</SectionTitle>
          <CapabilitiesGrid>
            {capabilities.map((capability, index) => (
              <CapabilityItem key={index}>
                <CapabilityIcon>{capability.icon}</CapabilityIcon>
                <CapabilityName>{capability.name}</CapabilityName>
              </CapabilityItem>
            ))}
          </CapabilitiesGrid>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection background="dark" padding="lg">
        <Container>
          <CTAContent>
            <CTATitle>{cta.title}</CTATitle>
            <CTADescription>{cta.description}</CTADescription>
            <CTAButtons>
              <Button variant="gold" href={cta.primaryButton.href}>
                {cta.primaryButton.label}
              </Button>
              {cta.secondaryButton && (
                <Button variant="ghost" href={cta.secondaryButton.href}>
                  {cta.secondaryButton.label}
                </Button>
              )}
            </CTAButtons>
          </CTAContent>
        </Container>
      </CTASection>
    </>
  );
};

export default ServicePage;
