import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import messages from '@/messages/en.json';
import DashboardPage from '@/src/app/[locale]/page';

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

  test('it should contain my profile picture', async () => {
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
    const cards = screen.getAllByRole('article');
    const image = within(cards[0]).getByAltText('Photo of the author');
    expect(image).toBeDefined();
  });
});
