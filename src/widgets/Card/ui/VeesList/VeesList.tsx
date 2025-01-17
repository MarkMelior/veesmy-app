import { Flex } from '@/shared/ui';

import type { IVeesResponse } from '@/entities/vees';

import { VeesItem } from '../VeesItem/VeesItem';
import { FinishAndSaveButton } from './client/FinishAndSaveButton';

interface IVeesList {
  items: IVeesResponse['exercises']
}

export const VeesList = ({ items }: IVeesList) => (
  <Flex gap={22} vertical={true}>
    {items.map((item) => (
      <VeesItem item={item} key={item.id} />
    ))}
    <FinishAndSaveButton />
  </Flex>
);
