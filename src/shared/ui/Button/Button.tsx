import { clsx } from 'clsx';
import Link from 'next/link';

import styles from './button.module.scss';

interface IButton {
  children?: React.ReactNode
  className?: string
  color?: 'base' | 'primary'
  disabled?: boolean
  full?: boolean
  icon?: React.ReactNode
  iconOnly?: boolean
  onClick?: () => void
  radius?: 'medium' | 'full'
  size?: 'medium' | 'large'
  to?: string
  variant?: 'solid' | 'light' | 'flat'
}

export const Button = ({
  children,
  className,
  color = 'primary',
  disabled,
  full,
  icon,
  iconOnly,
  onClick,
  radius = 'medium',
  size = 'medium',
  to,
  variant = 'light',
}: IButton) => {
  const Component = to ? Link : 'button';

  return (
    <Component
      className={clsx(
        styles.wrapper,
        styles[`variant-${variant}`],
        styles[`radius-${radius}`],
        styles[`color-${color}`],
        styles[`size-${size}`],
        {
          [styles.disabled]: disabled,
          [styles.full]: full,
          [styles.iconOnly]: iconOnly,
        },
        className,
      )}
      disabled={disabled}
      href={to ?? '#'}
      onClick={onClick}
    >
      {icon}
      {children}
    </Component>
  );
};
