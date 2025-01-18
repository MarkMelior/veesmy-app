'use client';

import { useEffect } from 'react';

import { Card } from '@/widgets/Card';
import { Headers } from '@/widgets/Headers';

import { PaperOutlineIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { getDateInfo, getDateRangeDuration } from '@/shared/lib/date';
import { Alert, Chip, Layout, List, Separator, Skeleton } from '@/shared/ui';
import { InfoBlock } from '@/shared/ui/client';

import { useVees } from '@/entities/vees';

interface IClientRender {
  id: string
}

export const ClientRender = ({ id }: IClientRender) => {
  const { dataVees, errorVees, loadingVees, onGetVeesById } = useVees();

  useEffect(() => {
    onGetVeesById(id);
  }, []);

  if (loadingVees) {
    return (
      <>
        <Skeleton height={65} isAnimated={false} radius="none" />
        <Separator size={18} />
        <Layout>
          <Skeleton height={216} />
          <Separator size={32} />
          <Skeleton.List />
        </Layout>
      </>
    );
  }

  if (errorVees) {
    return (
      <Alert
        closable={false}
        content="Ошибка загрузки тренировки!"
        description={errorVees.message}
        type="error"
      />
    );
  }

  if (!dataVees) {
    return;
  }

  const {
    duration,
    exercises,
    exerciseTemplate,
    number,
  } = dataVees;

  const { hours: hoursFrom, minutes: minutesFrom } = getDateInfo(duration.from);
  const { day, hours: hoursTo, minutes: minutesTo, monthName } = getDateInfo(duration.to);

  const rangeDuration = getDateRangeDuration(duration.from, duration.to);

  return (
    <>
      <Headers.VeesPost title={`${day} ${monthName}`} />
      <main>
        <Layout>
          <InfoBlock>
            <List.Item
              description={`${hoursFrom}:${minutesFrom} - ${hoursTo}:${minutesTo}`}
              icon={<StopwatchOutlineIcon />}
              title="Длительность тренировки"
              value={rangeDuration}
            />
            <List.Item
              icon={<PaperOutlineIcon />}
              title="Шаблон тренировки"
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
                { title: 'Упражнений', value: exercises.length },
              ]}
              showDivider={false}
            />
          </InfoBlock>
        </Layout>
        <Separator size={32} />
        <Layout padding={false}>
          <Card.VeesList isEditable={false} items={exercises} />
        </Layout>
      </main>
    </>
  );
};
