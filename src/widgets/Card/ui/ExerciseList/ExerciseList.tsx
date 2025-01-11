import { Flex } from '@/shared/ui';

import type { IVeesListResponse } from '@/entities/vees';

import { ExerciseItem } from '../ExerciseItem/ExerciseItem';

interface IExerciseList {
  items: IVeesListResponse[]
}

export const ExerciseList = ({ items }: IExerciseList) => (
  <Flex gap={22} vertical={true}>
    {items.map((item, index) => (
      <ExerciseItem item={item} key={`${index}${item.number}`} />
    ))}
  </Flex>
);
