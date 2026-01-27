import React from 'react';
import { SeoHead } from '../../components/seo';
import { CardsComponentPage } from '../../examples';

export default function CardsComponent() {
  return (
    <>
      <SeoHead
        title="Custom Playing Cards Manufacturing | Board Game Cards"
        description="Premium custom playing card printing for board games. Multiple sizes, finishes, and stock options. Get pricing for 500 to 10,000+ units."
        canonicalUrl="/components/cards"
      />
      <CardsComponentPage />
    </>
  );
}
