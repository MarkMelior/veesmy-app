import { saveVeesActiveRequest } from '@/persist-storage/save-vees-active.request';

import type { IVeesDto, IVeesListResponse } from '../types';

export const saveVeesActive = async (payload: IVeesDto): Promise<IVeesListResponse[] | null> => (
  // POST /vees/save-active
  await saveVeesActiveRequest(payload)
);
