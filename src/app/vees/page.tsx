import { Card } from '@/widgets/Card';
import { Headers } from '@/widgets/Headers';

import { PaperOutlineIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { getDateInfo, getDateRangeDuration } from '@/shared/lib/date';
import { Chip, Layout, List, Separator } from '@/shared/ui';
import { InfoBlock } from '@/shared/ui/client';

import { Timer } from '@/features/Timer/client';

import { getVeesActive } from '@/entities/vees';

const Vees = async () => {
  const { duration, exercises, exerciseTemplate, number } = await getVeesActive();

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
      <Headers.ExercisesList />
      <main>
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
        </Layout>
      </main>
      <Timer />
    </>
  );
};

export default Vees;
