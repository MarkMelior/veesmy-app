import { IInfoBlockItem } from '@/widgets/InfoBlock';

import { StopwatchOutlineIcon } from '@/shared/icons';
import { Flex, Text } from '@/shared/ui';

export const mockInfoBlockExercisesItems: IInfoBlockItem[] = [
  {
    icon: <StopwatchOutlineIcon />,
    title: 'Вы тренировались',
    value: <Text size={0.95}>148 часов 56 минут</Text>,
  },
  {
    hideTitle: true,
    title: 'Статистика',
    value: (
      <Flex>
        <Flex align="center" vertical={true}>
          <Text color="text-base-500" size={0.8}>Тренировок</Text>
          <Text weight="font-semibold">98</Text>
        </Flex>
        <Flex align="center" vertical={true}>
          <Text color="text-base-500" size={0.8}>Подходов</Text>
          <Text weight="font-semibold">1787</Text>
        </Flex>
        <Flex align="center" vertical={true}>
          <Text color="text-base-500" size={0.8}>Стаж</Text>
          <Text weight="font-semibold">1 год</Text>
        </Flex>
      </Flex>
    ),
  },
  {
    title: 'Ничего',
    value: 'И тут ничего',
  },
];
