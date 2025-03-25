import { screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { renderI18n } from '@/__tests__/helpers/testing-library-helpers';
import Skills from '@/src/app/[locale]/components/DashboardPage/Skills/Skills';

describe('Skills', () => {
  test('it should have a title', async () => {
    // when
    renderI18n(<Skills />);

    // then
    const title = screen.getByRole('heading', { name: 'Skills' });
    expect(title).toBeInTheDocument();
  });

  describe('Languages', () => {
    test('it should contain my languages skills', async () => {
      // when
      renderI18n(<Skills />);

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

  describe('Skills', () => {
    test('it should contain my tech skills', async () => {
      // when
      renderI18n(<Skills />);

      // then
      const articles = screen.getAllByRole('article');
      const title = within(articles[1]).getByRole('heading', {
        name: 'Craftmanship / tech stack',
      });
      expect(title).toBeInTheDocument();

      const terms = within(articles[1]).getAllByRole('term');
      expect(terms[0]).toHaveTextContent('Craftmanship');
      expect(terms[1]).toHaveTextContent('Backend');
      expect(terms[2]).toHaveTextContent('Frontend');
      expect(terms[3]).toHaveTextContent('Platforms');
      expect(terms[4]).toHaveTextContent('Databases');
    });
  });
});
