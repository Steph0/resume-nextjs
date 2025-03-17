import { describe, expect, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import DashboardPage from '@/src/app/[locale]/page';
import { renderI18n } from '@/__tests__/helpers/testing-library-helpers';

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
    expect(arrowDown).toBeDefined();
  });

  describe('when user clicks to view more', () => {
    test('it should load the skills', async () => {
      // when
      renderI18n(<DashboardPage />);
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
