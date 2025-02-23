import { beforeAll, Mock, vi } from 'vitest';
import { createTranslator, useTranslations } from 'next-intl';
import messages from '@/messages/en.json';

vi.mock('next-intl', async () => {
  const actual = await vi.importActual<typeof import('next-intl')>('next-intl');

  return {
    ...actual,
    useTranslations: vi.fn(),
  };
});

beforeAll(async () => {
  (useTranslations as Mock).mockImplementation((namespace) => {
    return createTranslator({
      locale: 'en',
      messages,
      namespace,
    });
  });
});
