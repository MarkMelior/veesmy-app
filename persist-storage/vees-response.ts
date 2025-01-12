import localforage from 'localforage';

import { StorageKey } from '@/shared/constants';

import type { IExerciseGroupDto } from '@/entities/exercise-group';
import type { IExerciseTemplateDto } from '@/entities/exercise-template';
import type { IVeesDto, IVeesResponse } from '@/entities/vees';

export const veesResponse = async (): Promise<IVeesResponse[] | null> => {
  const veesList
    = await localforage.getItem<IVeesDto[]>(StorageKey.VEES_LIST);
  const exerciseGroups
    = await localforage.getItem<IExerciseGroupDto[]>(StorageKey.EXERCISE_GROUP);
  const exerciseTemplates
    = await localforage.getItem<IExerciseTemplateDto[]>(StorageKey.EXERCISE_TEMPLATE);

  if (!veesList || !exerciseGroups || !exerciseTemplates) {
    return null;
  }

  const exerciseGroupsMap = new Map(
    exerciseGroups.flatMap((group) =>
      group.exercises.map((exercise) =>
        [exercise.id, { ...exercise, groupColor: group.color, groupName: group.name }]),
    ),
  );

  const exerciseTemplatesMap = new Map(
    exerciseTemplates.map((template) => [template.id, template]),
  );

  return veesList.map((vees) => {
    const template = vees.exerciseTemplateId
      ? exerciseTemplatesMap.get(vees.exerciseTemplateId)
      : undefined;

    return {
      duration: vees.duration,
      exercises: vees.exercises.map((exercise) => {
        const exerciseGroup = exerciseGroupsMap.get(exercise.id);

        return {
          comment: exercise.comment,
          groupColor: exerciseGroup?.groupColor || '#000000',
          groupName: exerciseGroup?.groupName || 'Unknown Group',
          id: exercise.id,
          name: exerciseGroup?.name || 'Unknown',
          previousName: exercise.previousId
            ? exerciseGroupsMap.get(exercise.previousId)?.name
            : undefined,
          previousResult: exercise.previousId
            ? vees.exercises.find((e) => e.id === exercise.previousId)?.result
            : undefined,
          result: exercise.result,
        };
      }),
      exerciseTemplate: template
        ? {
          color: exerciseGroupsMap.get(template.exercisesIds[0])?.groupColor || '#000000',
          id: template.id,
          name: template.name,
          number: veesList.indexOf(vees) + 1,
        }
        : undefined,
      number: veesList.indexOf(vees) + 1,
    };
  });
};
