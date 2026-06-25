import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import {
  AppRouterContextProviderMock,
  AppRouterContextProviderMockProps,
} from './app-router-context-provider-mock';
import { IntlProviderMock } from './intl-provider-mock';

type RenderI18nOptions = {
  router?: AppRouterContextProviderMockProps['router'];
  pathname?: string;
};

export const renderI18n = (children: ReactNode, options?: RenderI18nOptions) =>
  render(
    <AppRouterContextProviderMock
      router={options?.router}
      pathname={options?.pathname}
    >
      <IntlProviderMock>{children}</IntlProviderMock>
    </AppRouterContextProviderMock>,
  );
