import { useTranslations } from 'next-intl';
import { Card } from './components/DashboardPage/Card';
import Image from 'next/image';
import photo from '@/public/img-profile.jpg';

export default function DashboardPage() {
  const t = useTranslations('dashboard');
  return (
    <section className='px-5'>
      <h1 className='pb-4 text-center text-4xl leading-tight font-extrabold sm:text-6xl md:py-24'>
        <span className='bg-span-bg bg-clip-text text-transparent'>
          {t('presentation')}
        </span>
      </h1>
      <div className='flex flex-auto flex-col gap-4 sm:justify-center md:flex-row md:gap-24 lg:gap-36'>
        <Card className='relative m-auto md:m-0'>
          <Image
            src={photo}
            alt={t('photoAlt')}
            priority
            fill
            sizes='(max-width: 768px) 50vw, 33w'
            style={{ objectFit: 'contain' }}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8cfdxGgAH7QLw5jB1YgAAAABJRU5ErkJggg=='
            placeholder='blur'
          />
        </Card>

        <Card
          title={t('middle_item_title')}
          text={t('middle_item_text')}
          className='bg-background-secondary p-2'
        />
        <Card
          title={t('right_item_title')}
          text={t('right_item_text')}
          className='bg-background-secondary p-2'
        />
      </div>
    </section>
  );
}
