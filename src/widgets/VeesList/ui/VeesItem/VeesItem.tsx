import { clsx } from 'clsx';
import { useState } from 'react';

import { DragIcon, MessageIcon } from '@/shared/icons';
import { Background, Button, Chip, Flex, Text } from '@/shared/ui';

import styles from './veesItem.module.scss';

interface IVeesRecord {
  count: number
  weight: number
}

export interface IVeesItem {
  comment?: string
  groupColor?: string
  groupName?: string
  name: string
  previousName?: string
  previousResult?: IVeesRecord[]
  result?: IVeesRecord[]
}

export const VeesItem = ({ item }: { item: IVeesItem }) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const {
    comment,
    groupColor,
    groupName,
    name,
    previousName,
    previousResult,
    result,
  } = item;

  const animationStyle = isOpen !== null
    ? (isOpen ? styles.fadeUp : styles.fadeDown) : undefined;

  return (
    <Background border={false} className={styles.wrapper}>
      <button className={styles.drag}>
        <DragIcon />
      </button>
      <Flex className={styles.content} vertical={true}>
        <Flex className={styles.chipList} gap="small">
          <Chip><Text customColor={groupColor}>{groupName}</Text></Chip>
          {comment ? <Chip><MessageIcon /></Chip> : null}
        </Flex>
        <Flex className={styles.info} gap={2} vertical={true}>
          <Text size="text-sm">{name}</Text>
          {previousName ? (
            <Text
              color="text-base-500"
              decoration="line-through"
              size="text-sm"
            >
              {previousName}
            </Text>
          ) : null}
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
              // TODO: Добавление подхода в VeesList - https://melior-app.atlassian.net/browse/VEES-12
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
            <Text
              className={styles.previous}
              color="text-base-600"
              size="text-sm"
            >
              Прошлый результат:
            </Text>
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
        className={clsx(styles.buttonShow, { [styles.collapsed]: !isOpen })}
        onClick={() => setIsOpen(previous => !previous)}
        variant="solid"
      >
        ^
      </Button>
    </Background>
  );
};
