import { createInstance } from '@/shared/api';

import type { IStatsResponse } from '../types';

export const getStats = (
  options?: SecondParameter<typeof createInstance>,
) => createInstance<IStatsResponse>(
  { method: 'get', url: '/stats' },
  options,
);
