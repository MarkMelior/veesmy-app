import type { IExerciseTemplatesDto } from '@/entities/exercise-templates';

export const EXERCISE_TEMPLATE: IExerciseTemplatesDto[] = [
  {
    color: '#FA4838',
    exercisesIds: [
      '147244e6-ab19-4bd2-bb2f-28e6d4145127', // Разведения в кроссовере на одну руку
      'd3dce3ed-cedf-4d1f-b907-927e24314f02', // Жим гантелей в наклоне
      '9ae9be94-3514-487a-920f-802d2a76f804', // Французский жим лёжа
      '64f5d700-2ae9-4f53-8d9c-43fe90f63d32', // Горизонтальная тяга
    ],
    id: 'template-tuesday',
    name: 'Вторник',
  },
  {
    color: '#00FF80',
    exercisesIds: [
      '24233635-cbea-41bc-8669-6f07dbbc21a1', // Жим штанги в наклоне
      '9ae9be94-3514-487a-920f-802d2a76f804', // Французский жим лёжа
      'b8139a33-a755-4e4f-a430-8da4993c66b9', // Подтягивания с доп. весом
      '147244e6-ab19-4bd2-bb2f-28e6d4145127', // Разведения в кроссовере на одну руку
    ],
    id: 'template-saturday',
    name: 'Суббота',
  },
];
