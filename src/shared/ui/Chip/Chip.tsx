import { clsx } from 'clsx';

import styles from './chip.module.scss';

interface IChip {
  children?: React.ReactNode
  size?: 'small' | 'medium'
}

export const Chip = ({ children, size = 'small' }: IChip) => (
  <span className={clsx(styles.chip, styles[`size-${size}`])}>
    {children}
  </span>
);
