import { FinishOutlineIcon } from '@/shared/icons';
import { Button, Flex } from '@/shared/ui';

import { VeesItem } from '../VeesItem/VeesItem';

import styles from './veesList.module.scss';

import type { ICardVeesItem } from '../VeesItem/VeesItem';

interface IVeesList {
  items: ICardVeesItem[]
}

export const VeesList = ({ items }: IVeesList) => (
  <Flex gap={22} vertical={true}>
    {items.map((item, index) => (
      <VeesItem item={item} key={`${index}${item.name}`} />
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
