import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  title?: string;
  text?: string;
  className?: string;
}

export const Card: FC<CardProps> = ({ title, text, className, children }) => {
  return (
    <article
      className={cn('min-h-48 min-w-48 self-stretch text-center', className)}
    >
      <Title title={title} />
      <Text text={text} />
      {children}
    </article>
  );
};

const Title: FC<{ title?: string }> = ({ title }) => {
  if (title) {
    return <h2 className='text-xl font-semibold'>{title}</h2>;
  }
};

const Text: FC<{ text?: string }> = ({ text }) => {
  if (text) {
    return <p className='text-text-secondary'>{text}</p>;
  }
};
