import { FC } from 'react';

interface SkillTermProps {
  text: string;
}

export const SkillTerm: FC<SkillTermProps> = ({ text }) => {
  return (
    <dt className='z-10 h-fit bg-background-secondary p-4 text-center shadow-lg dark:shadow-primary'>
      {text}
    </dt>
  );
};
