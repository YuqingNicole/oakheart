import React from 'react';
import styled from 'styled-components';
import { CaseStudyPage } from '../components/pages';

// Demo game box visual
const GameBox = styled.div`
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, var(--oak-forest) 0%, var(--oak-deep) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-warm);
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  box-shadow: 0 20px 60px rgba(27, 67, 50, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: perspective(500px) rotateY(-5deg) rotateX(5deg);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: perspective(500px) rotateY(0deg) rotateX(0deg);
  }
`;

/**
 * Example: Case Study Page
 * URL: /case-studies/realm-of-shadows
 */
export const RealmOfShadowsCaseStudy: React.FC = () => {
  return (
    <CaseStudyPage
      label="Case Study"
      title={
        <>
          How We Helped <em>Realm of Shadows</em> Deliver to 8,000 Backers On
          Time
        </>
      }
      heroImage={
        <GameBox>
          Realm of
          <br />
          Shadows
        </GameBox>
      }
      stats={[
        { value: '8,247', label: 'Backers Fulfilled' },
        { value: '$412K', label: 'Kickstarter Raised' },
        { value: '12', label: 'Weeks to Deliver' },
        { value: '100%', label: 'On-Time Rate' },
      ]}
      overview={
        <>
          <p>
            Realm of Shadows is a cooperative dungeon-crawling board game that
            raised over $412,000 on Kickstarter in 2024. With 8,247 backers
            across 45 countries expecting delivery by the holidays, creator
            Sarah Chen needed a manufacturing partner who could deliver quality
            at scale—on time.
          </p>
          <p>
            The game features over 200 unique cards, 50 detailed miniatures, a
            modular game board, and a premium rigid box. It was Sarah's first
            Kickstarter campaign, and she needed guidance through every step of
            the manufacturing process.
          </p>
        </>
      }
      challenges={[
        'First-time creator with no manufacturing experience',
        'Complex game with 15+ unique components',
        'Tight holiday delivery deadline',
        'Global fulfillment to 45 countries',
        'Budget constraints from stretch goals',
      ]}
      solutions={[
        'Dedicated project manager for guidance',
        'Consolidated production timeline',
        'Parallel component manufacturing',
        'Multi-hub fulfillment strategy',
        'Value engineering recommendations',
      ]}
      process={
        <>
          <p>
            We started working with Sarah three months before her campaign
            launched, providing detailed quotes she could use for pricing
            decisions. During the campaign, we stayed in close contact to adjust
            production estimates as funding (and stretch goals) grew.
          </p>
          <p>
            Once the campaign ended, we moved quickly. Our pre-production team
            reviewed all files within 48 hours, flagging minor issues that could
            have caused delays. We produced comprehensive samples within two
            weeks, getting Sarah's approval before committing to full
            production.
          </p>
          <p>
            By manufacturing components in parallel and coordinating carefully
            with our logistics partners, we were able to begin shipping just 10
            weeks after file approval—two weeks ahead of schedule.
          </p>
        </>
      }
      testimonial={{
        quote:
          "As a first-time creator, I was terrified of manufacturing. Oakheart made it feel manageable. They caught issues I never would have noticed and delivered two weeks early. My backers were thrilled—and so was I.",
        author: 'Sarah Chen',
        title: 'Creator, Realm of Shadows',
        initials: 'SC',
      }}
      results={
        <>
          <p>
            Realm of Shadows shipped to all 8,247 backers across 45 countries by
            early December—well ahead of the holiday deadline. The game received
            overwhelmingly positive reviews, with backers praising the
            production quality.
          </p>
          <p>
            Sarah has since launched her second Kickstarter campaign and is
            working with us again on manufacturing. We're proud to be her
            long-term manufacturing partner.
          </p>
        </>
      }
      cta={{
        title: 'Ready for Your Success Story?',
        description:
          "Let's talk about your game and how we can help bring it to life.",
        buttonLabel: 'Get Your Free Quote',
        buttonHref: '/quote',
      }}
    />
  );
};

export default RealmOfShadowsCaseStudy;
