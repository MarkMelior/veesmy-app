import { clsx } from 'clsx';

import { TailwindColors, TailwindSize, TailwindWeight, TComponent } from '@/shared/types';

import styles from './text.module.scss';

interface IText {
  as?: TComponent
  children: React.ReactNode
  className?: string
  color?: TailwindColors
  size?: TailwindSize | number
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
      styles.text,
      {
        [`${color}`]: color,
        [`${size}`]: typeof size === 'string',
        [`${weight}`]: weight,
      },
      className,
    )}
    style={{
      fontSize: typeof size === 'number' ? `${size}rem` : undefined,
      lineHeight: typeof size === 'number' ? `${size + 0.5}rem` : undefined,
    }}
  >
    {children}
  </Component>
);
