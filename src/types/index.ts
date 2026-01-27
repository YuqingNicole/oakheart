import { ReactNode } from 'react';

// Common types
export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

// Button
export type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

// Card
export interface CardProps extends BaseProps {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

// Section
export interface SectionProps extends BaseProps {
  background?: 'cream' | 'white' | 'mist' | 'gold' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
}

// Service Page
export interface StatItem {
  value: string;
  label: string;
}

export interface SegmentCard {
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

export interface Capability {
  icon: string;
  name: string;
}

// Guide Page
export interface TocItem {
  id: string;
  label: string;
}

export interface StepCard {
  number: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Component Page
export interface SpecItem {
  label: string;
  value: string;
}

export interface SpecCard {
  icon: string;
  title: string;
  specs: SpecItem[];
}

export interface MaterialCard {
  color: string;
  name: string;
  description: string;
}

export interface PricingTier {
  tier: string;
  quantity: string;
  price: string;
  unit: string;
  features: string[];
  featured?: boolean;
}

// Case Study Page
export interface CaseStat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  initials: string;
}
