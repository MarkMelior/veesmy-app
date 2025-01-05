import { clsx } from 'clsx';

import styles from './skeleton.module.scss';

interface ISkeleton {
  className?: string
  style?: React.CSSProperties
}

export const Skeleton = ({ className, style }: ISkeleton) => (
  <div className={clsx(styles.skeleton, className)} style={style} />
);
