import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: 'jsdom',
    server: {
      deps: {
        // @see: http://next-intl.dev/docs/environments/testing
        // https://github.com/vercel/next.js/issues/77200
        inline: ['next-intl'],
      },
    },
    setupFiles: [
      './__tests__/config/setup-i18n.ts',
      './__tests__/config/setup-vitest.ts',
    ],
    css: true,
    globals: true,
    coverage: {
      provider: 'v8',
    },
  },
});
