'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import LangSwitcher from './LangSwitcher';
import ThemeSwitch from './ThemeSwitch';
import githubMark from '@/public/github-mark.svg';
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
        <a
          href={t('githubPortfolio.href')}
          target='_blank'
          aria-label={t('githubPortfolio.label')}
          title={t('githubPortfolio.label')}
          rel='noopener noreferrer'
        >
          <div className='relative size-8'>
            <Image src={githubMark} alt={t('githubPortfolio.label')} fill />
          </div>
        </a>
      </div>
    </div>
  );
};
