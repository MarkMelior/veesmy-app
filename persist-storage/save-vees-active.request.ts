import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

import type { IVeesDto } from '@/entities/vees';

import { removeVeesActiveRequest } from './remove-vees-active.request';
import { veesListResponse } from './vees-list.response';

export const saveVeesActiveRequest = async (payload: IVeesDto) => {
  const veesList
    = await localforage.getItem<IVeesDto[]>(StorageKey.VEES_LIST) ?? [];

  await removeVeesActiveRequest();
  await localforage.setItem<IVeesDto[]>(StorageKey.VEES_LIST, [...veesList, payload]);

  return await veesListResponse();
};
