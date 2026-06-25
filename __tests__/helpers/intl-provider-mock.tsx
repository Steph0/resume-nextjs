/**
 * Force using English translations in tests by default
 * instead of cryptic i18n keys
 */
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import messages from '@/messages/en.json';

export type IntlProviderMockProps = {
  locale?: string;
  children: ReactNode;
};

export const IntlProviderMock = ({
  locale = 'en',
  children,
}: IntlProviderMockProps): ReactNode => (
  <NextIntlClientProvider
    locale={locale}
    messages={messages as AbstractIntlMessages}
  >
    {children}
  </NextIntlClientProvider>
);
