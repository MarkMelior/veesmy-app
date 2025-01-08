import { clsx } from 'clsx';

import { ArrowDropdownIcon } from '@/shared/icons';
import { Background, Button, Flex } from '@/shared/ui';

import styles from './card.module.scss';

import type { Dispatch, SetStateAction } from 'react';

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
    <Flex align="center" className={styles.leftAction} full={false} justify="center">
      {leftAction}
    </Flex>
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
