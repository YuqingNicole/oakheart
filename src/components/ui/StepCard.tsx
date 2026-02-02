import React from 'react';
import styled from 'styled-components';
import { StepCard as StepCardType } from '../../types';

const StyledStepCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
  border: 1px solid var(--mist);
  position: relative;
  padding-left: 80px;
`;

const StepNumber = styled.div`
  position: absolute;
  left: var(--space-lg);
  top: var(--space-lg);
  width: 40px;
  height: 40px;
  background: var(--oak-deep);
  color: var(--gold-warm);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
`;

const StepTitle = styled.h4`
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--oak-deep);
  margin-bottom: var(--space-sm);
`;

const StepDescription = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: var(--graphite);
  line-height: 1.6;
`;

export const StepCard: React.FC<StepCardType> = ({
  number,
  title,
  description,
}) => {
  return (
    <StyledStepCard>
      <StepNumber>{number}</StepNumber>
      <StepTitle>{title}</StepTitle>
      <StepDescription>{description}</StepDescription>
    </StyledStepCard>
  );
};

export default StepCard;
