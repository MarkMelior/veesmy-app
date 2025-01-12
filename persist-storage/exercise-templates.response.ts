import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

import type { IExerciseTemplatesDto } from '@/entities/exercise-templates';

export const exerciseTemplatesResponse = async () => (
  await localforage.getItem<IExerciseTemplatesDto[]>(StorageKey.EXERCISE_TEMPLATE)
);
