import React, { useEffect } from 'react';
import { SEO_REGISTRY, PageSEO } from '../data/seoRegistry';

interface SEOHeadProps {
  currentPath: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPath }) => {
  const seoData: PageSEO = SEO_REGISTRY[currentPath] || SEO_REGISTRY['/'];

  useEffect(() => {
    // 1. Update Title (Specific, branded, 50-60 chars)
    document.title = seoData.title;

    // Helper to set or update meta tag by name
    const setMetaByName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to set or update meta tag by property (OpenGraph)
    const setMetaByProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Meta Description (140-158 chars, active voice with CTA)
    setMetaByName('description', seoData.metaDescription);

    // 3. Keywords (Main Keyword + 2 Related Keywords)
    const allKeywords = [seoData.mainKeyword, ...seoData.relatedKeywords].join(', ');
    setMetaByName('keywords', allKeywords);

    // 4. Canonical URL
    const fullUrl = `${window.location.origin}${seoData.path}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 5. OpenGraph Tags
    setMetaByProperty('og:title', seoData.title);
    setMetaByProperty('og:description', seoData.metaDescription);
    setMetaByProperty('og:url', fullUrl);
    setMetaByProperty('og:type', seoData.path.startsWith('/startup-stories/') ? 'article' : 'website');
    setMetaByProperty('og:site_name', 'Indian Startup Stories');

    // 6. Twitter Card Tags
    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', seoData.title);
    setMetaByName('twitter:description', seoData.metaDescription);

    // 7. Schema.org JSON-LD (WebSite, Article, and FAQPage for AEO)
    const jsonLdId = 'applet-seo-jsonld';
    let scriptTag = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = jsonLdId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaGraph: any[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Indian Startup Stories',
        url: window.location.origin,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${window.location.origin}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: window.location.origin,
          },
          ...(seoData.path !== '/'
            ? [
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: seoData.breadcrumbName,
                  item: fullUrl,
                },
              ]
            : []),
        ],
      },
    ];

    // If page has FAQ pairs, inject FAQPage schema (Crucial for AEO Answer Engine Optimization)
    if (seoData.faqs && seoData.faqs.length > 0) {
      schemaGraph.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: seoData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    scriptTag.textContent = JSON.stringify(schemaGraph);
  }, [seoData]);

  return null;
};
