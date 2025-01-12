import { veesActiveResponse } from '@/persist-storage/vees-active.response';

export const getVeesActive = async () => (
  // GET /vees/get-active
  await veesActiveResponse()
);
