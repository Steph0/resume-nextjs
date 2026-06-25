import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';

const ROUTES = ['', '/skills'];

const _getPublicUri = (): string => {
  if (!process.env.APP_PUBLIC_URI) {
    throw new Error('APP_PUBLIC_URI env var is not set');
  }
  return process.env.APP_PUBLIC_URI;
};

const buildAlternates = (path: string) => {
  const baseUrl = _getPublicUri();
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, `${baseUrl}/${locale}${path}`]),
  );
};

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = _getPublicUri();
  return ROUTES.map((path, index) => ({
    url: `${baseUrl}/en${path}`,
    lastModified: new Date(),
    priority: index === 0 ? 1 : 0.8,
    alternates: {
      languages: buildAlternates(path),
    },
  }));
};

export default sitemap;
