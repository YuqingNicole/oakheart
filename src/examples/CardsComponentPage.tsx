import React from 'react';
import styled from 'styled-components';
import { ComponentPage } from '../components/pages';

// Demo visual for hero
const CardStack = styled.div`
  display: flex;
  gap: -30px;
`;

const DemoCard = styled.div<{ $rotation: number; $offset: number }>`
  width: 120px;
  height: 170px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  transform: rotate(${({ $rotation }) => $rotation}deg)
    translateX(${({ $offset }) => $offset}px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

const CardVisual = () => (
  <CardStack>
    <DemoCard $rotation={-5} $offset={0}>
      🃏
    </DemoCard>
    <DemoCard $rotation={0} $offset={-20}>
      ⚔️
    </DemoCard>
    <DemoCard $rotation={5} $offset={-40}>
      🏰
    </DemoCard>
  </CardStack>
);

/**
 * Example: Cards Component Page
 * URL: /components/cards
 */
export const CardsComponentPage: React.FC = () => {
  return (
    <ComponentPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Components', href: '/components' },
        { label: 'Cards' },
      ]}
      title="Custom Playing Cards"
      description="Premium card printing with professional finishes. From standard poker cards to custom shapes, we deliver exceptional quality for your game."
      heroVisual={<CardVisual />}
      specs={[
        {
          icon: '📐',
          title: 'Standard Sizes',
          specs: [
            { label: 'Poker', value: '63 × 88mm' },
            { label: 'Bridge', value: '57 × 89mm' },
            { label: 'Tarot', value: '70 × 120mm' },
            { label: 'Mini', value: '44 × 63mm' },
            { label: 'Square', value: '70 × 70mm' },
            { label: 'Custom', value: 'Any size' },
          ],
        },
        {
          icon: '📄',
          title: 'Card Stock',
          specs: [
            { label: 'Standard', value: '300gsm' },
            { label: 'Premium', value: '330gsm' },
            { label: 'Deluxe', value: '350gsm' },
            { label: 'Core', value: 'Blue/Black' },
          ],
        },
        {
          icon: '✨',
          title: 'Finishes',
          specs: [
            { label: 'Matte', value: 'Smooth, no glare' },
            { label: 'Glossy', value: 'Vibrant colors' },
            { label: 'Linen', value: 'Premium texture' },
            { label: 'Spot UV', value: 'Highlight areas' },
            { label: 'Foil', value: 'Gold/Silver' },
          ],
        },
      ]}
      materials={[
        {
          color: 'linear-gradient(135deg, #F5F5F5 0%, #E0E0E0 100%)',
          name: 'Standard White',
          description: '300gsm blue core',
        },
        {
          color: 'linear-gradient(135deg, #FFFEF0 0%, #F5F0DC 100%)',
          name: 'Ivory',
          description: 'Warm vintage feel',
        },
        {
          color: 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)',
          name: 'Black Core',
          description: 'Opaque, no see-through',
        },
        {
          color: 'linear-gradient(135deg, #E8E4D9 0%, #D4CFC0 100%)',
          name: 'Linen Texture',
          description: 'Premium tactile feel',
        },
      ]}
      pricing={[
        {
          tier: 'Starter',
          quantity: '500 Units',
          price: '$3.50',
          unit: 'deck',
          features: [
            '300gsm blue core',
            'Matte or glossy finish',
            'Standard tuck box',
            '8-week production',
          ],
          featured: false,
        },
        {
          tier: 'Standard',
          quantity: '2,000 Units',
          price: '$2.20',
          unit: 'deck',
          features: [
            '330gsm blue core',
            'Linen finish available',
            'Custom tuck box design',
            '6-week production',
          ],
          featured: true,
        },
        {
          tier: 'Volume',
          quantity: '10,000+ Units',
          price: '$1.40',
          unit: 'deck',
          features: [
            'Premium stock options',
            'All finishes available',
            'Rigid box upgrade',
            'Priority scheduling',
          ],
          featured: false,
        },
      ]}
    />
  );
};

export default CardsComponentPage;
