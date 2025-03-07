import { useTranslations } from 'next-intl';

export default function DashboardPage() {
  const t = useTranslations('dashboard');
  return (
    <div className='p-5'>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-6xl leading-tight font-extrabold'>
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('presentation')}
          </span>
        </h1>
      </section>
      <section className='flex flex-auto flex-col gap-4 sm:flex-row sm:justify-center sm:gap-36'>
        <div className='bg-background-secondary p-4 text-center'>
          <h2 className='text-xl font-semibold'>{t('left_item_title')}</h2>
          <p className='text-text-secondary'>{t('left_item_text')}</p>
        </div>
        <div className='bg-background-secondary p-4 text-center'>
          <h2 className='text-xl font-semibold'>{t('middle_item_title')}</h2>
          <p className='text-text-secondary'>{t('middle_item_text')}</p>
        </div>
        <div className='bg-background-secondary p-4 text-center'>
          <h2 className='text-xl'>{t('right_item_title')}</h2>
          <p className='text-text-secondary'>{t('right_item_text')}</p>
        </div>
      </section>
    </div>
  );
}
