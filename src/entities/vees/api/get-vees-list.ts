import { veesListResponse } from '@/persist-storage/vees-list-response';

export const getVeesList = async () => (
  // GET /vees/get-list
  await veesListResponse()
);
