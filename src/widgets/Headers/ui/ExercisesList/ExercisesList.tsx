'use client';

import { AppRoutes } from '@/shared/constants';
import { ArrowLeftIcon, FinishOutlineIcon } from '@/shared/icons';
import { Button, Header } from '@/shared/ui';

import { useLoading } from '@/entities/loading';

import { ClientRender } from './client';

export const ExercisesList = () => {
  const { loading } = useLoading();

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
      loading={loading}
      rightActions={<ClientRender />}
      title="Тренировка"
    />
  );
};
