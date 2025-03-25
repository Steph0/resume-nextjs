import { FC } from 'react';

interface SkillTitleProps {
  text: string;
}

export const SkillTitle: FC<SkillTitleProps> = ({ text }) => {
  return (
    <h2 className='px-4 py-6 text-2xl leading-tight font-extrabold'>{text}</h2>
  );
};
