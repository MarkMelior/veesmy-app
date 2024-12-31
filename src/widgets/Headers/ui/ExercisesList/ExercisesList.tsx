'use client';

import { AddIcon } from '@/shared/icons';
import { Button, Header } from '@/shared/ui';

export const ExercisesList = () => (
  <Header
    description="Сегодня вторник 10.12"
    leftActions={(
      <>
        <Button>Back</Button>
        <Button>Finish</Button>
      </>
    )}
    rightActions={<Button iconOnly={true}><AddIcon /></Button>}
    title="Тренировка"
  />
);
