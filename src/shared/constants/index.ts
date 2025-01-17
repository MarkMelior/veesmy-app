import type { IOpenMessage } from '../lib/open-message';

export enum AppRoutes {
  MAIN = '/',
  VEES = '/vees',
  SETTINGS = '/settings',
  // last
  NOT_FOUND = '/not-found',
}

export const getErrorGroupDirectly = (text: string) => {
  throw new Error(`The \'${text}\' component is a group and cannot be used directly.`);
};

export enum StorageKey {
  VEES_ACTIVE = 'VEES_ACTIVE',
  VEES_LIST = 'VEES_LIST',
  EXERCISE_GROUP = 'EXERCISE_GROUP',
  EXERCISE_TEMPLATE = 'EXERCISE_TEMPLATE',
}

export const NOT_IMPLEMENTED: IOpenMessage = {
  content: 'Ещё не реализовано!',
  description: 'Данный функционал находится в разработке',
  type: 'warning',
};
