import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

import type { IVeesResponse } from '../types';

// TODO
export const getVeesActive = async (): Promise<IVeesResponse | null> => (
  // GET /vees/get-active
  await localforage.getItem<IVeesResponse>(StorageKey.VEES_ACTIVE)
);
