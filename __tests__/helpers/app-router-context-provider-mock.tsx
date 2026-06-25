/**
 * Next.js App Router hooks (useRouter, usePathname, useSearchParams) mocks
 * Allows routing event testing
 * Adapted from: https://github.com/vercel/next.js/discussions/48937
 */
import {
  AppRouterContext,
  AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  PathnameContext,
  SearchParamsContext,
} from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { ReactNode } from 'react';
import { vi } from 'vitest';

export type AppRouterContextProviderMockProps = {
  /** Override specific router methods to spy on them in a test */
  router?: Partial<AppRouterInstance>;
  /** The current pathname to expose via usePathname() */
  pathname?: string;
  /** The current search params to expose via useSearchParams() */
  searchParams?: URLSearchParams;
  children: ReactNode;
};

export const AppRouterContextProviderMock = ({
  router,
  pathname = '/',
  searchParams = new URLSearchParams(),
  children,
}: AppRouterContextProviderMockProps): ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: vi.fn(),
    forward: vi.fn(),
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
    ...router,
  };

  return (
    <PathnameContext.Provider value={pathname}>
      <SearchParamsContext.Provider value={searchParams}>
        <AppRouterContext.Provider value={mockedRouter}>
          {children}
        </AppRouterContext.Provider>
      </SearchParamsContext.Provider>
    </PathnameContext.Provider>
  );
};
