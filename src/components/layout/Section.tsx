import React from 'react';
import styled, { css } from 'styled-components';
import { SectionProps } from '../../types';

type Background = 'cream' | 'white' | 'mist' | 'gold' | 'dark';
type Padding = 'sm' | 'md' | 'lg';

const getBackgroundStyles = (background: Background) => {
  const backgrounds = {
    cream: css`background: var(--cream);`,
    white: css`background: white;`,
    mist: css`background: var(--mist);`,
    gold: css`background: var(--gold-pale);`,
    dark: css`
      background: linear-gradient(165deg, var(--oak-deep) 0%, #0D2818 100%);
      color: var(--cream);
    `,
  };
  return backgrounds[background];
};

const getPaddingStyles = (padding: Padding) => {
  const paddings = {
    sm: css`padding: var(--space-lg) 0;`,
    md: css`padding: var(--space-xl) 0;`,
    lg: css`padding: var(--space-2xl) 0;`,
  };
  return paddings[padding];
};

const StyledSection = styled.section<{
  $background: Background;
  $padding: Padding;
}>`
  position: relative;
  ${({ $background }) => getBackgroundStyles($background)}
  ${({ $padding }) => getPaddingStyles($padding)}
`;

export const Section: React.FC<SectionProps & { id?: string; as?: React.ElementType }> = ({
  background = 'cream',
  padding = 'lg',
  children,
  className,
  id,
  as,
}) => {
  return (
    <StyledSection
      $background={background}
      $padding={padding}
      className={className}
      id={id}
      as={as}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
