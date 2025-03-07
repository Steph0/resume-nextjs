'use client';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import GithubIcon from '../../icons/github';
import LangSwitcher from './LangSwitcher';
import ThemeSwitch from './ThemeSwitch';
import { HomeIcon } from '@/src/app/icons/home';
import { Link } from '@/src/i18n/routing';

interface Props {
  locale: string;
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('header');
  return (
    <div className='mx-auto flex max-w-(--breakpoint-2xl) flex-row items-center justify-between p-5 print:hidden'>
      <nav className='text-button mr-10 inline-flex gap-5'>
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
          <div className='size-8'>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  );
};
