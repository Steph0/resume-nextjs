import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    dirs: ['lib', 'messages', 'src', '__tests__'],
  },
};

export default withNextIntl(nextConfig);
