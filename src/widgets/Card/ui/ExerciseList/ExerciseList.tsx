import { Flex } from '@/shared/ui';

import { ExerciseItem } from '../ExerciseItem/ExerciseItem';

import type { ICardExerciseItem } from '../ExerciseItem/ExerciseItem';

interface IExerciseList {
  items: ICardExerciseItem[]
}

export const ExerciseList = ({ items }: IExerciseList) => (
  <Flex gap={22} vertical={true}>
    {items.map((item, index) => (
      // TODO: add id key={`${index}${item.id}`}
      <ExerciseItem item={item} key={`${index}${item.number}`} />
    ))}
  </Flex>
);
