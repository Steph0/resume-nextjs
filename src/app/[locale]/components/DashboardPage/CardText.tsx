import { FC, ReactNode } from 'react';

interface CardTextProps {
  text?: string | ReactNode;
}

export const CardText: FC<CardTextProps> = ({ text }) => {
  return <p className='text-text-secondary text-justify'>{text}</p>;
};
