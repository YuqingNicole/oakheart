import React from 'react';
import { SeoHead } from '../components/seo';
import { ManufacturingPage } from '../examples';

export default function Manufacturing() {
  return (
    <>
      <SeoHead
        title="Board Game Manufacturer | Custom Manufacturing from 200 Units"
        description="Professional board game manufacturing services. Low MOQ from 200 units, 98% on-time delivery. Get a free quote for cards, boxes, and components."
        canonicalUrl="/manufacturing"
      />
      <ManufacturingPage />
    </>
  );
}
