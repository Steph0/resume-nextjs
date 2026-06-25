'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactNode, useEffect, useState } from 'react';
import Presentation from './components/DashboardPage/Presentation/Presentation';
import Skills from './components/DashboardPage/Skills/Skills';
import arrowDown from '@/public/arrow-down.svg';
import { Link, usePathname, useRouter } from '@/src/i18n/routing';

export default function DashboardPage(): ReactNode {
  const pathname = usePathname();
  const router = useRouter();
  const [loadMore, setLoadMore] = useState(pathname === '/skills');

  const onLoadMore = (): void => {
    if (!loadMore) {
      setLoadMore(true);
      if (pathname !== '/skills') {
        router.replace('/skills', { scroll: false });
      }
    }
  };

  useEffect(() => {
    if (loadMore) {
      const timer = setTimeout(() => {
        const element = document.getElementById('skills');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loadMore]);

  const t = useTranslations('Dashboard');

  return (
    <>
      <div
        className='flex flex-col'
        onWheel={onLoadMore}
        onTouchMove={onLoadMore}
      >
        <Presentation className='flex-auto' onLoadMore={onLoadMore} />
        <Link href='/skills' scroll={false} title={t('viewMoreAlt')}>
          <div className='sm:h-15 sm:w-15 relative left-1/2 mt-8 h-14 w-14 pb-4 dark:invert'>
            <Image
              src={arrowDown}
              alt={t('viewMoreAlt')}
              sizes='10w'
              fill
              onClick={onLoadMore}
              style={{
                left: '-50%',
              }}
              className='cursor-pointer object-contain'
            />
          </div>
        </Link>
      </div>
      <Skills className={loadMore ? 'animate-fade-in' : 'hidden'} />
    </>
  );
}
