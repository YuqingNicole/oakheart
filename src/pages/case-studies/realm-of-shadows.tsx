import React from 'react';
import { SeoHead } from '../../components/seo';
import { RealmOfShadowsCaseStudy } from '../../examples';

export default function RealmOfShadows() {
  return (
    <>
      <SeoHead
        title="Realm of Shadows Case Study | 8,000 Backers Delivered On Time"
        description="How we helped Realm of Shadows deliver to 8,247 Kickstarter backers on time. Read the full manufacturing case study."
        canonicalUrl="/case-studies/realm-of-shadows"
        ogType="article"
      />
      <RealmOfShadowsCaseStudy />
    </>
  );
}
