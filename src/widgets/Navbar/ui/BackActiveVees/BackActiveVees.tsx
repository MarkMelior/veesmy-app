import Link from 'next/link';

import { CrossIcon } from '@/shared/icons';
import { Background, Button, Text } from '@/shared/ui';

import styles from './backActiveVees.module.scss';

export const BackActiveVees = () => (
  <Background
    className={styles.wrapper}
    opacity={true}
    radius="full"
  >
    <Link className={styles.content} href="/vees">
      <Text color="text-primary-400" size="text-sm">
        Вернуться к тренировке
      </Text>
      <Text color="text-base-700" size={0.75}>
        Активный таймер 3:58
      </Text>
    </Link>
    <Button
      className={styles.close}
      color="base"
      iconOnly={true}
      radius="full"
      size="none"
    >
      <CrossIcon />
    </Button>
  </Background>
);
