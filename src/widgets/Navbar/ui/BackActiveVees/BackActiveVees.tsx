import Link from 'next/link';

import { CrossIcon } from '@/shared/icons';
import { Background, Button, Flex, ModalBase, Text } from '@/shared/ui';

import { formatTimerTime, useTimer } from '@/features/Timer/client';

import { useVeesActive } from '@/entities/vees-active';

import styles from './backActiveVees.module.scss';

export const BackActiveVees = () => {
  const {
    completeWithoutSave,
    completeWithSave,
    dataVeesActive,
  } = useVeesActive();
  const { isRunning, time } = useTimer();

  if (!dataVeesActive) {
    return;
  }

  return (
    <Background
      className={styles.wrapper}
      opacity={true}
      radius="full"
    >
      <Link className={styles.content} href="/vees">
        <Text color="text-primary-400" size="text-sm">
          Вернуться к тренировке
        </Text>
        {/* TODO: Починить таймер */}
        {isRunning ? (
          <Text color="text-base-700" size={0.75}>
            Активный таймер
            {' '}
            {formatTimerTime(time)}
          </Text>
        ) : null}
      </Link>
      <ModalBase
        button={(
          <Button
            className={styles.close}
            color="base"
            iconOnly={true}
            radius="full"
            size="none"
          >
            <CrossIcon />
          </Button>
        )}
        title="Завершить тренировку?"
      >
        <Flex gap={12} vertical={true}>
          <Button
            full={true}
            onClick={completeWithSave}
            size="large"
            variant="solid"
          >
            Завершить и сохранить
          </Button>
          <Button
            color="red"
            full={true}
            onClick={completeWithoutSave}
            size="large"
            variant="light"
          >
            Завершить без сохранения
          </Button>
        </Flex>
      </ModalBase>
    </Background>
  );
};
