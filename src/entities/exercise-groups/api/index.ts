import { exerciseGroupsResponse } from '@/persist-storage/exercise-groups.response';

export const getExerciseGroups = async () => (
  // GET /exercise/get-group
  await exerciseGroupsResponse()
);
