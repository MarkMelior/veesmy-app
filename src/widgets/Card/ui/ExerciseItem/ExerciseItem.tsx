'use client';

import { useState } from 'react';

import { MessageIcon } from '@/shared/icons';
import { Chip, Text } from '@/shared/ui';

import { Card } from '../Card/Card';

import styles from './exerciseItem.module.scss';

interface IVeesRecord {
  count: number
  weight: number
}

export interface ICardExerciseItem {
  comment?: string
  groupColor?: string
  groupName?: string
  name: string
  previousName?: string
  previousResult?: IVeesRecord[]
  result?: IVeesRecord[]
}

interface IExerciseItem {
  item: ICardExerciseItem
}

export const ExerciseItem = ({ item }: IExerciseItem) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const {
    comment,
  } = item;

  return (
    <Card
      chipList={(
        <>
          <Chip><Text>12 ноября 2024</Text></Chip>
          {comment ? (
            <Chip>
              <MessageIcon />
              3
            </Chip>
          ) : null}
        </>
      )}
      isOpen={isOpen}
      leftAction={(
        <button>
          1.
        </button>
      )}
      setIsOpen={setIsOpen}
    >
      HI
    </Card>
  );
};
