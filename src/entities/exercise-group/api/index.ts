import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

import type { IExerciseGroupDto, IExerciseGroupResponse } from '../types';

export const getExerciseGroup = async (): Promise<IExerciseGroupResponse[] | null> => (
  // GET /exercise/get-group
  await localforage.getItem<IExerciseGroupDto[]>(StorageKey.EXERCISE_GROUP)
);
