import { IInfoBlockItem } from '@/widgets/InfoBlock';

import { PaperOutlineIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { Chip, Flex, Text } from '@/shared/ui';

export const mockInfoBlockItems: IInfoBlockItem[] = [
  {
    icon: <StopwatchOutlineIcon />,
    title: 'Расчётное время',
    value: (
      <Flex justify="between">
        <Text size={0.95}>~ 1 час 30 минут</Text>
        <Text color="text-base-700" size={0.875}>~ конец в 18:36</Text>
      </Flex>
    ),
  },
  {
    icon: <PaperOutlineIcon />,
    title: 'Тренировка',
    value: (
      <Chip.Category
        className="mt-1"
        color="text-red-500"
        isEditable={true}
        name="Вторник"
        number={9}
        size="medium"
      />
    ),
  },
  {
    hideTitle: true,
    title: 'Статистика',
    value: (
      <Flex>
        <Flex align="center" vertical={true}>
          <Text color="text-base-500" size={0.8}>Тренировка №</Text>
          <Text weight="font-semibold">98</Text>
        </Flex>
        <Flex align="center" vertical={true}>
          <Text color="text-base-500" size={0.8}>Начало</Text>
          <Text weight="font-semibold">17:06</Text>
        </Flex>
        <Flex align="center" vertical={true}>
          <Text color="text-base-500" size={0.8}>Упражнений</Text>
          <Text weight="font-semibold">7</Text>
        </Flex>
      </Flex>
    ),
  },
];
