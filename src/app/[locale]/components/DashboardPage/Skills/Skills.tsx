import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

export default function Skills(): ReactNode {
  const t = useTranslations('Dashboard.Skills');

  return (
    <section id='skills' className='pb-5 sm:px-5'>
      <h1 className='py-5 text-4xl leading-tight font-extrabold'>
        {t('title')}
      </h1>
      <article>
        <h2 className='px-4 py-4 text-2xl leading-tight font-extrabold'>
          {t('languages.title')}
        </h2>

        <dl className='grid grid-cols-[max-content_1fr] gap-y-2'>
          <dt className='bg-background-secondary after-triangle relative mr-4 p-2 font-semibold after:-right-4 after:w-4'>
            {t('languages.fr.label')}
          </dt>
          <dd className='p-2'>{t('languages.fr.description')}</dd>

          <dt className='bg-background-secondary after-triangle relative mr-4 p-2 font-semibold after:-right-4 after:w-4'>
            {t('languages.en.label')}
          </dt>
          <dd className='p-2'>{t('languages.en.description')}</dd>

          <dt className='bg-background-secondary after-triangle relative mr-4 p-2 font-semibold after:-right-4 after:w-4'>
            {t('languages.jp.label')}
          </dt>
          <dd className='p-2'>{t('languages.jp.description')}</dd>
        </dl>
      </article>
    </section>
  );
}
