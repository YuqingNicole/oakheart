import React from 'react';
import Head from 'next/head';

export interface SeoHeadProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description = 'Oakheart - Premium Board Game Manufacturing',
  canonicalUrl,
  ogType = 'website',
  ogImage,
}) => {
  const siteTitle = `${title} | Oakheart`;
  const fullUrl = canonicalUrl ? `https://oakheart.com${canonicalUrl}` : 'https://oakheart.com';

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {canonicalUrl && <link rel="canonical" href={fullUrl} />}
    </Head>
  );
};

export default SeoHead;
