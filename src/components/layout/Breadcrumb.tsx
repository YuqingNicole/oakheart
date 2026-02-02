import React from 'react';
import styled from 'styled-components';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
  className?: string;
}

const BreadcrumbWrapper = styled.nav`
  margin-bottom: var(--space-lg);
`;

const BreadcrumbList = styled.ol<{ $light: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.85rem;
  color: ${({ $light }) => ($light ? 'rgba(255, 255, 255, 0.6)' : 'var(--stone)')};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BreadcrumbItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`;

const BreadcrumbLink = styled.a<{ $light: boolean }>`
  color: ${({ $light }) => ($light ? 'var(--gold-warm)' : 'var(--oak-forest)')};
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  opacity: 0.5;
`;

const BreadcrumbCurrent = styled.span<{ $light: boolean }>`
  color: ${({ $light }) => ($light ? 'rgba(255, 255, 255, 0.9)' : 'var(--oak-deep)')};
  font-weight: 500;
`;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  light = false,
  className,
}) => {
  return (
    <BreadcrumbWrapper aria-label="Breadcrumb" className={className}>
      <BreadcrumbList $light={light}>
        {items.map((item, index) => (
          <BreadcrumbItemWrapper key={index}>
            {index > 0 && <BreadcrumbSeparator aria-hidden="true">/</BreadcrumbSeparator>}
            {item.href ? (
              <BreadcrumbLink href={item.href} $light={light}>
                {item.label}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbCurrent $light={light} aria-current="page">
                {item.label}
              </BreadcrumbCurrent>
            )}
          </BreadcrumbItemWrapper>
        ))}
      </BreadcrumbList>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
