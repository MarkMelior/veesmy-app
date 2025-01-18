import type { IVeesDto, IVeesListResponse } from '@/shared/types';

import { saveVeesActiveRequest } from '@/persist-storage/save-vees-active.request';

export const saveVeesActive = async (
  payload: Omit<IVeesDto, 'id'>,
): Promise<IVeesListResponse[] | null> => (
  // POST /vees/save-active
  await saveVeesActiveRequest(payload)
);
