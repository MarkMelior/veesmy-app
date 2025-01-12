import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

import type { IExerciseGroupsDto } from '@/entities/exercise-groups';

export const exerciseGroupsResponse = async () => (
  await localforage.getItem<IExerciseGroupsDto[]>(StorageKey.EXERCISE_GROUP)
);
