import { clsx } from 'clsx';

import styles from './divider.module.scss';

interface IDivider {
  className?: string
  size?: 'none' | 'small'
}

export const Divider = ({ className, size = 'small' }: IDivider) => (
  <hr className={clsx(styles.divider, styles[`size-${size}`], className)} />
);
