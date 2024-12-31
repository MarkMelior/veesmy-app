import { clsx } from 'clsx';

import { TComponent } from '@/shared/types';

interface IText {
  as?: TComponent
  children: React.ReactNode
  className?: string
  color?: string
  size?: 'small' | 'base' | 'large' | number
  weight?: 'regular' | 'medium' | 'semibold' | 'bold' | number
}

export const Text = ({
  as: Component = 'span',
  children,
  className,
}: IText) => (
  <Component
    className={clsx(
      className,
    )}
  >
    {children}
  </Component>
);
