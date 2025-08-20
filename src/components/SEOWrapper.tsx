import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    children?: ReactNode; // To wrap the page content
}

const SEOWrapper = ({
    title,
    description,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    children,
  }: SEOProps) => {
  return (
    <>
      <Helmet>
        {/* Main page title and meta description */}
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}

        {/* Open Graph tags for social media sharing */}
        <meta property="og:type" content="website" />
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogUrl && <meta property="og:url" content={ogUrl} />}
      </Helmet>
      {children}
    </>
  )
}

export default SEOWrapper