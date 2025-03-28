'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ReactNode, useEffect, useState } from 'react';
import Presentation from './components/DashboardPage/Presentation/Presentation';
import arrowDown from '@/public/arrow-down.svg';

export default function DashboardPage(): ReactNode {
  const [loadMore, setLoadMore] = useState(false);
  const onLoadMore = (): void => setLoadMore(true);

  const params = useSearchParams();

  useEffect(() => {
    if (window?.location?.hash === '#skills') {
      setLoadMore(true);
    }
  }, [params]);

  const t = useTranslations('Dashboard');

  const DynamicSkills = dynamic(
    () =>
      import('./components/DashboardPage/Skills/Skills').then((mod) => {
        setTimeout(() => {
          const element = document.getElementById('skills');
          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);

        return mod.default;
      }),
    {
      loading: () => (
        <p className='m-auto my-4 text-center font-bold'>{t('loading')}</p>
      ),
    },
  );

  return (
    <>
      <div className='flex flex-col' onWheel={onLoadMore}>
        <Presentation className='flex-auto' />
        <Link href='#skills' title={t('viewMoreAlt')}>
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
      {loadMore && <DynamicSkills />}
    </>
  );
}
