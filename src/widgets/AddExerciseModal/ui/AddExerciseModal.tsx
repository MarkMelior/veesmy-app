'use client';

import { clsx } from 'clsx';
import { useState } from 'react';

import { AddOutlineIcon, SettingsOutlineIcon } from '@/shared/icons';
import { Background, Button, Chip, Empty, Flex, Input, ModalBase, Text } from '@/shared/ui';
import { Image } from '@/shared/ui/client';

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
      title={(
        <>
          <div className={selectedGroup ? styles.visible : styles.hidden}>
            Какое упражнение добавим?
          </div>
          <div className={selectedGroup ? styles.hidden : styles.visible}>
            Выбери группу мышц
          </div>
        </>
      )}
    >
      <Flex className={styles.wrapper} gap="medium" vertical={true}>
        {selectedGroup ? (
          <Flex className={styles.groupWrapper} gap={10} vertical={true}>
            <Background
              className={clsx(styles.group, styles.visible)}
              style={{ '--color-selected-group': selectedGroup.color } as React.CSSProperties}
            >
              {selectedGroup.exercises.length > 0 ? (
                <>
                  {selectedGroup.exercises.map((item, index) => (
                    <Button
                      align="start"
                      className={styles.item}
                      full={true}
                      isActiveAnimation={false}
                      key={item}
                      radius="none"
                      variant="none"
                    >
                      <Text className={styles.index} color="text-base-600" size={0.7}>
                        {`${index + 1}.`}
                      </Text>
                      <Chip>
                        <Text customColor={selectedGroup.color}>
                          {selectedGroup.name}
                        </Text>
                      </Chip>
                      <Text size="text-sm" weight="font-light">
                        {item}
                      </Text>
                    </Button>
                  ))}
                  <Text
                    align="text-center"
                    className={styles.end}
                    color="text-base-700"
                    size="text-sm"
                  >
                    Это конец списка
                  </Text>
                </>
              ) : (
                <Empty
                  description="Добавьте первое упражнение!"
                  icon={(
                    <Image
                      alt="empty"
                      height={512}
                      src="/images/weight.png"
                      width={512}
                    />
                  )}
                  title="Здесь пока нет упражнений..."
                />
              )}
            </Background>
            <Input
              className={styles.visible}
              placeholder="Название упражнения"
              rightAction={(
                <Button className={styles.buttonAdd} size="large" variant="solid">
                  Добавить
                </Button>
              )}
            />
          </Flex>
        ) : items.map((item) => (
          <Button
            className={clsx(styles.button, styles.visible)}
            full={true}
            key={item.name}
            onClick={() => setSelectedGroup(item)}
            variant="none"
          >
            <span className={styles.light} style={{ backgroundColor: item.color }} />
            <Text className={styles.name} customColor={item.color}>
              {item.name}
            </Text>
            <Text color="text-base-700" size="text-sm">
              {getCountExerciseWord(item.exercises.length)}
            </Text>
          </Button>
        ))}
      </Flex>
    </ModalBase>
  );
};
