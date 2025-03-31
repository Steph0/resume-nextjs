import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { renderI18n } from '@/__tests__/helpers/testing-library-helpers';
import DashboardPage from '@/src/app/[locale]/page';

describe('DashboardPage', () => {
  test('it should only display the presentation at startup', async () => {
    // when
    renderI18n(<DashboardPage />);

    // then
    const titles = screen.getAllByRole('heading', {
      level: 1,
    });
    expect(titles).toHaveLength(1);
    expect(titles[0]).toHaveAccessibleName("Hi! I'm Stephen");
  });

  test('it should contain an arrow image to view more', async () => {
    // when
    renderI18n(<DashboardPage />);

    // then
    const arrowDown = screen.getByAltText('View more');
    expect(arrowDown).toBeInTheDocument();
  });

  describe('when user clicks to view more arrow down', () => {
    test('it should load the skills', async () => {
      // when
      renderI18n(<DashboardPage />);
      fireEvent.click(screen.getByAltText('View more'));

      // then
      const skillSection = await screen.findByRole('heading', {
        level: 1,
        name: 'Skills',
      });
      expect(skillSection).toBeInTheDocument();
    });
  });

  describe('when user clicks the presentation link to load  the skills section', () => {
    test('it should load the skills', async () => {
      // when
      renderI18n(<DashboardPage />);
      fireEvent.click(
        screen.getByRole('link', {
          name: 'Read more about me',
        }),
      );

      // then
      const skillSection = await screen.findByRole('heading', {
        level: 1,
        name: 'Skills',
      });
      expect(skillSection).toBeInTheDocument();
    });
  });
});
