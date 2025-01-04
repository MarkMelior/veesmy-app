import { IVeesItem } from '../ui/VeesItem/VeesItem';

export const mockVeesListItems: IVeesItem[] = [
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
