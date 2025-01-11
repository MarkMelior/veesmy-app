import { AppRoutes } from '@/shared/constants';
import { ArrowLeftIcon, FinishOutlineIcon } from '@/shared/icons';
import { Button, Header } from '@/shared/ui';

import { AddExerciseModal } from '@/features/AddExerciseModal/client';

import { getExerciseGroup } from '@/entities/exercise-group';

export const ExercisesList = async () => {
  const exerciseGroupData = await getExerciseGroup();

  return (
    <Header
      leftActions={(
        <>
          <Button iconOnly={true} to={AppRoutes.MAIN}>
            <ArrowLeftIcon />
          </Button>
          {/* TODO: Вынести кнопку в features */}
          <Button iconOnly={true}>
            <FinishOutlineIcon />
          </Button>
        </>
      )}
      rightActions={<AddExerciseModal items={exerciseGroupData} />}
      title="Тренировка"
    />
  );
};
