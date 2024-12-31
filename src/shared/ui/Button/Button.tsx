import { clsx } from 'clsx';

import styles from './button.module.scss';

interface IButton {
  children?: React.ReactNode
  className?: string
  iconOnly?: boolean
  onClick?: () => void
}

export const Button = ({
  children,
  className,
  iconOnly,
  onClick,
}: IButton) => (
  <button
    className={clsx(styles.wrapper, { [styles.iconOnly]: iconOnly }, className)}
    onClick={onClick}
  >
    {children}
  </button>
);
