import { use } from 'react';
import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider';
import type { Metadata } from 'next';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Header } from './components/Header';
import './globals.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});
export const metadata: Metadata = {
  title: 'Stephen M. resume',
  description: 'Stephen M. resume - NextJs (React)',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = use(props.params);

  const { locale } = params;

  const { children } = props;

  const messages = useMessages();
  return (
    <html
      lang={locale}
      dir={'ltr'}
      className={'scroll-smooth'}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='light'
          themes={['light', 'dark']}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing='ease'
              speed={200}
              shadow='0 0 10px #2299DD,0 0 5px #2299DD'
              color='var(--primary)'
              showSpinner={false}
            />
            <Header locale={locale} />
            <main className='mx-auto max-w-screen-2xl'>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
