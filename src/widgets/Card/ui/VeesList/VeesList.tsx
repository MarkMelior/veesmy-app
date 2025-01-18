import type { IVeesResponse } from '@/shared/types';
import { Flex } from '@/shared/ui';

import { VeesItem } from '../VeesItem/VeesItem';

interface IVeesList {
  isEditable?: boolean
  items: IVeesResponse['exercises']
}

export const VeesList = ({ isEditable = true, items }: IVeesList) => (
  <Flex gap={22} vertical={true}>
    {items.map((item, index) => (
      <VeesItem
        index={index}
        isEditable={isEditable}
        item={item}
        key={item.id}
      />
    ))}
  </Flex>
);
