import { clsx } from 'clsx';

import { Flex } from '../Flex';

import styles from './skeleton.module.scss';

interface ISkeleton {
  className?: string
  height?: string | number
  width?: string | number
}

export const Skeleton = ({ className, height, width }: ISkeleton) => (
  <div className={clsx(styles.skeleton, className)} style={{ height, width }} />
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
