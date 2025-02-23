import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 12,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:testing-library/react',
    'prettier',
  ),
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.test.tsx', '**/*.test.ts'],
    ...testingLibrary.configs['flat/react'],
  },
];

export default eslintConfig;
