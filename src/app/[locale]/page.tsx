'use client';

import dynamic from 'next/dynamic';
import { ReactNode, useState } from 'react';
import Presentation from './components/DashboardPage/Presentation/Presentation';
import { useTranslations } from 'next-intl';
import arrowDown from '@/public/arrow-down.svg';
import Image from 'next/image';

export default function DashboardPage(): ReactNode {
  const [loadMore, setLoadMore] = useState(false);
  const onLoadMore = (): void => setLoadMore(true);
  const t = useTranslations('Dashboard');

  const DynamicSkills = dynamic(
    () => import('./components/DashboardPage/Skills/Skills'),
    {
      loading: () => <p>{t('loading')}</p>,
    },
  );

  return (
    <>
      <div className='flex h-full flex-col'>
        <Presentation className='flex-auto' />
        <div className='relative m-auto mb-4 h-12 w-12 sm:h-15 sm:w-15'>
          <Image
            src={arrowDown}
            alt={t('viewMoreAlt')}
            sizes='10w'
            fill
            onClick={onLoadMore}
            className='cursor-pointer object-contain'
          />
        </div>
      </div>
      {loadMore && <DynamicSkills />}
    </>
  );
}
