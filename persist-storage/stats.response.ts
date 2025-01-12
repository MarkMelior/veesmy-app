import { compareResults } from '@/shared/lib/compare-results';

import type { IStatsResponse } from '@/entities/stats';

import { veesResponse } from './vees.response';

export const statsResponse = async (): Promise<IStatsResponse | null> => {
  const dataVeesList = await veesResponse();

  if (!dataVeesList || dataVeesList.length === 0) {
    return null;
  }

  const veesCount = dataVeesList.length;
  const approachCount = dataVeesList.reduce(
    (sum, vees) => sum + vees.exercises.reduce((innerSum, ex) => innerSum + ex.result.length, 0),
    0,
  );
  const exercisesCounts = dataVeesList.map((vees) => vees.exercises.length);
  const exercisesSum = exercisesCounts.reduce((sum, count) => sum + count, 0);
  const exercisesMax = Math.max(...exercisesCounts);
  const exercisesMin = Math.min(...exercisesCounts);
  const exercisesAvg = exercisesSum / veesCount;

  const veesDurations = dataVeesList.map(
    (vees) => new Date(vees.duration.to).getTime() - new Date(vees.duration.from).getTime(),
  );
  const veesDurationSum = veesDurations.reduce((sum, duration) => sum + duration, 0);
  const veesDurationMax = Math.max(...veesDurations);
  const veesDurationMin = Math.min(...veesDurations);
  const veesDurationAvg = veesDurationSum / veesCount;

  const dateFirstVees = dataVeesList
    .map((vees) => vees.duration.from)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())[0];

  const betterCount = dataVeesList.reduce(
    (sum, vees) =>
      sum + vees.exercises.reduce(
        (innerSum, ex) =>
          innerSum + ex.result.filter((res, index) => {
            const prev = ex.previousResult?.[index];

            return prev ? compareResults(res, prev, 'better') : false;
          }).length,
        0,
      ),
    0,
  );

  const worseCount = dataVeesList.reduce(
    (sum, vees) =>
      sum + vees.exercises.reduce(
        (innerSum, ex) =>
          innerSum + ex.result.filter((res, index) => {
            const prev = ex.previousResult?.[index];

            return prev ? compareResults(res, prev, 'worse') : false;
          }).length,
        0,
      ),
    0,
  );

  // Возврат собранной статистики
  return {
    approachCount,
    betterCount,
    dateFirstVees,
    exercisesAvg,
    exercisesCount: exercisesSum,
    exercisesMax,
    exercisesMin,
    exercisesSum,
    veesCount,
    veesDurationAvg,
    veesDurationMax,
    veesDurationMin,
    veesDurationSum,
    worseCount,
  };
};
