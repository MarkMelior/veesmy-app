import styles from './separator.module.scss';

interface ISeparator {
  size?: number
}

export const Separator = ({ size = 16 }: ISeparator) => (
  <hr className={styles.separator} style={{ height: `${size}px` }} />
);
