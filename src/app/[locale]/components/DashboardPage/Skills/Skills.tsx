import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

export default function Skills(): ReactNode {
  const t = useTranslations('Dashboard.Skills');
  return (
    <section>
      <h1>{t('title')}</h1>
    </section>
  );
}
