'use client';

import { clsx } from 'clsx';
import { useState } from 'react';

import { DragIcon, MessageIcon } from '@/shared/icons';
import { Background, Button, Chip, Flex, Text } from '@/shared/ui';

import styles from './veesList.module.scss';

interface IVeesRecord {
  count: number
  weight: number
}

interface IVeesItem {
  comment?: string
  groupColor?: string
  groupName?: string
  name: string
  previousName?: string
  previousResult?: IVeesRecord[]
  result?: IVeesRecord[]
}

interface IVeesList {
  items: IVeesItem[]
}

const mockItems: IVeesItem[] = [
  {
    // eslint-disable-next-line max-len
    comment: 'Это некая заметка к упражнению на будущее, а может просто по приколу. Я не знаю',
    groupColor: '#FAC938',
    groupName: 'Спина',
    name: 'Горизонтальная тяга',
    previousResult: [
      { count: 10, weight: 30 },
      { count: 7, weight: 30 },
      { count: 10, weight: 28 },
    ],
    result: [
      { count: 10, weight: 30 },
      { count: 6, weight: 32 },
      { count: 11, weight: 25 },
    ],
  },
  {
    groupColor: '#FA4838',
    groupName: 'Средние дельты',
    name: 'Разведения в кроссовере',
    previousName: 'Жим гантелей',
    previousResult: [{ count: 14, weight: 20 }],
    result: [{ count: 12, weight: 20 }],
  },
  {
    groupColor: '#1A80E5',
    groupName: 'Грудь',
    name: 'Жим лежа на наклонной скамье',
    previousName: 'Жим гантелей',
    previousResult: [{ count: 6, weight: 80 }, { count: 4, weight: 80 }],
    result: [{ count: 6, weight: 80 }, { count: 2, weight: 90 }],
  },
];

export const VeesList = ({ items = mockItems }: IVeesList) => (
  <Flex className="mt-8 mb-28" gap={22} vertical={true}>
    {items.map(({
      comment,
      groupColor,
      groupName,
      name,
      previousName,
      previousResult,
      result,
    }) => {
      const [isOpen, setIsOpen] = useState<boolean | null>(null);

      const animationStyle = isOpen !== null
        ? (isOpen ? styles.fadeUp : styles.fadeDown) : undefined;

      return (
        <Background border={false} className={styles.wrapper} key={name}>
          <button className={styles.drag}>
            <DragIcon />
          </button>
          <Flex className={styles.content} gap="large" vertical={true}>
            <Flex className={styles.chipList} gap="small">
              <Chip><Text customColor={groupColor}>{groupName}</Text></Chip>
              {comment ? <Chip><MessageIcon /></Chip> : null}
            </Flex>
            <Flex gap={2} vertical={true}>
              <Text size="text-sm">{name}</Text>
              <Text
                color="text-base-500"
                decoration="line-through"
                size="text-sm"
              >
                {previousName}
              </Text>
              {comment ? (
                <Text
                  className={clsx(animationStyle, styles.animation)}
                  color="text-base-600"
                  size="text-sm"
                >
                  {comment}
                </Text>
              ) : null}
            </Flex>
            <Flex gap="small" wrap={true}>
              {result?.map(({ count, weight }, index) => {
                const previousWeight = previousResult?.[index]?.weight ?? 0;
                const previousCount = previousResult?.[index]?.count ?? 0;

                const isBetter = weight > previousWeight
                  || (weight === previousWeight && count > previousCount);
                const isWorse = weight < previousWeight || count < previousCount;

                return (
                  <Button
                    className={clsx(
                      styles.button,
                      styles.buttonResult,
                      {
                        [styles.better]: isBetter,
                        [styles.worse]: isWorse && !isBetter,
                      },
                    )}
                    key={`${index}${count}${weight}`}
                    variant="none"
                  >
                    <span className={styles.index}>{`${index + 1}.`}</span>
                    {`${weight}кг x${count}`}
                  </Button>
                );
              })}
              <Button className={clsx(styles.button, styles.buttonResult)} variant="none">
                <span className={styles.index}>+</span>
              </Button>
            </Flex>
            {previousResult?.length ? (
              <Flex
                className={clsx(animationStyle, styles.animation)}
                gap="small"
                vertical={true}
              >
                <Text color="text-base-600" size="text-sm">Прошлый результат:</Text>
                <Flex gap="small" wrap={true}>
                  {previousResult.map(({ count, weight }, index) => (
                    <Button
                      className={clsx(styles.button, styles.buttonPreviousResult)}
                      key={`${index}${count}${weight}`}
                      variant="none"
                    >
                      <span className={styles.index}>{`${index + 1}.`}</span>
                      {`${weight}кг x${count}`}
                    </Button>
                  ))}
                </Flex>
              </Flex>
            ) : null}
          </Flex>
          <Button
            className={styles.buttonShow}
            color={isOpen ? 'primary' : 'base'}
            onClick={() => setIsOpen(previous => !previous)}
            variant="solid"
          >
            ^
          </Button>
        </Background>
      );
    })}
  </Flex>
);
