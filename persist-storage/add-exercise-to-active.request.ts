import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';
import type { IVeesDto } from '@/shared/types';

import type { IExerciseById } from '@/entities/vees-active/types';

import { getExerciseByIdResponse } from './get-exercise-by-id.response';

export const addExerciseToActiveRequest = async (
  id: string,
): Promise<IExerciseById | null> => {
  const veesActive
    = await localforage.getItem<IVeesDto>(StorageKey.VEES_ACTIVE);

  if (!veesActive) {
    return null;
  }

  const veesActiveWithAddedExercise: IVeesDto = {
    ...veesActive,
    exercises: [...veesActive.exercises, { id, result: [] }],
  };

  await localforage.setItem<IVeesDto>(StorageKey.VEES_ACTIVE, veesActiveWithAddedExercise);

  return await getExerciseByIdResponse(id);
};
