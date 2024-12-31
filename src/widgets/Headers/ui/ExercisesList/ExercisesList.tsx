'use client';

import { AddOutlineIcon, ArrowLeftIcon, FinishOutlineIcon } from '@/shared/icons';
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
    rightActions={(
      <Button iconOnly={true}>
        <AddOutlineIcon />
      </Button>
    )}
    title="Тренировка"
  />
);
