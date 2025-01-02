import { clsx } from 'clsx';

import { TComponent } from '@/shared/types';

import styles from './layout.module.scss';

interface ILayout {
  as?: TComponent
  children: React.ReactNode
  className?: string
  padding?: boolean
}

export const Layout = ({
  as: Component = 'div',
  children,
  className,
  padding = true,
}: ILayout) => (
  <Component className={clsx(styles.wrapper, { [styles.padding]: padding }, className)}>
    {children}
  </Component>
);
