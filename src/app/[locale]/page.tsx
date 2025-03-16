'use client';

import dynamic from 'next/dynamic';
import { ReactNode, useState } from 'react';
import Presentation from './components/DashboardPage/Presentation/Presentation';
import { useTranslations } from 'next-intl';
import arrowDown from '@/public/arrow-down.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage(): ReactNode {
  const [loadMore, setLoadMore] = useState(false);
  const onLoadMore = (): void => setLoadMore(true);
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
      loading: () => <p className='m-auto text-center'>{t('loading')}</p>,
    },
  );

  return (
    <>
      <div className='flex flex-col'>
        <Presentation className='flex-auto' />
        <Link href='#skills'>
          <div className='relative left-1/2 mt-8 h-12 w-12 pb-4 sm:h-15 sm:w-15'>
            <Image
              title={t('viewMoreAlt')}
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
