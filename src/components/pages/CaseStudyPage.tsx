import React from 'react';
import styled from 'styled-components';
import { Container, Section } from '../layout';
import { Button, SectionTitle, Testimonial as TestimonialComponent } from '../ui';
import { CaseStat, Testimonial } from '../../types';

// ============ Types ============
interface CaseStudyPageProps {
  label: string;
  title: React.ReactNode;
  heroImage: React.ReactNode;
  stats: CaseStat[];
  overview: React.ReactNode;
  challenges: string[];
  solutions: string[];
  process: React.ReactNode;
  testimonial: Testimonial;
  results: React.ReactNode;
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

// ============ Hero Styles ============
const CaseHero = styled.div`
  padding: calc(60px + var(--space-2xl)) 0 var(--space-2xl);
  background: linear-gradient(180deg, var(--oak-deep) 60%, var(--cream) 60%);
  position: relative;
`;

const CaseHeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const CaseLabel = styled.span`
  display: inline-block;
  background: rgba(212, 163, 115, 0.2);
  color: var(--gold-warm);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: var(--space-xs) var(--space-md);
  border-radius: 100px;
  margin-bottom: var(--space-lg);
`;

const CaseTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  color: var(--cream);
  max-width: 800px;
  margin-bottom: var(--space-lg);
  line-height: 1.2;

  em {
    font-style: italic;
    color: var(--gold-warm);
  }
`;

const CaseHeroImage = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-lg);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  margin-top: var(--space-lg);
`;

// ============ Stats Styles ============
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  padding: var(--space-xl) 0;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: var(--space-md);
`;

const StatValue = styled.div`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--oak-deep);
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: var(--stone);
  margin-top: var(--space-xs);
`;

// ============ Content Styles ============
const CaseContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-lg) var(--space-2xl);
`;

const CaseSection = styled.div`
  margin-bottom: var(--space-xl);

  h2 {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--oak-deep);
    margin-bottom: var(--space-md);
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    &::before {
      content: '';
      width: 4px;
      height: 28px;
      background: var(--gold-warm);
      border-radius: 2px;
    }
  }

  p {
    color: var(--graphite);
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: var(--space-md);
  }
`;

// ============ Challenge/Solution Styles ============
const ChallengeSolutionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  margin: var(--space-lg) 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChallengeBox = styled.div`
  padding: var(--space-lg);
  border-radius: 12px;
  background: #fef2f2;
  border-left: 4px solid #ef4444;

  h3 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: #dc2626;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: var(--space-xs) 0;
    font-size: 0.95rem;
    color: var(--graphite);
    display: flex;
    align-items: flex-start;
    gap: var(--space-xs);

    &::before {
      content: '❌';
      flex-shrink: 0;
    }
  }
`;

const SolutionBox = styled.div`
  padding: var(--space-lg);
  border-radius: 12px;
  background: #f0fdf4;
  border-left: 4px solid var(--oak-forest);

  h3 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: var(--oak-forest);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: var(--space-xs) 0;
    font-size: 0.95rem;
    color: var(--graphite);
    display: flex;
    align-items: flex-start;
    gap: var(--space-xs);

    &::before {
      content: '✓';
      color: var(--oak-forest);
      font-weight: 600;
      flex-shrink: 0;
    }
  }
`;

// ============ CTA Styles ============
const CaseCTA = styled.div`
  background: var(--gold-pale);
  border-radius: 16px;
  padding: var(--space-xl);
  text-align: center;

  h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--oak-deep);
    margin-bottom: var(--space-sm);
  }

  p {
    color: var(--stone);
    margin-bottom: var(--space-lg);
  }
`;

// ============ Component ============
export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  label,
  title,
  heroImage,
  stats,
  overview,
  challenges,
  solutions,
  process,
  testimonial,
  results,
  cta,
}) => {
  return (
    <>
      {/* Hero */}
      <CaseHero>
        <CaseHeroContent>
          <CaseLabel>{label}</CaseLabel>
          <CaseTitle>{title}</CaseTitle>
          <CaseHeroImage>{heroImage}</CaseHeroImage>
        </CaseHeroContent>
      </CaseHero>

      {/* Stats */}
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatItem key={index}>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </StatsGrid>

      {/* Content */}
      <CaseContent>
        <CaseSection>
          <h2>Project Overview</h2>
          {overview}
        </CaseSection>

        <CaseSection>
          <h2>The Challenge</h2>
          <ChallengeSolutionGrid>
            <ChallengeBox>
              <h3>Challenges</h3>
              <ul>
                {challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </ChallengeBox>
            <SolutionBox>
              <h3>Our Solutions</h3>
              <ul>
                {solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </SolutionBox>
          </ChallengeSolutionGrid>
        </CaseSection>

        <CaseSection>
          <h2>The Process</h2>
          {process}
        </CaseSection>

        <TestimonialComponent {...testimonial} />

        <CaseSection>
          <h2>The Results</h2>
          {results}
        </CaseSection>

        <CaseCTA>
          <h3>{cta.title}</h3>
          <p>{cta.description}</p>
          <Button variant="primary" href={cta.buttonHref}>
            {cta.buttonLabel}
          </Button>
        </CaseCTA>
      </CaseContent>
    </>
  );
};

export default CaseStudyPage;
