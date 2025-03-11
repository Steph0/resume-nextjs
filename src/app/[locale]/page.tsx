import { useTranslations } from 'next-intl';
import { Card } from './components/DashboardPage/Card';
import Image from 'next/image';
import photo from '@/public/img-profile.jpg';
import { CardTitle } from './components/DashboardPage/CardTitle';
import { CardText } from './components/DashboardPage/CardText';

export default function DashboardPage() {
  const t = useTranslations('Dashboard');
  return (
    <section className='px-5'>
      <h1 className='text-center text-4xl leading-tight font-extrabold sm:text-6xl md:py-24'>
        <span className='bg-span-bg bg-clip-text text-transparent'>
          {t('presentation')}
        </span>
      </h1>
      <div className='md:flex md:flex-auto md:flex-row md:justify-evenly'>
        <div className='my-4 shadow-xl md:m-0 md:flex md:w-2/6 md:flex-row'>
          <div className='relative min-h-56 sm:m-auto sm:max-w-1/2 md:m-0 md:w-1/3'>
            <Image
              src={photo}
              alt={t('photoAlt')}
              fill
              sizes='(max-width: 768px) 50vw, 33w'
              style={{ objectFit: 'cover' }}
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8cfdxGgAH7QLw5jB1YgAAAABJRU5ErkJggg=='
              placeholder='blur'
            />
          </div>

          <Card className='md:w-2/3'>
            <CardTitle title={t('profileTitle')} />
            <CardText text={t('profileText')} />
          </Card>
        </div>

        <Card className='shadow-xl md:w-2/6'>
          <CardTitle title={t('aboutThisWebsiteTitle')}></CardTitle>
          <CardText
            text={t.rich('aboutThisWebsiteText', {
              br: () => <br />,
            })}
          />
        </Card>
      </div>
    </section>
  );
}
