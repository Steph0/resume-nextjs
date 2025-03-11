import { FC } from 'react';

interface CardTitleProps {
  title?: string;
}

export const CardTitle: FC<CardTitleProps> = ({ title }) => {
  if (title) {
    return <h2 className='pb-5 text-center text-xl font-semibold'>{title}</h2>;
  }
};
