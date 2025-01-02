'use client';

import { Flex } from '@/shared/ui';

import { IVeesItem, VeesItem } from '../VeesItem/VeesItem';

interface IVeesList {
  items: IVeesItem[]
}

export const VeesList = ({ items }: IVeesList) => (
  <Flex className="mt-8 mb-28" gap={22} vertical={true}>
    {items.map((item, index) => (
      <VeesItem item={item} key={`${index}${item.name}`} />
    ))}
  </Flex>
);
