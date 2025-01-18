'use client';

import { redirect } from 'next/navigation';

import { Card } from '@/widgets/Card';

import { AppRoutes } from '@/shared/constants';
import { FinishOutlineIcon, PaperOutlineIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { getDateInfo, getDateRangeDuration } from '@/shared/lib/date';
import { Alert, Button, Chip, Empty, Layout, List, Separator, Skeleton } from '@/shared/ui';
import { InfoBlock } from '@/shared/ui/client';

import { useVeesActive } from '@/entities/vees-active';

import styles from './index.module.scss';

export const ClientRender = () => {
  const {
    completeWithSave,
    dataVeesActive,
    errorVeesActive,
    loadingVeesActive,
  } = useVeesActive();

  if (loadingVeesActive) {
    return (
      <Layout>
        <Skeleton height={216} />
        <Separator size={32} />
        <Skeleton.List />
      </Layout>
    );
  }

  if (errorVeesActive) {
    return (
      <Alert
        closable={false}
        content="Ошибка загрузки активной тренировки!"
        description={errorVeesActive.message}
        type="error"
      />
    );
  }

  if (!dataVeesActive) {
    return (
      <Empty
        description={<Button>Начать</Button>}
        title="Начните тренировку!"
      />
    );
  }

  const { duration, exercises, exerciseTemplate, number } = dataVeesActive;

  // TODO: Усовершенствовать логику расчёта времени
  // Логика расчёта времени
  const endVeesTime = new Date(duration.from);

  endVeesTime.setMinutes(endVeesTime.getMinutes() + exercises.length * (3 * 6));
  const estimatedDuration = getDateRangeDuration(duration.from, endVeesTime);

  const { hours: hoursTo, minutes: minutesTo } = getDateInfo(endVeesTime);
  const { hours: hoursFrom, minutes: minutesFrom } = getDateInfo(duration.from);
  // * --- * //

  return (
    <>
      <Layout>
        <InfoBlock>
          <List.Item
            description={`~ конец в ${hoursTo}:${minutesTo}`}
            icon={<StopwatchOutlineIcon />}
            title="Расчётное время"
            value={`~ ${estimatedDuration}`}
          />
          <List.Item
            icon={<PaperOutlineIcon />}
            title="Тренировка"
            value={(
              <Chip.Category
                className="mt-1"
                customColor={exerciseTemplate?.color}
                isEdited={true}
                name={exerciseTemplate?.name ?? 'Пользовательская тренировка'}
                number={exerciseTemplate?.number}
                size="medium"
              />
            )}
          />
          <List.Horizontal
            items={[
              { title: 'Тренировка №', value: number },
              { title: 'Начало', value: `${hoursFrom}:${minutesFrom}` },
              { title: 'Упражнений', value: exercises.length },
            ]}
            showDivider={false}
          />
        </InfoBlock>
      </Layout>
      <Separator size={32} />
      <Layout padding={false}>
        <Card.VeesList items={exercises} />
        <Separator size={32} />
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
      </Layout>
    </>
  );
};
