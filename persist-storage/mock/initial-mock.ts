import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

import { EXERCISE_GROUP } from './EXERCISE_GROUP';
import { EXERCISE_TEMPLATE } from './EXERCISE_TEMPLATE';
import { VEES_ACTIVE } from './VEES_ACTIVE';
import { VEES_LIST } from './VEES_LIST';

export const initialMockLocalforage = async () => {
  await localforage.setItem(StorageKey.VEES_ACTIVE, VEES_ACTIVE);
  await localforage.setItem(StorageKey.EXERCISE_GROUP, EXERCISE_GROUP);
  await localforage.setItem(StorageKey.EXERCISE_TEMPLATE, EXERCISE_TEMPLATE);
  await localforage.setItem(StorageKey.VEES_LIST, VEES_LIST);
};
