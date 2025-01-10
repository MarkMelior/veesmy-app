import { clsx } from 'clsx';

import styles from './checkbox.module.scss';

interface ICheckbox {
  checked?: boolean
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export const Checkbox = ({
  checked,
  className,
  onClick,
}: ICheckbox) => (
  <div
    className={clsx(styles.checkbox, { [styles.checked]: checked }, className)}
    onClick={onClick}
  />
);
