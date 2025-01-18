import { getVeesByIdResponse } from '@/persist-storage/get-vees-by-id.response';

export const getVeesById = async (id: string) => (
  // GET /vees/get-by-id/{id}
  await getVeesByIdResponse(id)
);
