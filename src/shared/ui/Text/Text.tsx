import { clsx } from 'clsx';

import { TailwindColors, TailwindSize, TailwindWeight, TComponent } from '@/shared/types';

interface IText {
  as?: TComponent
  children: React.ReactNode
  className?: string
  color?: TailwindColors
  size?: TailwindSize
  weight?: TailwindWeight
}

export const Text = ({
  as: Component = 'span',
  children,
  className,
  color,
  size,
  weight,
}: IText) => (
  <Component
    className={clsx(
      {
        [`${color}`]: color,
        [`${size}`]: size,
        [`${weight}`]: weight,
      },
      className,
    )}
  >
    {children}
  </Component>
);
