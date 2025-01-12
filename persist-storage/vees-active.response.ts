import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

import type { IExerciseGroupDto } from '@/entities/exercise-group';
import type { IExerciseTemplateDto } from '@/entities/exercise-template';
import type { IVeesDto, IVeesResponse } from '@/entities/vees';

import {
  createExerciseGroupsMap,
  createExerciseTemplatesMap,
  transformExerciseTemplate,
  transformExercises,
} from './utils/vees.utils';

export const veesActiveResponse = async (): Promise<IVeesResponse | null> => {
  const veesActive
    = await localforage.getItem<IVeesDto>(StorageKey.VEES_ACTIVE);
  const veesList
    = await localforage.getItem<IVeesDto[]>(StorageKey.VEES_LIST);
  const exerciseGroups
    = await localforage.getItem<IExerciseGroupDto[]>(StorageKey.EXERCISE_GROUP);
  const exerciseTemplates
    = await localforage.getItem<IExerciseTemplateDto[]>(StorageKey.EXERCISE_TEMPLATE);

  if (!veesActive || !exerciseGroups || !exerciseTemplates || !veesList) {
    return null;
  }

  const exerciseGroupsMap = createExerciseGroupsMap(exerciseGroups);
  const exerciseTemplatesMap = createExerciseTemplatesMap(exerciseTemplates);

  return {
    duration: veesActive.duration,
    exercises: transformExercises(veesActive.exercises, exerciseGroupsMap, veesList),
    exerciseTemplate: transformExerciseTemplate(
      veesActive.exerciseTemplateId,
      exerciseTemplatesMap,
      exerciseGroupsMap,
      0,
    ),
    number: 1,
  };
};
