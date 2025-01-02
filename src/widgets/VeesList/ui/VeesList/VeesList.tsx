'use client';

import { FinishOutlineIcon } from '@/shared/icons';
import { Button, Flex } from '@/shared/ui';

import { IVeesItem, VeesItem } from '../VeesItem/VeesItem';

import styles from './veesList.module.scss';

interface IVeesList {
  items: IVeesItem[]
}

export const VeesList = ({ items }: IVeesList) => (
  <Flex className="mt-8 pb-32" gap={22} vertical={true}>
    {items.map((item, index) => (
      <VeesItem item={item} key={`${index}${item.name}`} />
    ))}
    <Button
      className={styles.button}
      icon={<FinishOutlineIcon height={22} width={22} />}
      variant="none"
    >
      Завершить и сохранить
    </Button>
  </Flex>
);
