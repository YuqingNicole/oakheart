import React from 'react';
import styled, { css } from 'styled-components';
import { CardProps } from '../../types';

const getPaddingStyles = (padding: 'sm' | 'md' | 'lg') => {
  const paddings = {
    sm: css`padding: var(--space-sm);`,
    md: css`padding: var(--space-md);`,
    lg: css`padding: var(--space-lg);`,
  };
  return paddings[padding];
};

const StyledCard = styled.div<{ $hover: boolean; $padding: 'sm' | 'md' | 'lg' }>`
  background: white;
  border-radius: 16px;
  border: 1px solid var(--mist);
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ $padding }) => getPaddingStyles($padding)}

  ${({ $hover }) =>
    $hover &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--gold-warm);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      }

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 60px rgba(27, 67, 50, 0.12);

        &::before {
          transform: scaleX(1);
        }
      }
    `}
`;

export const Card: React.FC<CardProps & { as?: React.ElementType }> = ({
  hover = false,
  padding = 'lg',
  children,
  className,
  as,
}) => {
  return (
    <StyledCard $hover={hover} $padding={padding} className={className} as={as}>
      {children}
    </StyledCard>
  );
};

export default Card;
