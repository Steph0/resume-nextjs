import { defineConfig } from 'vitest/config';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: [
      './__tests__/config/setup-i18n.ts',
      './__tests__/config/setup-vitest.ts',
      './__tests__/config/setup-vitest-preview.ts',
    ],
    css: true,
    globals: true,
  },
});
