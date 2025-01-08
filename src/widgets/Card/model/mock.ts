import type { ICardExerciseItem } from '../ui/ExerciseItem/ExerciseItem';
import type { ICardVeesItem } from '../ui/VeesItem/VeesItem';

export const mockVeesListItems: ICardVeesItem[] = [
  {
    comment: 'Это некая заметка к упражнению на будущее, а может просто по приколу. Я не знаю',
    groupColor: '#FAC938',
    groupName: 'Спина',
    name: 'Горизонтальная тяга',
    previousResult: [
      { count: 10, weight: 30 },
      { count: 7, weight: 30 },
      { count: 10, weight: 28 },
    ],
    result: [
      { count: 10, weight: 30 },
      { count: 6, weight: 32 },
      { count: 11, weight: 25 },
    ],
  },
  {
    groupColor: '#FA4838',
    groupName: 'Средние дельты',
    name: 'Разведения в кроссовере',
    previousName: 'Жим гантелей',
    previousResult: [{ count: 14, weight: 20 }],
    result: [{ count: 12, weight: 20 }],
  },
  {
    groupColor: '#1A80E5',
    groupName: 'Грудь',
    name: 'Жим лежа на наклонной скамье',
    previousName: 'Жим гантелей',
    previousResult: [{ count: 6, weight: 80 }, { count: 4, weight: 80 }],
    result: [{ count: 6, weight: 80 }, { count: 2, weight: 90 }],
  },
];

export const mockExerciseListItems: ICardExerciseItem[] = [
  {
    approachCount: 21,
    commentCount: 3,
    duration: {
      from: '2024-11-12T17:06:00',
      to: '2024-11-12T19:04:00',
    },
    exerciseCount: 7,
    number: 98,
    resultDownCount: 1,
    resultUpCount: 4,
    veesTemplate: {
      color: '#FA4838',
      isEdited: true,
      name: 'Вторник',
      number: 8,
    },
  },
  {
    approachCount: 16,
    duration: {
      from: '2024-11-10T13:35:00',
      to: '2024-11-10T16:01:00',
    },
    exerciseCount: 5,
    number: 97,
    resultUpCount: 2,
    veesTemplate: {
      color: '#FA4838',
      name: 'Вторник',
      number: 7,
    },
  },
];
