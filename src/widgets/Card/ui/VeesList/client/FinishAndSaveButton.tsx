'use client';

import { redirect } from 'next/navigation';

import { AppRoutes } from '@/shared/constants';
import { FinishOutlineIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

import { useVeesActive } from '@/entities/vees';

import styles from './finishAndSaveButton.module.scss';

export const FinishAndSaveButton = () => {
  const { completeWithSave } = useVeesActive();

  return (
    <Button
      className={styles.button}
      icon={<FinishOutlineIcon height={22} width={22} />}
      onClick={() => {
        completeWithSave();
        redirect(AppRoutes.MAIN);
      }}
      variant="none"
    >
      Завершить и сохранить
    </Button>
  );
};
