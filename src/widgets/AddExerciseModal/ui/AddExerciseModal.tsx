'use client';

import { useState } from 'react';

import { AddOutlineIcon, SettingsOutlineIcon } from '@/shared/icons';
import { Button, Flex, Text, ModalBase } from '@/shared/ui';

import styles from './addExerciseModal.module.scss';

export interface IGroupExercises {
  color: string
  exercises: string[]
  name: string
}

interface IAddExerciseModal {
  items: IGroupExercises[]
}

const getCountExerciseWord = (count: number) => {
  if (count === 1) {
    return '1 упражнение';
  }
  if (count >= 2 && count <= 4) {
    return `${count} упражнения`;
  }

  return `${count} упражнений`;
};

export const AddExerciseModal = ({ items }: IAddExerciseModal) => {
  const [selectedGroup, setSelectedGroup] = useState<IGroupExercises | null>(null);

  return (
    <ModalBase
      button={(
        <Button iconOnly={true}>
          <AddOutlineIcon />
        </Button>
      )}
      closeOnClickOverlay={!selectedGroup}
      iconAction={<SettingsOutlineIcon />}
      onClickOverlay={() => setSelectedGroup(null)}
      textAction="Настроить"
      title={selectedGroup ? 'Какое упражнение добавим?' : 'Выберите группу мышц'}
    >
      <Flex
        className={styles.wrapper}
        gap="medium"
        justify="between"
        vertical={true}
      >
        {selectedGroup
          ? (
            <>{selectedGroup.name}</>
          )
          : items.map(item => (
            <Button
              className={styles.button}
              full={true}
              key={item.name}
              onClick={() => setSelectedGroup(item)}
              variant="none"
            >
              <span className={styles.light} style={{ backgroundColor: item.color }} />
              <Text className={styles.name} customColor={item.color}>{item.name}</Text>
              <Text
                color="text-base-700"
                size="text-sm"
              >
                {getCountExerciseWord(item.exercises.length)}
              </Text>
            </Button>
          ))}
      </Flex>
    </ModalBase>
  );
};
