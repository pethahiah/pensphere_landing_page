import type { Metadata } from 'next';
import { site } from './site';

// Next.js replaces (not merges) openGraph/twitter objects set by a child route,
// so every page builds its full set here to keep og:url, og:title etc. per page.
export const pageMetadata = (path: string, title: string | null, description: string = site.description): Metadata => {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  return {
    title: title ?? { absolute: site.title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_NG',
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'PenSphere – PenCom-approved pension remittance, simplified.' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [site.ogImage],
    },
  };
};
