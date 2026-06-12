import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { renderI18n } from '@/__tests__/helpers/testing-library-helpers';
import DashboardPage from '@/src/app/[locale]/page';

describe('DashboardPage', () => {
  test('it should show the presentation at startup', async () => {
    // when
    const { container } = renderI18n(<DashboardPage />);

    // then
    const presentationTitle = screen.getByRole('heading', {
      level: 1,
      name: "Hi! I'm Stephen",
    });
    expect(presentationTitle).toBeInTheDocument();
    expect(presentationTitle).toBeVisible();
  });

  test('it should not show the skills at startup even if present in DOM', async () => {
    // when
    const { container } = renderI18n(<DashboardPage />);

    // then
    const skillSection = screen.getByRole('heading', {
      level: 1,
      name: 'Skills',
      hidden: true,
    });
    expect(skillSection).toBeInTheDocument();
    expect(skillSection).not.toBeVisible();
  });

  test('it should contain an arrow image to view more', async () => {
    // when
    renderI18n(<DashboardPage />);

    // then
    const arrowDown = screen.getByAltText('View more');
    expect(arrowDown).toBeInTheDocument();
  });

  describe('when user clicks to view more arrow down', () => {
    test('it should show the skills', async () => {
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
    test('it should show the skills', async () => {
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
