import { render } from '@testing-library/react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import messages from '@/messages/en.json';
import { ReactNode } from 'react';

export const renderI18n = (children: ReactNode) => {
  const locale = 'en';

  return render(
    <NextIntlClientProvider
      locale={locale}
      messages={messages as AbstractIntlMessages}
    >
      {children}
    </NextIntlClientProvider>,
  );
};
