import { clsx } from 'clsx';

import { UserIcon } from '@/shared/icons';

import styles from './avatar.module.scss';

interface IAvatar {
  bordered?: boolean
}

export const Avatar = ({
  bordered = true,
}: IAvatar) => (
  <div className={styles.wrapper}>
    <span className={clsx({ [styles.bordered]: bordered })} />
    <div className={styles.avatar}>
      <UserIcon />
    </div>
  </div>
);
