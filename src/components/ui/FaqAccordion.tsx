import React, { useState } from 'react';
import styled from 'styled-components';
import { FaqItem } from '../../types';

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

const FaqContainer = styled.div`
  margin-top: var(--space-xl);
`;

const FaqItemWrapper = styled.div<{ $isOpen: boolean }>`
  background: white;
  border: 1px solid var(--mist);
  border-radius: 8px;
  margin-bottom: var(--space-sm);
  overflow: hidden;
`;

const FaqQuestion = styled.button`
  width: 100%;
  padding: var(--space-md);
  background: none;
  border: none;
  text-align: left;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--oak-deep);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: var(--gold-pale);
  }
`;

const FaqIcon = styled.span<{ $isOpen: boolean }>`
  font-size: 1.5rem;
  color: var(--gold-warm);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
`;

const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

const FaqAnswerInner = styled.div`
  padding: 0 var(--space-md) var(--space-md);
  color: var(--graphite);
  line-height: 1.7;
`;

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FaqContainer className={className}>
      {items.map((item, index) => (
        <FaqItemWrapper key={index} $isOpen={openIndex === index}>
          <FaqQuestion onClick={() => toggleItem(index)}>
            {item.question}
            <FaqIcon $isOpen={openIndex === index}>+</FaqIcon>
          </FaqQuestion>
          <FaqAnswer $isOpen={openIndex === index}>
            <FaqAnswerInner>{item.answer}</FaqAnswerInner>
          </FaqAnswer>
        </FaqItemWrapper>
      ))}
    </FaqContainer>
  );
};

export default FaqAccordion;
