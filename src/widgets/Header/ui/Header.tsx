import styles from './header.module.scss';

interface IHeader {
  description?: string
  leftActions?: React.ReactNode
  placement?: 'center' | 'left'
  rightActions?: React.ReactNode
  title: string
}

export const Header = ({
  description,
  leftActions,
  placement,
  rightActions,
  title,
}: IHeader) => (
  <div className={styles.wrapper}>Header</div>
);
