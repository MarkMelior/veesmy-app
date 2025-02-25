import { clsx } from 'clsx';

import type { TComponent, TailwindColors, TailwindSize, TailwindWeight } from '@/shared/types';

import styles from './text.module.scss';

interface IText {
  align?: 'text-center'
  as?: TComponent
  children: React.ReactNode
  className?: string
  color?: TailwindColors
  customColor?: string
  decoration?: 'line-through'
  size?: TailwindSize | number
  weight?: TailwindWeight
}

export const Text = ({
  align,
  as: Component = 'span',
  children,
  className,
  color,
  customColor,
  decoration,
  size,
  weight,
}: IText) => (
  <Component
    className={clsx(
      styles.text,
      {
        [`${align}`]: align,
        [`${color}`]: color,
        [`${decoration}`]: decoration,
        [`${size}`]: typeof size === 'string',
        [`${weight}`]: weight,
      },
      className,
    )}
    style={{
      color: customColor,
      fontSize: typeof size === 'number' ? `${size}rem` : undefined,
      lineHeight: typeof size === 'number' ? `${size + 0.5}rem` : undefined,
    }}
  >
    {children}
  </Component>
);
