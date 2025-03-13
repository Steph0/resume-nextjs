import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <article className={cn('bg-background-secondary p-2', className)}>
      {children}
    </article>
  );
};
