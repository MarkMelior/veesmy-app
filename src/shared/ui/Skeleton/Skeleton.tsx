import { clsx } from 'clsx';

import { Flex } from '../Flex';

import styles from './skeleton.module.scss';

interface ISkeleton {
  className?: string
  height?: string | number
  isAnimated?: boolean
  radius?: 'none' | 'medium'
  width?: string | number
}

export const Skeleton = ({
  className,
  height,
  isAnimated = true,
  radius = 'medium',
  width,
}: ISkeleton) => (
  <div
    className={clsx(
      styles.skeleton,
      styles[`radius-${radius}`],
      { [styles.animated]: isAnimated },
      className,
    )}
    style={{ height, width }}
  />
);

const List = () => (
  <Flex gap={12} vertical={true}>
    <Skeleton width="30%" />
    <Skeleton />
    <Skeleton />
    <Skeleton width="70%" />
  </Flex>
);

Skeleton.List = List;
