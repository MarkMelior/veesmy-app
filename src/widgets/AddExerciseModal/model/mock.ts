import type { IGroupExercises } from '../ui/AddExerciseModal';

export const mockAddExerciseModal: IGroupExercises[] = [
  {
    color: '#FAC938',
    exercises: ['Горизонтальная тяга', 'Подтягивания с доп. весом', 'Трансформер'],
    name: 'Спина',
  },
  {
    color: '#FA4838',
    exercises: ['1', '2'],
    name: 'Средние дельты',
  },
  {
    color: '#00FF80',
    exercises: ['1', '2', '3'],
    name: 'Трицепс',
  },
  {
    color: '#1A80E5',
    exercises: ['1', '2', '3', '4', '5', '6'],
    name: 'Грудь',
  },
  {
    color: '#9B693B',
    exercises: [],
    name: 'Квадрицепсы',
  },
];
