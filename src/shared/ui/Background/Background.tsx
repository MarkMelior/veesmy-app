import { clsx } from 'clsx';

import { TComponent } from '@/shared/types';

import styles from './background.module.scss';

type TBorder = 'top' | 'right' | 'bottom' | 'left';

interface IBackground {
  as?: TComponent
  border?: TBorder | boolean
  children: React.ReactNode
  className?: string
  opacity?: boolean
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full'
}

export const Background = ({
  as: Component = 'div',
  border = true,
  children,
  className,
  opacity,
  radius = 'medium',
}: IBackground) => (
  <Component
    className={clsx(
      styles.wrapper,
      styles[`radius-${radius}`],
      {
        [styles.opacity]: opacity,
        [styles['border-all']]: border === true,
        [styles[`border-${border}`]]: border !== true && border,
      },
      className,
    )}
  >
    {children}
  </Component>
);
