import localforage from 'localforage';
import { nanoid } from 'nanoid';

import { StorageKey } from '@/shared/constants';
import type { IVeesDto } from '@/shared/types';

import { removeVeesActiveRequest } from './remove-vees-active.request';
import { veesListResponse } from './vees-list.response';

export const saveVeesActiveRequest = async (payload: Omit<IVeesDto, 'id'>) => {
  const veesList
    = await localforage.getItem<IVeesDto[]>(StorageKey.VEES_LIST) ?? [];

  const payloadWithId = {
    ...payload,
    id: nanoid(),
  };

  await removeVeesActiveRequest();
  await localforage.setItem<IVeesDto[]>(StorageKey.VEES_LIST, [...veesList, payloadWithId]);

  return await veesListResponse();
};
