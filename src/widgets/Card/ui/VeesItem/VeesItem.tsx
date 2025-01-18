'use client';

import { clsx } from 'clsx';
import { useState } from 'react';

import { DragIcon, MessageIcon, PlusIcon } from '@/shared/icons';
import { compareResults } from '@/shared/lib/compare-results';
import type { IVeesResponse } from '@/shared/types';
import { Button, Chip, Flex, Text } from '@/shared/ui';

import { Card } from '../Card/Card';

import styles from './veesItem.module.scss';

interface IVeesItem {
  index: number
  isEditable?: boolean
  item: NotArray<IVeesResponse['exercises']>
}

export const VeesItem = ({ index, isEditable, item }: IVeesItem) => {
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
    <Card
      chipList={(
        <>
          <Chip><Text customColor={groupColor}>{groupName}</Text></Chip>
          {comment ? <Chip><MessageIcon /></Chip> : null}
        </>
      )}
      isOpen={isOpen}
      leftAction={isEditable ? (
        <button className={styles.drag}>
          <DragIcon />
        </button>
      ) : (
        <Text color="text-base-700" size="text-sm">{`${index + 1}.`}</Text>
      )}
      setIsOpen={setIsOpen}
    >
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

          const isBetter = compareResults(
            { count, weight },
            { count: previousCount, weight: previousWeight },
            'better',
          );
          const isWorse = compareResults(
            { count, weight },
            { count: previousCount, weight: previousWeight },
            'worse',
          );

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
        {isEditable ? (
          <Button className={clsx(styles.button, styles.buttonAdd)} variant="none">
            <PlusIcon />
          </Button>
        ) : null}
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
    </Card>
  );
};
