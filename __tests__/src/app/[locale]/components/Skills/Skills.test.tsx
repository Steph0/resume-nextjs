import { describe, expect, test } from 'vitest';
import { screen, within } from '@testing-library/react';
import Skills from '@/src/app/[locale]/components/DashboardPage/Skills/Skills';
import { renderI18n } from '@/__tests__/helpers/testing-library-helpers';

describe('Skills', () => {
  test('it should have a title', async () => {
    // when
    renderI18n(<Skills />);

    // then
    const title = screen.getByRole('heading', { name: 'Skills' });
    expect(title).toBeInTheDocument();
  });

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
