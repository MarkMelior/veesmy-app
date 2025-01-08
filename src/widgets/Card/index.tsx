import { getErrorGroupDirectly } from '@/shared/constants';

import { ExerciseList } from './ui/ExerciseList/ExerciseList';
import { VeesList } from './ui/VeesList/VeesList';

export const Card = () => getErrorGroupDirectly('Card');

Card.VeesList = VeesList;
Card.ExercisesList = ExerciseList;
