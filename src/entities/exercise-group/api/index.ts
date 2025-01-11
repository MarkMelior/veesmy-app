import { createInstance } from '@/shared/api';

import type { TExerciseGroupResponse } from '../types';

export const getExerciseGroup = (
  options?: SecondParameter<typeof createInstance>,
) => createInstance<TExerciseGroupResponse[]>(
  { method: 'get', url: '/exercise-group' },
  options,
);
