'use client';

import { useEffect } from 'react';

import { AddExerciseModal } from '@/features/AddExerciseModal/client';

import { useExerciseGroups } from '@/entities/exercise-groups';

export const ClientRender = () => {
  const { dataExerciseGroup, loadExerciseGroup } = useExerciseGroups();

  useEffect(() => {
    loadExerciseGroup();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!dataExerciseGroup) {
    return;
  }

  return <AddExerciseModal items={dataExerciseGroup} />;
};
