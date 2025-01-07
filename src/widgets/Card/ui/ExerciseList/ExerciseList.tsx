import { Flex } from '@/shared/ui';

import { ICardExerciseItem, ExerciseItem } from '../ExerciseItem/ExerciseItem';

interface IExerciseList {
  items: ICardExerciseItem[]
}

export const ExerciseList = ({ items }: IExerciseList) => (
  <Flex gap={22} vertical={true}>
    {items.map((item, index) => (
      <ExerciseItem item={item} key={`${index}${item.name}`} />
    ))}
  </Flex>
);
