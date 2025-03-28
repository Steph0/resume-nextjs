import { FC, ReactNode } from 'react';

interface SkillDescriptionProps {
  text: string | ReactNode;
}

export const SkillDescription: FC<SkillDescriptionProps> = ({ text }) => {
  return (
    <dd className='mb-2 min-h-[3lh] content-center border border-primary p-2 sm:-ml-8 sm:mb-0 sm:mt-4 sm:pl-12'>
      {text}
    </dd>
  );
};
