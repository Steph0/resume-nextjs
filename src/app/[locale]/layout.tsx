import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode, use } from 'react';
import { Header } from './components/Header/Header';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/src/app/[locale]/components/Header/ThemeProvider';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});
export const metadata: Metadata = {
  title: 'Stephen M. resume',
  description: 'Stephen M. resume - NextJs (React)',
};

export default function RootLayout(props: {
  children: ReactNode;
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
      className={cn(notoSansJP.variable, 'font-sans', 'h-full scroll-smooth')}
      suppressHydrationWarning
    >
      <body className='bg-background text-primary m-auto flex h-full w-full max-w-(--breakpoint-2xl) flex-col overflow-auto'>
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
            <main className='h-full flex-auto px-5'>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
