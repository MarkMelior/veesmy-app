import { clsx } from 'clsx';

import type { TailwindColors } from '@/shared/types';
import { Text } from '@/shared/ui';

import styles from './chip.module.scss';

interface IChip {
  children?: React.ReactNode
  className?: string
  hidden?: boolean
  size?: 'small' | 'medium'
}

export const Chip = ({ children, className, hidden, size = 'small' }: IChip) => {
  if (hidden) {
    return null;
  }

  return (
    <span className={clsx(styles.chip, styles[`size-${size}`], className)}>
      {children}
    </span>
  );
};

interface ICategory extends IChip {
  color?: TailwindColors
  isEdited?: boolean
  name: string
  number?: number
}

const Category = ({
  className,
  color,
  isEdited,
  name,
  number,
  size,
}: ICategory) => (
  <Chip className={className} size={size}>
    {number && <Text color="text-base-700" size={0.8}>{`${number}.`}</Text>}
    <Text className={styles.name} color={color} size={0.8}>{name}</Text>
    {isEdited && <Text color="text-base-700" size={0.8}>(изм.)</Text>}
  </Chip>
);

Chip.Category = Category;
