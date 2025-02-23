import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '@/src/app/[locale]/components/Header';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import messages from '@/messages/en.json';

describe('Header', () => {
  test('it should contain a homepage link', async () => {
    // given
    const locale = 'en';

    // when
    render(
      <NextIntlClientProvider
        locale={locale}
        messages={messages as AbstractIntlMessages}
      >
        <Header locale={locale} />
      </NextIntlClientProvider>,
    );

    // then
    const link = screen.getByRole('link', { name: 'Back to homepage' });
    expect(link).toBeDefined();
  });

  test('it should contain a theme switcher', async () => {
    // given
    const locale = 'en';

    // when
    render(
      <NextIntlClientProvider
        locale={locale}
        messages={messages as AbstractIntlMessages}
      >
        <Header locale={locale} />
      </NextIntlClientProvider>,
    );

    // then
    const button = screen.getByRole('button', {
      name: 'Theme',
    });
    expect(button).toBeDefined();
  });

  test('it should contain a language switcher', async () => {
    // given
    const locale = 'en';

    // when
    render(
      <NextIntlClientProvider
        locale={locale}
        messages={messages as AbstractIntlMessages}
      >
        <Header locale={locale} />
      </NextIntlClientProvider>,
    );

    // then
    const button = screen.getByRole('button', {
      name: 'Language',
    });
    expect(button).toBeDefined();
  });

  test('it should contain a Github portfolio link', async () => {
    // given
    const locale = 'en';

    // when
    render(
      <NextIntlClientProvider
        locale={locale}
        messages={messages as AbstractIntlMessages}
      >
        <Header locale={locale} />
      </NextIntlClientProvider>,
    );

    // then
    const link = screen.getByRole('link', {
      name: 'See my Github portfolio',
    });
    expect(link).toBeDefined();
  });
});
