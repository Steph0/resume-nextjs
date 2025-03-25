import { FC, PropsWithChildren } from 'react';

export const SkillList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <dl className='sm:grid sm:auto-rows-fr sm:grid-cols-[max-content_1fr] sm:gap-y-2'>
      {children}
    </dl>
  );
};
