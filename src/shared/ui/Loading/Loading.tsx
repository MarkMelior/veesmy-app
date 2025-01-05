import { clsx } from 'clsx';

import { TailwindColors } from '@/shared/types';

import styles from './loading.module.scss';

interface ILoading {
  className?: string
  color?: TailwindColors
  size?: 'small' | 'medium' | 'large'
}

export const Loading = ({
  className,
  color = 'text-primary-500',
  size = 'small',
}: ILoading) => (
  <span
    aria-label="Loading"
    className={clsx(
      styles.wrapper,
      color,
      styles[`size-${size}`],
      className,
    )}
  >
    <i className={clsx(styles.item, styles.first)} />
    <i className={clsx(styles.item, styles.second)} />
  </span>
);
