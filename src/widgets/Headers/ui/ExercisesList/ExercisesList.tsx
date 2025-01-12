import { AppRoutes } from '@/shared/constants';
import { ArrowLeftIcon, FinishOutlineIcon } from '@/shared/icons';
import { Button, Header } from '@/shared/ui';

import { ClientRender } from './client';

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
    rightActions={<ClientRender />}
    title="Тренировка"
  />
);
