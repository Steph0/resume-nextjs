import { FC } from 'react';

interface SkillTermProps {
  text: string;
}

export const SkillTerm: FC<SkillTermProps> = ({ text }) => {
  return (
    <dt className='bg-background-secondary dark:shadow-primary z-1 h-fit p-4 shadow-lg'>
      {text}
    </dt>
  );
};
