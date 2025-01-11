import { FinishOutlineIcon } from '@/shared/icons';
import { Button, Flex } from '@/shared/ui';

import type { IVeesResponse } from '@/entities/vees';

import { VeesItem } from '../VeesItem/VeesItem';

import styles from './veesList.module.scss';

interface IVeesList {
  items: IVeesResponse['exercises']
}

export const VeesList = ({ items }: IVeesList) => (
  <Flex gap={22} vertical={true}>
    {items.map((item) => (
      <VeesItem item={item} key={item.id} />
    ))}
    {/* TODO: Вынести кнопку в features */}
    <Button
      className={styles.button}
      icon={<FinishOutlineIcon height={22} width={22} />}
      variant="none"
    >
      Завершить и сохранить
    </Button>
  </Flex>
);
