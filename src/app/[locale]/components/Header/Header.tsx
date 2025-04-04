'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import LangSwitcher from './LangSwitcher';
import ThemeSwitch from './ThemeSwitch';
import linkedinMark from '@/public/linkedin-mark.svg';
import { HomeIcon } from '@/src/app/[locale]/components/Header/icons/home';
import { Link } from '@/src/i18n/routing';

interface Props {
  locale: string;
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('Header');
  return (
    <div className='flex w-full max-w-screen-2xl flex-row items-center justify-between p-5 print:hidden'>
      <nav className='mr-10 inline-flex gap-5 text-button'>
        <Link
          lang={locale}
          href={`/`}
          className='size-8'
          title={t('home')}
          aria-label={t('home')}
        >
          <HomeIcon />
        </Link>
      </nav>
      <div className='flex flex-row items-center gap-3'>
        <ThemeSwitch />
        <LangSwitcher />
        <p className='relative size-8'>
          <a
            href={t('linkedinProfile.href')}
            target='_blank'
            aria-label={t('linkedinProfile.label')}
            title={t('linkedinProfile.label')}
            rel='noopener noreferrer'
            className='absolute size-8'
          >
            <Image src={linkedinMark} alt={t('linkedinProfile.label')} fill />
          </a>
        </p>
      </div>
    </div>
  );
};
