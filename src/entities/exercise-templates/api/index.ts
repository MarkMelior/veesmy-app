import { exerciseTemplatesResponse } from '@/persist-storage/exercise-templates.response';

export const getExerciseTemplates = async () => (
  // GET /exercise/get-template
  await exerciseTemplatesResponse()
);
