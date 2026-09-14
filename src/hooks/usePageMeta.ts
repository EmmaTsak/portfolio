import { useEffect } from 'react';

interface MetaOptions {
  title: string;
  description: string;
  path?: string;
}

export function usePageMeta({ title, description, path = '' }: MetaOptions) {
  useEffect(() => {
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    descriptionTag?.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    ogTitle?.setAttribute('content', title);
    ogDescription?.setAttribute('content', description);

    const base = (import.meta.env.VITE_SITE_URL || `${window.location.origin}${import.meta.env.BASE_URL}`).replace(/\/$/, '');
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${base}${path}`;
  }, [title, description, path]);
}
