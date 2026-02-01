import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  jsonLd?: object;
}

const SEOHead = ({ 
  title, 
  description, 
  canonical,
  type = 'website',
  image = 'https://kuzey-yapi.lovable.app/og-image.jpg',
  jsonLd
}: SEOHeadProps) => {
  const fullTitle = `${title} | Kuzey Yapı Mühendislik`;
  const siteUrl = 'https://kuzey-yapi.lovable.app';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical ? `${siteUrl}${canonical}` : siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="Kuzey Yapı Mühendislik" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical ? `${siteUrl}${canonical}` : siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="author" content="Kuzey Yapı Mühendislik" />
      <meta name="geo.region" content="TR" />
      <meta name="geo.placename" content="İstanbul" />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

// Predefined JSON-LD schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kuzey Yapı Mühendislik",
  "url": "https://kuzey-yapi.lovable.app",
  "logo": "https://kuzey-yapi.lovable.app/logo.png",
  "description": "Kuzey Yapı, 2011'den bu yana mekanik tesisat, doğalgaz sistemleri, mimari tasarım ve dekorasyon alanlarında profesyonel mühendislik hizmetleri sunmaktadır.",
  "foundingDate": "2011",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "İstanbul",
    "addressCountry": "TR"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Turkey"
  },
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["Turkish"]
  }
};

export const createServiceSchema = (serviceName: string, serviceDescription: string, serviceUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "url": serviceUrl,
  "provider": {
    "@type": "Organization",
    "name": "Kuzey Yapı Mühendislik",
    "url": "https://kuzey-yapi.lovable.app"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Turkey"
  },
  "serviceType": serviceName
});