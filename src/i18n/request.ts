import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment.
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as 'en' | 'ja')) {
    locale = routing.defaultLocale as string;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
