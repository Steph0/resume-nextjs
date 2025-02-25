import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en', 'ja'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'always',
  },
  localeDetection: true,
});

export const { Link, usePathname } = createNavigation(routing);
