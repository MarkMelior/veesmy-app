import { addExerciseToActiveRequest } from '@/persist-storage/add-exercise-to-active.request';

import type { IExerciseById } from '../types';

export const addExerciseToActive = async (
  id: string,
): Promise<IExerciseById | null> => (
  // POST /vees/add-exercise-to-active
  await addExerciseToActiveRequest(id)
);
