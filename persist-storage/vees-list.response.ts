import { compareResults } from '@/shared/lib/compare-results';

import type { IVeesListResponse, IVeesResponse } from '@/entities/vees';

import { veesResponse } from './vees.response';

const mapVeesResponseToList = (data: IVeesResponse): IVeesListResponse => ({
  approachCount: data.exercises.reduce((sum, exercise) => sum + exercise.result.length, 0), // Общее количество подходов
  commentCount: data.exercises.filter((exercise) => exercise.comment).length, // Количество упражнений с комментариями
  duration: data.duration,
  exerciseCount: data.exercises.length, // Количество упражнений
  exerciseTemplate: data.exerciseTemplate, // Шаблон упражнения, если есть
  number: data.number, // Номер тренировки
  resultDownCount: data.exercises.reduce(
    (sum, exercise) =>
      sum + exercise.result.filter((result, index) => {
        const previous = exercise.previousResult?.[index];

        return previous ? compareResults(result, previous, 'worse') : false;
      }).length,
    0,
  ), // Количество результатов, где вес ниже предыдущего
  resultUpCount: data.exercises.reduce(
    (sum, exercise) =>
      sum + exercise.result.filter((result, index) => {
        const previous = exercise.previousResult?.[index];

        return previous ? compareResults(result, previous, 'better') : false;
      }).length,
    0,
  ), // Количество результатов, где вес выше предыдущего
});

export const veesListResponse = async (): Promise<IVeesListResponse[] | null> => {
  const dataVeesList = await veesResponse();

  if (!dataVeesList || dataVeesList.length === 0) {
    return null;
  }

  return dataVeesList.map(mapVeesResponseToList);
};
