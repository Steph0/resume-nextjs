import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import messages from '@/messages/en.json';
import DashboardPage from '@/src/app/[locale]/page';

describe('DashboardPage', () => {
  test('it should only display the presentation at startup', async () => {
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
    const titles = screen.getAllByRole('heading', {
      level: 1,
    });
    expect(titles).toHaveLength(1);
    expect(titles[0]).toHaveAccessibleName("Hi! I'm Stephen");
  });

  test('it should contain an arrow image to view more', async () => {
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
    const arrowDown = screen.getByAltText('View more');
    expect(arrowDown).toBeDefined();
  });

  describe('when user clicks to view more', () => {
    test('it should load the skills', async () => {
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
      fireEvent.click(screen.getByAltText('View more'));

      // then
      const skillSection = await screen.findByRole('heading', {
        level: 1,
        name: 'Skills',
      });
      expect(skillSection).toBeDefined();
    });
  });
});
