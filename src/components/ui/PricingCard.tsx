import React from 'react';
import styled, { css } from 'styled-components';
import { PricingTier } from '../../types';
import { Button } from './button';

const StyledPricingCard = styled.div<{ $featured: boolean }>`
  background: white;
  border: 2px solid var(--mist);
  border-radius: 16px;
  padding: var(--space-lg);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;

  ${({ $featured }) =>
    $featured &&
    css`
      border-color: var(--gold-warm);
      transform: scale(1.05);

      &::before {
        content: 'Most Popular';
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--gold-warm);
        color: white;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 4px 16px;
        border-radius: 100px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    `}

  &:hover {
    border-color: var(--oak-forest);
    box-shadow: 0 16px 48px rgba(27, 67, 50, 0.12);
  }

  @media (max-width: 768px) {
    ${({ $featured }) =>
      $featured &&
      css`
        transform: none;
      `}
  }
`;

const PricingTierLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--oak-sage);
  margin-bottom: var(--space-sm);
`;

const PricingQuantity = styled.div`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--oak-deep);
  margin-bottom: var(--space-md);
`;

const PricingPrice = styled.div`
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gold-warm);

  span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--stone);
  }
`;

const PricingFeatures = styled.ul`
  list-style: none;
  margin: var(--space-lg) 0;
  text-align: left;
`;

const PricingFeature = styled.li`
  padding: var(--space-xs) 0;
  font-size: 0.9rem;
  color: var(--graphite);
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  &::before {
    content: '✓';
    color: var(--oak-forest);
    font-weight: 600;
  }
`;

export const PricingCard: React.FC<PricingTier & { className?: string }> = ({
  tier,
  quantity,
  price,
  unit,
  features,
  featured = false,
  className,
}) => {
  return (
    <StyledPricingCard $featured={featured} className={className}>
      <PricingTierLabel>{tier}</PricingTierLabel>
      <PricingQuantity>{quantity}</PricingQuantity>
      <PricingPrice>
        {price}
        <span>/{unit}</span>
      </PricingPrice>
      <PricingFeatures>
        {features.map((feature, index) => (
          <PricingFeature key={index}>{feature}</PricingFeature>
        ))}
      </PricingFeatures>
      <Button
        variant={featured ? 'primary' : 'secondary'}
        href="/quote"
        fullWidth
      >
        Get Quote
      </Button>
    </StyledPricingCard>
  );
};

export default PricingCard;
