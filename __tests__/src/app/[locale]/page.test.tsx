import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import messages from '@/messages/en.json';
import { DashboardPage } from '@/src/app/[locale]/page';

describe('DashboardPage', () => {
  test('it should contain a presentation', async () => {
    // given
    const locale = 'en';

    // when
    render(
      <NextIntlClientProvider
        locale={locale}
        messages={messages as AbstractIntlMessages}
      >
        <DashboardPage />
      </NextIntlClientProvider>,
    );

    // then
    const link = screen.getByRole('heading', {
      level: 1,
      name: "Hi! I'm Stephen",
    });
    expect(link).toBeDefined();
  });
});
