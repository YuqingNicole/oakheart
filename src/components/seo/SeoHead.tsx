import React from 'react';
import Head from 'next/head';

export interface SeoHeadProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, any>;
  noIndex?: boolean;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description = 'Oakheart - Premium Board Game Manufacturing',
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/factory_photos/01_assembly_line.jpg',
  schema,
  noIndex = false,
}) => {
  const siteTitle = title.includes('Oakheart') ? title : `${title} | Oakheart`;
  const fullUrl = canonicalUrl ? `https://oakheart.com${canonicalUrl}` : 'https://oakheart.com';
  
  // Ensure absolute URL for ogImage
  const fullOgImage = ogImage?.startsWith('http') 
    ? ogImage 
    : `https://oakheart.com${ogImage?.startsWith('/') ? '' : '/'}${ogImage}`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullOgImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {canonicalUrl && <link rel="canonical" href={fullUrl} />}
      
      {/* Structured Data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
};

export default SeoHead;
