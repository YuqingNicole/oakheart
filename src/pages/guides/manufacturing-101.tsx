import React from 'react';
import { SeoHead } from '../../components/seo';
import { Manufacturing101Page } from '../../examples';

export default function Manufacturing101() {
  return (
    <>
      <SeoHead
        title="How to Manufacture a Board Game: Complete Guide (2025)"
        description="Step-by-step guide to manufacturing your board game. Learn about costs, timelines, choosing manufacturers, and avoiding common mistakes."
        canonicalUrl="/guides/manufacturing-101"
        ogType="article"
      />
      <Manufacturing101Page />
    </>
  );
}
