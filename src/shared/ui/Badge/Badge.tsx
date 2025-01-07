import { clsx } from 'clsx';

import styles from './badge.module.scss';

interface IBadge {
  bordered?: boolean
  children?: React.ReactNode
  show?: boolean
}

export const Badge = ({
  bordered = true,
  children,
  show = true,
}: IBadge) => show ? (
  <div className={styles.badge}>
    <div className={clsx({ [styles.mask]: bordered })}>
      {children}
    </div>
  </div>
) : children;
