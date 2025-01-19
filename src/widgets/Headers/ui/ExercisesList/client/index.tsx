'use client';

import { useEffect } from 'react';

import { openMessage } from '@/shared/lib/open-message';

import { AddExerciseModal } from '@/features/AddExerciseModal/client';

import { useExerciseGroups } from '@/entities/exercise-groups';
import { useVeesActive } from '@/entities/vees-active';

export const ClientRender = () => {
  const { dataExerciseGroup, loadExerciseGroup } = useExerciseGroups();
  const { dataVeesActive, onAddExerciseToActive } = useVeesActive();

  useEffect(() => {
    loadExerciseGroup();
  }, []);

  if (!dataExerciseGroup) {
    return;
  }

  return (
    <AddExerciseModal
      items={dataExerciseGroup}
      onAddExercise={(id) => {
        const exercise = dataVeesActive?.exercises.find((exercise) => exercise.id === id);

        if (exercise) {
          openMessage({
            content: 'Существующее упражнение!',
            description: `«${exercise.name}» уже добавлено`,
            type: 'warning',
          });
        } else {
          onAddExerciseToActive(id);
        }
      }}
    />
  );
};
