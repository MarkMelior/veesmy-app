import { clsx } from 'clsx';
import Link from 'next/link';

import styles from './button.module.scss';

interface IButton {
  children?: React.ReactNode
  className?: string
  color?: 'default' | 'primary' // TODO: all color
  full?: boolean
  iconOnly?: boolean
  onClick?: () => void
  radius?: 'medium' | 'full'
  size?: 'medium' | 'large'
  to?: string
  variant?: 'solid' | 'light' | 'flat' // TODO: flat
}

export const Button = ({
  children,
  className,
  color = 'primary',
  full,
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
          [styles.full]: full,
          [styles.iconOnly]: iconOnly,
        },
        className,
      )}
      href={to ?? '#'}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};
