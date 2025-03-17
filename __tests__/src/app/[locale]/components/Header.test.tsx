import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { renderI18n } from '@/__tests__/helpers/testing-library-helpers';
import { Header } from '@/src/app/[locale]/components/Header/Header';

describe('Header', () => {
  test('it should contain a homepage link', async () => {
    // given
    const locale = 'en';

    // when
    renderI18n(<Header locale={locale} />);

    // then
    const link = screen.getByRole('link', { name: 'Back to homepage' });
    expect(link).toBeDefined();
  });

  test('it should contain a theme switcher', async () => {
    // given
    const locale = 'en';

    // when
    renderI18n(<Header locale={locale} />);

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
    renderI18n(<Header locale={locale} />);

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
    renderI18n(<Header locale={locale} />);

    // then
    const link = screen.getByRole('link', {
      name: 'See my Github portfolio',
    });
    expect(link).toBeDefined();
  });
});
