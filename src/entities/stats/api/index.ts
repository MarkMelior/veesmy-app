import { statsResponse } from '@/persist-storage/stats-response';

export const getStats = async () => (
  // GET /stats
  await statsResponse()
);
