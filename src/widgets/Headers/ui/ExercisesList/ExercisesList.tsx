import { AddExerciseModal } from '@/widgets/AddExerciseModal';
import { mockAddExerciseModal } from '@/widgets/AddExerciseModal/model/mock';

import { ArrowLeftIcon, FinishOutlineIcon } from '@/shared/icons';
import { Button, Header } from '@/shared/ui';

export const ExercisesList = () => (
  <Header
    leftActions={(
      <>
        <Button iconOnly={true} to="/">
          <ArrowLeftIcon />
        </Button>
        <Button iconOnly={true}>
          <FinishOutlineIcon />
        </Button>
      </>
    )}
    rightActions={<AddExerciseModal items={mockAddExerciseModal} />}
    title="Тренировка"
  />
);
