import { clsx } from 'clsx';

import { LogoIcon } from '@/shared/icons';
import { Loading as LoadingComponent, Text } from '@/shared/ui';

import styles from './loading.module.scss';

const Loading = () => (
  <section className={styles.wrapper}>
    <div className={clsx(styles.content, styles.animation)}>
      <LoadingComponent
        className={styles.loading}
        color="text-base-50"
        size="large"
      />
      <LogoIcon height={84} width={84} />
    </div>
    <Text align="text-center" className={styles.animation}>Загрузка...</Text>
  </section>
);

export default Loading;
