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
    const image = screen.getByAltText('Photo of the author');
    expect(image).toBeDefined();
  });

  test('it should contain my profile description', async () => {
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
    const title = within(cards[0]).getByRole('heading', {
      level: 2,
      name: 'Senior Software Developer',
    });
    expect(title).toBeDefined();

    const text = within(cards[0]).getByRole('paragraph');
    expect(text).toHaveTextContent('Passionate about my job');
  });

  test('it should contain an about this site card', async () => {
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
    const title = within(cards[1]).getByRole('heading', {
      level: 2,
      name: 'A playground...',
    });
    expect(title).toBeDefined();

    const text = within(cards[1]).getByRole('paragraph');
    expect(text).toHaveTextContent('Responsive i18n website');
  });
});
