'use client';

import { useEffect } from 'react';

import { AddExerciseModal } from '@/features/AddExerciseModal/client';

import { useExerciseGroup } from '@/entities/exercise-group';

export const ClientRender = () => {
  const { dataExerciseGroup, loadExerciseGroup } = useExerciseGroup();

  useEffect(() => {
    loadExerciseGroup();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!dataExerciseGroup) {
    return;
  }

  return <AddExerciseModal items={dataExerciseGroup} />;
};
