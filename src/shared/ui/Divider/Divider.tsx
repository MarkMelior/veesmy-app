import { clsx } from 'clsx';

import styles from './divider.module.scss';

interface IDivider {
  className?: string
}

export const Divider = ({ className }: IDivider) => (
  <hr className={clsx(styles.divider, className)} />
);
