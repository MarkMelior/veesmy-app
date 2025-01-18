'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { AppRoutes } from '@/shared/constants';
import {
  ArrowDropdownIcon,
  MessageIcon,
  PaperOutlineIcon,
  StopwatchOutlineIcon,
} from '@/shared/icons';
import { getDateInfo, getDateRangeDuration } from '@/shared/lib/date';
import type { IVeesListResponse } from '@/shared/types';
import { Chip, Flex, List, Text } from '@/shared/ui';

import { Card } from '../Card/Card';

import styles from './exerciseItem.module.scss';

interface IExerciseItem {
  item: IVeesListResponse
}

export const ExerciseItem = ({ item }: IExerciseItem) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const {
    approachCount = 0,
    commentCount,
    duration,
    exerciseCount,
    exerciseTemplate,
    number,
    resultDownCount,
    resultUpCount,
  } = item;

  const { hours: hoursFrom, minutes: minutesFrom } = getDateInfo(duration.from);
  const {
    day,
    hours: hoursTo,
    minutes: minutesTo,
    monthName,
    year,
  } = getDateInfo(duration.to);
  const rangeDuration = getDateRangeDuration(duration.from, duration.to);

  return (
    <Card
      chipList={(
        <>
          <Chip>
            <Text color="text-base-400">
              {`${day} ${monthName} ${year}`}
            </Text>
          </Chip>
          <Chip hidden={!resultUpCount && !resultDownCount}>
            {resultUpCount ? (
              <Flex className="text-green-500">
                <ArrowDropdownIcon height={19} width={19} />
                {resultUpCount}
              </Flex>
            ) : null}
            {resultDownCount ? (
              <Flex className="text-red-500">
                <ArrowDropdownIcon className="rotate-180" height={19} width={19} />
                {resultDownCount}
              </Flex>
            ) : null}
          </Chip>
          {commentCount ? (
            <Chip>
              <MessageIcon />
              {commentCount}
            </Chip>
          ) : null}
        </>
      )}
      isOpen={isOpen}
      leftAction={<Text color="text-base-700" size="text-sm">{`${number}.`}</Text>}
      setIsOpen={setIsOpen}
    >
      <Link
        className={clsx(styles.container, { [styles.open]: isOpen })}
        href={`${AppRoutes.VEES}/${item.id}`}
      >
        <List.Item
          icon={<PaperOutlineIcon />}
          title="Тренировка"
          value={(
            <Chip.Category
              className="mt-1"
              customColor={exerciseTemplate?.color}
              isEdited={exerciseTemplate?.isEdited}
              name={exerciseTemplate?.name ?? 'Пользовательская'}
              number={exerciseTemplate?.number}
              size="medium"
            />
          )}
        />
        <List.Item
          description={`${hoursFrom}:${minutesFrom} - ${hoursTo}:${minutesTo}`}
          icon={<StopwatchOutlineIcon />}
          title="Длительность"
          value={rangeDuration}
        />
        <List.Horizontal
          items={[
            {
              title: 'Подходов',
              value: approachCount,
            },
            {
              title: 'Упражнений',
              value: exerciseCount,
            },
          ]}
          showDivider={false}
        />
      </Link>
    </Card>
  );
};
