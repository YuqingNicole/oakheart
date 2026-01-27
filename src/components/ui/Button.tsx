import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps, ButtonVariant, ButtonSize } from '../../types';

const getVariantStyles = (variant: ButtonVariant) => {
  const variants = {
    primary: css`
      background: var(--oak-deep);
      color: var(--cream);
      &:hover {
        background: var(--oak-forest);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(27, 67, 50, 0.25);
      }
    `,
    secondary: css`
      background: transparent;
      color: var(--oak-deep);
      border: 2px solid var(--oak-deep);
      &:hover {
        background: var(--oak-deep);
        color: var(--cream);
      }
    `,
    gold: css`
      background: var(--gold-warm);
      color: var(--charcoal);
      &:hover {
        background: var(--gold-light);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(212, 163, 115, 0.35);
      }
    `,
    ghost: css`
      background: transparent;
      color: var(--cream);
      border: 2px solid rgba(255, 255, 255, 0.3);
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.5);
      }
    `,
  };
  return variants[variant];
};

const getSizeStyles = (size: ButtonSize) => {
  const sizes = {
    sm: css`
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    `,
    md: css`
      padding: 1rem 2rem;
      font-size: 0.9rem;
    `,
    lg: css`
      padding: 1.25rem 2.5rem;
      font-size: 1rem;
    `,
  };
  return sizes[size];
};

const baseStyles = css<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  font-family: var(--font-body);
  font-weight: 600;
  letter-spacing: 0.03em;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $size }) => getSizeStyles($size)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  ${baseStyles}
`;

const StyledLink = styled.a<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  ${baseStyles}
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  children,
  className,
}) => {
  if (href) {
    return (
      <StyledLink
        href={href}
        className={className}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={className}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
