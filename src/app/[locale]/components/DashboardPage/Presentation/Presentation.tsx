import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import { Card } from './Card';
import { CardText } from './CardText';
import { CardTitle } from './CardTitle';
import githubMark from '@/public/github-mark.svg';
import photo from '@/public/img-profile.jpg';

interface PresentationProps {
  className?: string;
}

export default function Presentation({
  className,
}: PresentationProps): ReactNode {
  const t = useTranslations('Dashboard.Presentation');
  return (
    <section className={className}>
      <h1 className='text-center text-4xl font-extrabold leading-tight sm:text-6xl md:py-24'>
        <span className='bg-span-bg bg-clip-text text-transparent'>
          {t('title')}
        </span>
      </h1>
      <div className='md:flex md:flex-auto md:flex-row md:justify-evenly'>
        <div className='my-4 shadow-xl md:m-0 md:flex md:w-2/6 md:flex-row'>
          <div className='sm:max-w-1/2 relative min-h-56 sm:m-auto md:m-0 md:w-1/3'>
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
            <CardText
              text={t.rich('profileText', {
                readmore: (chunks) => (
                  <Link passHref replace={true} scroll={true} href='#skills'>
                    {chunks}
                  </Link>
                ),
                br: () => <br />,
              })}
            />
          </Card>
        </div>

        <Card className='shadow-xl md:w-2/6'>
          <CardTitle title={t('aboutThisWebsiteTitle')}></CardTitle>
          <CardText
            text={t.rich('aboutThisWebsiteText', {
              br: () => <br />,
              nextJs: (chunks) => (
                <a
                  href='https://nextjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {chunks}
                </a>
              ),
              testingLibrary: (chunks) => (
                <a
                  href='https://testing-library.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {chunks}
                </a>
              ),
              githubPortfolio: (chunks) => (
                <a
                  href={t('githubPortfolio.href')}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='relative mr-1 inline-block size-4 align-middle dark:invert'>
                    <Image src={githubMark} alt={''} fill />
                  </span>
                  {chunks}
                </a>
              ),
            })}
          />
        </Card>
      </div>
    </section>
  );
}
