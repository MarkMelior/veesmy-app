import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

import type { IExerciseGroupsDto } from '@/entities/exercise-groups';
import type { IExerciseTemplatesDto } from '@/entities/exercise-templates';
import type { IVeesDto, IVeesResponse } from '@/entities/vees';

import {
  createExerciseGroupsMap,
  createExerciseTemplatesMap,
  transformExerciseTemplate,
  transformExercises,
} from './utils/vees.utils';

export const veesResponse = async (): Promise<IVeesResponse[] | null> => {
  const veesList
    = await localforage.getItem<IVeesDto[]>(StorageKey.VEES_LIST);
  const exerciseGroups
    = await localforage.getItem<IExerciseGroupsDto[]>(StorageKey.EXERCISE_GROUP);
  const exerciseTemplates
    = await localforage.getItem<IExerciseTemplatesDto[]>(StorageKey.EXERCISE_TEMPLATE);

  if (!veesList || !exerciseGroups || !exerciseTemplates) {
    return null;
  }

  const exerciseGroupsMap = createExerciseGroupsMap(exerciseGroups);
  const exerciseTemplatesMap = createExerciseTemplatesMap(exerciseTemplates);

  return veesList.map((vees, index) => ({
    duration: vees.duration,
    exercises: transformExercises(vees.exercises, exerciseGroupsMap, veesList),
    exerciseTemplate: transformExerciseTemplate(
      vees.exerciseTemplateId,
      exerciseTemplatesMap,
      exerciseGroupsMap,
      index,
    ),
    number: veesList.length - index,
  }));
};
