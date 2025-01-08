import { AddExerciseModal } from '@/widgets/AddExerciseModal/client';
import { mockAddExerciseModal } from '@/widgets/AddExerciseModal/model/mock';

import { AppRoutes } from '@/shared/constants';
import { ArrowLeftIcon, FinishOutlineIcon } from '@/shared/icons';
import { Button, Header } from '@/shared/ui';

export const ExercisesList = () => (
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
    rightActions={<AddExerciseModal items={mockAddExerciseModal} />}
    title="Тренировка"
  />
);
