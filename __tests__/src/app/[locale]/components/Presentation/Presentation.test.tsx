import { screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { renderI18n } from '@/__tests__/helpers/testing-library-helpers';
import DashboardPage from '@/src/app/[locale]/page';

describe('Presentation', () => {
  test('it should contain a presentation', async () => {
    // when
    renderI18n(<DashboardPage />);

    // then
    const link = screen.getByRole('heading', {
      level: 1,
      name: "Hi! I'm Stephen",
    });
    expect(link).toBeInTheDocument();
  });

  test('it should contain my profile picture', async () => {
    // when
    renderI18n(<DashboardPage />);

    // then
    const image = screen.getByAltText('Photo of the author');
    expect(image).toBeInTheDocument();
  });

  test('it should contain my profile description', async () => {
    // when
    renderI18n(<DashboardPage />);

    // then
    const cards = screen.getAllByRole('article');
    const title = within(cards[0]).getByRole('heading', {
      level: 2,
      name: 'Senior Software Developer',
    });
    expect(title).toBeInTheDocument();

    const text = within(cards[0]).getByRole('paragraph');
    expect(text).toHaveTextContent('Passionate about my job');
  });

  test('it should contain an about this site card', async () => {
    // when
    renderI18n(<DashboardPage />);

    // then
    const cards = screen.getAllByRole('article');
    const title = within(cards[1]).getByRole('heading', {
      level: 2,
      name: 'A playground...',
    });
    expect(title).toBeInTheDocument();

    const text = within(cards[1]).getByRole('paragraph');
    expect(text).toHaveTextContent('Responsive i18n website');
  });
});
