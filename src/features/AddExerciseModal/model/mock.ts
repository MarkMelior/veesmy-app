import type { IGroupExercises } from '../ui/AddExerciseModal';

export const mockAddExerciseModal: IGroupExercises[] = [
  {
    color: '#FAC938',
    exercises: ['Горизонтальная тяга', 'Подтягивания с доп. весом', 'Трансформер'],
    name: 'Спина',
  },
  {
    color: '#FA4838',
    exercises: ['Разведения в кроссовере на одну руку', 'Разведение гантелей в стороны'],
    name: 'Средние дельты',
  },
  {
    color: '#00FF80',
    exercises: [
      'Французский жим лёжа',
      'Жим лёжа узким хватом',
      'Брусья с доп. весом', // TODO: Синхронизировать по ID
    ],
    name: 'Трицепс',
  },
  {
    color: '#1A80E5',
    exercises: [
      'Жим штанги',
      'Жим гантелей в наклоне',
      'Жим штанги в наклоне',
      'Брусья с доп. весом', // TODO: Синхронизировать по ID
    ],
    name: 'Грудь',
  },
  {
    color: '#9B693B',
    exercises: [],
    name: 'Квадрицепсы',
  },
];
