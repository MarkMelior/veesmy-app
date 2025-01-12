// Шаблоны тренировок. Будут содержать id упражнений

export type IExerciseTemplateDto = {
  id: string
  name: string
  exercisesIds: string[]
  color: string
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type IExerciseTemplateResponse = { /* TODO */ };
