import { clsx } from 'clsx';

import { TComponent } from '@/shared/types';

import styles from './layout.module.scss';

interface ILayout {
  as?: TComponent
  children: React.ReactNode
  className?: string
}

export const Layout = ({
  as: Component = 'div',
  children,
  className,
}: ILayout) => (
  <Component className={clsx(styles.wrapper, className)}>
    {children}
  </Component>
);
