import React from 'react';
import styled from 'styled-components';
import { Testimonial as TestimonialType } from '../../types';

const TestimonialWrapper = styled.div`
  background: var(--oak-deep);
  border-radius: 16px;
  padding: var(--space-xl);
  margin: var(--space-xl) 0;
  position: relative;

  &::before {
    content: '"';
    font-family: var(--font-display);
    font-size: 8rem;
    color: var(--gold-warm);
    opacity: 0.2;
    position: absolute;
    top: -20px;
    left: 20px;
    line-height: 1;
  }
`;

const TestimonialQuote = styled.blockquote`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  color: var(--cream);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
  position: relative;
  z-index: 1;
`;

const TestimonialAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`;

const TestimonialAvatar = styled.div`
  width: 56px;
  height: 56px;
  background: var(--gold-warm);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--oak-deep);
`;

const TestimonialAuthorInfo = styled.div``;

const TestimonialName = styled.div`
  color: var(--cream);
  font-weight: 600;
`;

const TestimonialTitle = styled.div`
  color: var(--gold-warm);
  font-size: 0.9rem;
`;

export const Testimonial: React.FC<TestimonialType & { className?: string }> = ({
  quote,
  author,
  title,
  initials,
  className,
}) => {
  return (
    <TestimonialWrapper className={className}>
      <TestimonialQuote>{quote}</TestimonialQuote>
      <TestimonialAuthorWrapper>
        <TestimonialAvatar>{initials}</TestimonialAvatar>
        <TestimonialAuthorInfo>
          <TestimonialName>{author}</TestimonialName>
          <TestimonialTitle>{title}</TestimonialTitle>
        </TestimonialAuthorInfo>
      </TestimonialAuthorWrapper>
    </TestimonialWrapper>
  );
};

export default Testimonial;
