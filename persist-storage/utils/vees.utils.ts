import type { IVeesDto, IVeesResponse } from '@/shared/types';

import type { IExerciseGroupsDto } from '@/entities/exercise-groups';
import type { IExerciseTemplatesDto } from '@/entities/exercise-templates';

export const createExerciseGroupsMap = (
  exerciseGroups: IExerciseGroupsDto[],
): Map<string, { id: string, name: string, groupColor: string, groupName: string }> => (
  new Map(
    exerciseGroups.flatMap((group) =>
      group.exercises.map((exercise) =>
        [exercise.id, { ...exercise, groupColor: group.color, groupName: group.name }]),
    ),
  )
);

export const createExerciseTemplatesMap = (
  exerciseTemplates: IExerciseTemplatesDto[],
): Map<string, IExerciseTemplatesDto> => (
  new Map(
    exerciseTemplates.map((template) => [template.id, template]),
  )
);

interface IExercise {
  groupColor: string
  groupName: string
  id: string
  name: string
}

export const transformExercises = (
  exercises: IVeesDto['exercises'],
  exerciseGroupsMap: Map<string, IExercise>,
  allVees: IVeesDto[],
): IVeesResponse['exercises'] => exercises.map((exercise) => {
  const exerciseGroup = exerciseGroupsMap.get(exercise.id);

  // Найти предыдущую тренировку, содержащую упражнение с аналогичным id
  const previousResult = allVees
    .flatMap((vees) => vees.exercises)
    .find((prevExercise) => prevExercise.id === exercise.id)?.result;

  return {
    comment: exercise.comment,
    groupColor: exerciseGroup?.groupColor || '#FFFFFF',
    groupName: exerciseGroup?.groupName || 'Пользовательская',
    id: exercise.id,
    name: exerciseGroup?.name || 'Unknown',
    previousName: exercise.previousId
      ? exerciseGroupsMap.get(exercise.previousId)?.name
      : undefined,
    previousResult,
    result: exercise.result,
  };
});

export const transformExerciseTemplate = (
  exerciseTemplateId: string | undefined,
  exerciseTemplatesMap: Map<string, IExerciseTemplatesDto>,
  exerciseGroupsMap: Map<string, IExercise>,
  index: number,
): IVeesResponse['exerciseTemplate'] | undefined => {
  if (!exerciseTemplateId) {
    return undefined;
  }

  const template = exerciseTemplatesMap.get(exerciseTemplateId);

  if (!template) {
    return undefined;
  }

  return {
    color: template.color,
    id: template.id,
    name: template.name,
    number: index + 1,
  };
};
