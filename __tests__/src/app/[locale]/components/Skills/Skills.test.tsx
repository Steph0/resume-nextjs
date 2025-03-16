import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import messages from '@/messages/en.json';
import Skills from '@/src/app/[locale]/components/DashboardPage/Skills/Skills';

describe('Skills', () => {
  test('it should have a title', async () => {
    // given
    const locale = 'en';

    // when
    render(
      <NextIntlClientProvider
        locale={locale}
        messages={messages as AbstractIntlMessages}
      >
        <Skills />
      </NextIntlClientProvider>,
    );

    // then
    const title = screen.getByRole('heading', { name: 'Skills' });
    expect(title).toBeInTheDocument();
  });

  test('it should contain my languages skills', async () => {
    // given
    const locale = 'en';

    // when
    render(
      <NextIntlClientProvider
        locale={locale}
        messages={messages as AbstractIntlMessages}
      >
        <Skills />
      </NextIntlClientProvider>,
    );

    // then
    const articles = screen.getAllByRole('article');
    const title = within(articles[0]).getByRole('heading', {
      name: 'Languages',
    });
    expect(title).toBeInTheDocument();

    const terms = within(articles[0]).getAllByRole('term');
    expect(terms[0]).toHaveTextContent('French');
    expect(terms[1]).toHaveTextContent('English');
    expect(terms[2]).toHaveTextContent('Japanese');
  });
});
