import { removeVeesActiveRequest } from '@/persist-storage/remove-vees-active.request';

export const removeVeesActive = async (): Promise<void> => (
  // DELETE /vees/remove-active
  await removeVeesActiveRequest()
);
