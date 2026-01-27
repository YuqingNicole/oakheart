import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Section, Breadcrumb } from '../layout';
import {
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  InfoBox,
  StepCard,
  FaqAccordion,
} from '../ui';
import { TocItem, StepCard as StepCardType, FaqItem } from '../../types';

// ============ Types ============
interface GuidePageProps {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  subtitle: string;
  meta: {
    readTime: string;
    updated: string;
    author: string;
  };
  toc: TocItem[];
  children: React.ReactNode;
}

// ============ Styles ============
const GuideHero = styled.div`
  padding: calc(60px + var(--space-2xl)) 0 var(--space-xl);
  background: linear-gradient(180deg, var(--gold-pale) 0%, var(--cream) 100%);
`;

const GuideHeroContainer = styled(Container)`
  max-width: 900px;
`;

const GuideMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-top: var(--space-md);
  font-size: 0.9rem;
  color: var(--stone);
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }
`;

const GuideLayout = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: var(--space-xl);
  padding: var(--space-xl) 0 var(--space-2xl);
  max-width: 1100px;
  margin: 0 auto;
  padding-left: var(--space-lg);
  padding-right: var(--space-lg);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

// ============ TOC Styles ============
const TocWrapper = styled.aside`
  position: sticky;
  top: 80px;
  align-self: start;

  @media (max-width: 1024px) {
    position: static;
    margin-bottom: var(--space-lg);
  }
`;

const TocTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--oak-deep);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 2px solid var(--gold-warm);
`;

const TocList = styled.ul`
  list-style: none;
`;

const TocLink = styled.a<{ $active: boolean }>`
  display: block;
  padding: var(--space-xs) var(--space-sm);
  font-size: 0.9rem;
  color: ${({ $active }) => ($active ? 'var(--oak-deep)' : 'var(--stone)')};
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  border-left: 2px solid ${({ $active }) => ($active ? 'var(--gold-warm)' : 'transparent')};
  background: ${({ $active }) => ($active ? 'var(--gold-pale)' : 'transparent')};
  font-weight: ${({ $active }) => ($active ? '600' : '400')};

  &:hover {
    background: var(--gold-pale);
    color: var(--oak-deep);
    border-left-color: var(--gold-warm);
  }
`;

// ============ Content Styles ============
const GuideContent = styled.article`
  max-width: 720px;

  h2 {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--oak-deep);
    margin-top: var(--space-xl);
    margin-bottom: var(--space-md);
    padding-top: var(--space-md);
    border-top: 1px solid var(--mist);

    &:first-child {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
    }
  }

  h3 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--oak-forest);
    margin-top: var(--space-lg);
    margin-bottom: var(--space-sm);
  }

  p {
    margin-bottom: var(--space-md);
    color: var(--graphite);
    line-height: 1.8;
  }

  ul,
  ol {
    margin-bottom: var(--space-md);
    padding-left: var(--space-lg);
  }

  li {
    margin-bottom: var(--space-xs);
    color: var(--graphite);
    line-height: 1.7;
  }

  strong {
    color: var(--charcoal);
    font-weight: 600;
  }
`;

// ============ Component ============
export const GuidePage: React.FC<GuidePageProps> = ({
  breadcrumbs,
  title,
  subtitle,
  meta,
  toc,
  children,
}) => {
  const [activeSection, setActiveSection] = useState(toc[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <GuideHero>
        <GuideHeroContainer>
          <Breadcrumb items={breadcrumbs} />
          <SectionLabel>Complete Guide</SectionLabel>
          <SectionTitle as="h1">{title}</SectionTitle>
          <SectionSubtitle>{subtitle}</SectionSubtitle>
          <GuideMeta>
            <span>📖 {meta.readTime}</span>
            <span>📅 {meta.updated}</span>
            <span>👤 {meta.author}</span>
          </GuideMeta>
        </GuideHeroContainer>
      </GuideHero>

      <GuideLayout>
        <TocWrapper>
          <TocTitle>Contents</TocTitle>
          <TocList>
            {toc.map((item) => (
              <li key={item.id}>
                <TocLink
                  href={`#${item.id}`}
                  $active={activeSection === item.id}
                  onClick={(e) => handleTocClick(e, item.id)}
                >
                  {item.label}
                </TocLink>
              </li>
            ))}
          </TocList>
        </TocWrapper>

        <GuideContent>{children}</GuideContent>
      </GuideLayout>
    </>
  );
};

// Re-export components for use in guide content
export { InfoBox, StepCard, FaqAccordion };
export type { StepCardType, FaqItem };

export default GuidePage;
