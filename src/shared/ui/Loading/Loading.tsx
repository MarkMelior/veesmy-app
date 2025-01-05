import { clsx } from 'clsx';

import { TailwindColors } from '@/shared/types';

import styles from './loading.module.scss';

interface ILoading {
  className?: string
  color?: TailwindColors
}

export const Loading = ({ className, color = 'text-primary-500' }: ILoading) => (
  <span aria-label="Loading" className={clsx(styles.wrapper, color, className)}>
    <i className={clsx(styles.item, styles.first)} />
    <i className={clsx(styles.item, styles.second)} />
  </span>
);
