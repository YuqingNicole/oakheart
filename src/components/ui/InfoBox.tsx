import React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';

interface InfoBoxProps extends BaseProps {
  title: string;
  icon?: string;
}

const StyledInfoBox = styled.div`
  background: var(--gold-pale);
  border-left: 4px solid var(--gold-warm);
  padding: var(--space-md);
  border-radius: 0 8px 8px 0;
  margin: var(--space-lg) 0;
`;

const InfoBoxTitle = styled.div`
  font-weight: 600;
  color: var(--oak-deep);
  margin-bottom: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`;

const InfoBoxContent = styled.div`
  font-size: 0.95rem;
  color: var(--graphite);

  p {
    margin: 0;
  }
`;

export const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  icon = '💡',
  children,
  className,
}) => {
  return (
    <StyledInfoBox className={className}>
      <InfoBoxTitle>
        <span>{icon}</span>
        {title}
      </InfoBoxTitle>
      <InfoBoxContent>{children}</InfoBoxContent>
    </StyledInfoBox>
  );
};

export default InfoBox;
