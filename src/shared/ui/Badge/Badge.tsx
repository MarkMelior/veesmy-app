import styles from './badge.module.scss';

interface IBadge {
  children?: React.ReactNode
  show?: boolean
}

export const Badge = ({
  children,
  show = true,
}: IBadge) => (
  <>{children}</>
);
