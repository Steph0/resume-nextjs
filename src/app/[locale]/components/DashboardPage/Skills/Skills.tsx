import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import { SkillDescription } from './SkillDescription';
import { SkillList } from './SkillList';
import { SkillTerm } from './SkillTerm';
import { SkillTitle } from './SkillTitle';

export default function Skills(): ReactNode {
  const t = useTranslations('Dashboard.Skills');

  return (
    <section id='skills' className='pb-5 sm:px-5'>
      <h1 className='pt-5 text-4xl font-extrabold leading-tight'>
        {t('title')}
      </h1>
      <article>
        <SkillTitle text={t('languages.title')} />

        <SkillList>
          <SkillTerm text={t('languages.fr.label')} />
          <SkillDescription text={t('languages.fr.description')} />

          <SkillTerm text={t('languages.en.label')} />
          <SkillDescription text={t('languages.en.description')} />

          <SkillTerm text={t('languages.jp.label')} />
          <SkillDescription text={t('languages.jp.description')} />
        </SkillList>
      </article>

      <article>
        <SkillTitle text={t('craftmanship.title')} />

        <SkillList>
          <SkillTerm text={t('craftmanship.craftmanship.label')} />
          <SkillDescription
            text={t.rich('craftmanship.craftmanship.description', {
              accelerate: (chunks) => (
                <a href='https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment#Accelerate_(book)'>
                  {chunks}
                </a>
              ),
              productmode: (chunks) => (
                <a href='https://martinfowler.com/articles/products-over-projects.html'>
                  {chunks}
                </a>
              ),
              br: () => <br />,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          />

          <SkillTerm text={t('craftmanship.backend.label')} />
          <SkillDescription
            text={t.rich('craftmanship.backend.description', {
              br: () => <br />,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          />

          <SkillTerm text={t('craftmanship.frontend.label')} />
          <SkillDescription
            text={t.rich('craftmanship.frontend.description', {
              br: () => <br />,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          />

          <SkillTerm text={t('craftmanship.platforms.label')} />
          <SkillDescription
            text={t.rich('craftmanship.platforms.description', {
              br: () => <br />,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          />

          <SkillTerm text={t('craftmanship.databases.label')} />
          <SkillDescription text={t('craftmanship.databases.description')} />
        </SkillList>
      </article>
    </section>
  );
}
