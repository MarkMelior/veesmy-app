import { veesResponse } from './vees.response';

export const getVeesByIdResponse = async (id: string) => {
  const veesList = await veesResponse();

  return veesList?.find((vees) => vees.id === id);
};
