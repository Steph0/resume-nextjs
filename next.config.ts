import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['lib', 'messages', 'src'],
  },
};

export default withNextIntl(nextConfig);
