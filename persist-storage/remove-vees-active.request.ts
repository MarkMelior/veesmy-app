import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

export const removeVeesActiveRequest = async () => (
  await localforage.removeItem(StorageKey.VEES_ACTIVE)
);
