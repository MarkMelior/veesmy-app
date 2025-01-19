import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';
import type { IVeesDto } from '@/shared/types';

import type { IExerciseGroupsDto } from '@/entities/exercise-groups';
import type { IExerciseById } from '@/entities/vees-active/types';

export const getExerciseByIdResponse = async (
  id: string,
): Promise<IExerciseById | null> => {
  const veesActive
    = await localforage.getItem<IVeesDto>(StorageKey.VEES_ACTIVE);
  const exerciseGroups
    = await localforage.getItem<IExerciseGroupsDto[]>(StorageKey.EXERCISE_GROUP);

  const exercise = veesActive?.exercises.find((ex) => ex.id === id);

  // Ищем группу, к которой относится упражнение
  const group = exerciseGroups?.find((group) =>
    group.exercises.some((ex) => ex.id === id),
  );

  if (!veesActive || !exerciseGroups || !exercise || !group) {
    return null;
  }

  return {
    groupColor: group.color,
    groupName: group.name,
    id: exercise.id,
    name: group.exercises.find((ex) => ex.id === id)?.name || '',
    previousResult: exercise.previousId
      ? veesActive.exercises.find((ex) => ex.id === exercise.previousId)?.result
      : undefined,
    result: [],
  };
};
