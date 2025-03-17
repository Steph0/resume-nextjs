'use client';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import React, { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { Button } from './Button';
import { capitalize } from '@/src/app/lib/utils';
import { usePathname } from '@/src/i18n/routing';

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
  }
  const pathname = usePathname();
  const urlSegments = useSelectedLayoutSegments();

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
  const options: Option[] = [
    { country: 'English', code: 'en' },
    { country: '日本語', code: 'ja' },
  ];

  return (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <Button
          className='text-destructive inline-flex w-full items-center justify-between gap-3'
          size='small'
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          Language
          <FiGlobe />
        </Button>
        {isOptionsExpanded && (
          <div className='bg-dropdown absolute right-0 mt-2 w-full origin-top-right rounded-md shadow-lg'>
            <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              {options.map((lang) => {
                return (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/${urlSegments.join('/')}`}
                  >
                    <button
                      lang={lang.code}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      className={`hover:bg-dropdownHover block w-full px-4 py-2 text-left text-sm ${
                        pathname === `/${lang.code}`
                          ? 'bg-selected text-primary hover:bg-selected'
                          : 'text-secondary'
                      }`}
                    >
                      {capitalize(lang.country)}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LangSwitcher;
