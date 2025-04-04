import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
import { ThemeProvider } from '@/src/app/[locale]/components/Header/ThemeProvider';
import { cn } from '@/src/app/lib/utils';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});
export const metadata: Metadata = {
  title: "Hi! I'm Stephen",
  description: 'Stephen Mehaut portfolio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
      <body className='max-w-(--breakpoint-2xl) m-auto flex h-full w-full flex-col overflow-auto bg-background text-primary'>
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
