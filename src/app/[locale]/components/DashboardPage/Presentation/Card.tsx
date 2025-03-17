import { FC, PropsWithChildren } from 'react';
import { cn } from '@/src/app/lib/utils';

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
