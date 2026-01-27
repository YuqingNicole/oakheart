import styled from 'styled-components';

export const SectionLabel = styled.p`
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold-warm);
  margin-bottom: var(--space-sm);
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--oak-deep);
  line-height: 1.2;
  margin-bottom: var(--space-md);
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--stone);
  max-width: 600px;
  line-height: 1.7;
`;

export const DisplayTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: var(--space-md);

  em {
    font-style: italic;
    color: var(--gold-warm);
  }
`;
