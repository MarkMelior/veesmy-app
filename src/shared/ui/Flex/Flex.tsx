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
  id?: string
  justify?: TAlign | 'between'
  style?: React.CSSProperties
  vertical?: boolean
  wrap?: boolean
}

export const Flex = ({
  align,
  as: Component = 'div',
  children,
  className,
  full = true,
  gap,
  id,
  justify,
  style,
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
    id={id}
    style={{ gap: typeof gap === 'number' ? `${gap}px` : undefined, ...style }}
  >
    {children}
  </Component>
);
