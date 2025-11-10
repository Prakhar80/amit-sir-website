"use client";
import { useEffect } from 'react';

// All important pages to prefetch
const PAGES_TO_PREFETCH = [
  '/about',
  '/contact',
  '/explore-courses',
  '/aws/cloud-services',
  '/aws/certified-cloud-practitioner',
  '/aws/certified-solutions-architect-associate',
  '/certifications/rhcsa',
  '/certifications/rhce',
  '/cisco/ccna-training-200-301',
  '/cisco/ccnp-training-350-401',
  '/python/full-stack-development',
  '/python/data-science',
  '/docker/docker-fundamentals',
  '/kubernetes/kubernetes-fundamentals',
];

export default function AggressivePrefetch() {
  useEffect(() => {
    // Prefetch all important pages after initial load
    const prefetchPages = () => {
      PAGES_TO_PREFETCH.forEach((page) => {
        // Create invisible link and trigger prefetch
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        link.as = 'document';
        document.head.appendChild(link);
      });
    };

    // Start prefetching after page is interactive
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        prefetchPages();
      } else {
        window.addEventListener('load', prefetchPages);
        return () => window.removeEventListener('load', prefetchPages);
      }
    }
  }, []);

  return null;
}
