import { createInstance } from '@/shared/api';

import type { IVeesListResponse, IVeesResponse } from '../types';

// Получение тренировки по id
export const getVeesById = (
  options?: SecondParameter<typeof createInstance>,
) => createInstance<IVeesResponse>(
  { method: 'get', url: '/vees?id=' },
  options,
);

// Получение текущей активной тренировки
export const getVeesActive = (
  options?: SecondParameter<typeof createInstance>,
) => createInstance<IVeesResponse>(
  { method: 'get', url: '/vees/get-active' },
  options,
);

// Получение списка всех тренировок
export const getVeesList = (
  options?: SecondParameter<typeof createInstance>,
) => createInstance<IVeesListResponse[]>(
  { method: 'get', url: '/vees/get-list' },
  options,
);
