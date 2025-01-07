import { clsx } from 'clsx';
import { Dispatch, SetStateAction } from 'react';

import { ArrowDropdownIcon } from '@/shared/icons';
import { Background, Button, Flex } from '@/shared/ui';

import styles from './card.module.scss';

interface ICard {
  children: React.ReactNode
  chipList?: React.ReactNode
  isOpen: boolean | null
  leftAction?: React.ReactNode
  setIsOpen: Dispatch<SetStateAction<boolean | null>>
}

export const Card = ({
  children,
  chipList,
  isOpen,
  leftAction,
  setIsOpen,
}: ICard) => (
  <Background border={false} className={styles.wrapper}>
    {leftAction}
    <Flex className={styles.content} vertical={true}>
      <Flex className={styles.chipList} gap="small">
        {chipList}
      </Flex>
      {children}
    </Flex>
    <Button
      className={clsx(styles.buttonShow, {
        ['dropdown-arrow']: isOpen,
        [styles.collapsed]: !isOpen,
      })}
      isActiveAnimation={false}
      onClick={() => setIsOpen((previous) => !previous)}
      variant="solid"
    >
      <ArrowDropdownIcon />
    </Button>
  </Background>
);
