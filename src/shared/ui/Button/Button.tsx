import { clsx } from 'clsx';
import Link from 'next/link';

import styles from './button.module.scss';

interface IButton {
  children?: React.ReactNode
  className?: string
  full?: boolean
  iconOnly?: boolean
  onClick?: () => void
  to?: string
}

export const Button = ({
  children,
  className,
  full,
  iconOnly,
  onClick,
  to,
}: IButton) => {
  const Component = to ? Link : 'button';

  return (
    <Component
      className={clsx(
        styles.wrapper,
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
