import { clsx } from 'clsx';

import { TComponent } from '@/shared/types';

import styles from './flex.module.scss';

type TAlign = 'center' | 'start' | 'end';

interface IFlex {
  align?: TAlign
  as?: TComponent
  children: React.ReactNode
  className?: string
  full?: boolean
  gap?: 'small' | 'medium' | 'large' | number
  justify?: TAlign
  vertical?: boolean
  wrap?: boolean
}

export const Flex = ({
  align,
  as: Component = 'div',
  children,
  className,
  full,
  gap,
  justify,
  vertical,
  wrap,
}: IFlex) => (
  <Component
    className={clsx(
      styles.wrapper,
      {
        [styles.full]: full,
        [styles.vertical]: vertical,
        [styles.wrap]: wrap,
        [styles[`align-${align}`]]: align,
        [styles[`gap-${gap}`]]: typeof gap === 'string',
        [styles[`justify-${justify}`]]: justify,
      },
      className,
    )}
    styles={{ gap: typeof gap === 'number' ? `${gap}px` : undefined }}
  >
    {children}
  </Component>
);
