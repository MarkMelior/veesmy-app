import { createInstance } from '@/shared/api';

import type { IExerciseGroupResponse } from '../types';

export const getExerciseGroup = (
  options?: SecondParameter<typeof createInstance>,
) => createInstance<IExerciseGroupResponse[]>(
  { method: 'get', url: '/exercise-group' },
  options,
);
