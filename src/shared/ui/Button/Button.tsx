import { clsx } from 'clsx';
import Link from 'next/link';

import styles from './button.module.scss';

interface IButton {
  align?: 'start' | 'center' | 'end'
  children?: React.ReactNode
  className?: string
  color?: 'base' | 'primary'
  disabled?: boolean
  full?: boolean
  icon?: React.ReactNode
  iconOnly?: boolean
  isActiveAnimation?: boolean
  onClick?: () => void
  radius?: 'none' | 'medium' | 'full'
  size?: 'none' | 'medium' | 'large'
  to?: string
  variant?: 'solid' | 'light' | 'flat' | 'none'
}

export const Button = ({
  align = 'center',
  children,
  className,
  color = 'primary',
  disabled,
  full,
  icon,
  iconOnly,
  isActiveAnimation = true,
  onClick,
  radius = 'medium',
  size = 'medium',
  to,
  variant = 'light',
}: IButton) => {
  const Component = !disabled && to ? Link : 'button';

  return (
    <Component
      className={clsx(
        styles.wrapper,
        styles[`variant-${variant}`],
        styles[`radius-${radius}`],
        styles[`color-${color}`],
        styles[`size-${size}`],
        styles[`align-${align}`],
        {
          [styles.activeAnimation]: isActiveAnimation,
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
