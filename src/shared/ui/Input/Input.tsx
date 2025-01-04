import { clsx } from 'clsx';

import { Flex } from '@/shared/ui';

import styles from './input.module.scss';

interface IInput {
  className?: string
  onChange?: (value: string) => void
  placeholder?: string
  rightAction?: React.ReactNode
  type?: string
  value?: string
}

export const Input = ({
  className,
  onChange,
  placeholder,
  rightAction,
  type = 'text',
  value,
}: IInput) => (
  <Flex className={clsx(styles.wrapper, className)}>
    <input
      className={styles.input}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    {rightAction}
  </Flex>
);
