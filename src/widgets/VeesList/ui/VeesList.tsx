import { clsx } from 'clsx';

import { Background, Button, Chip, Flex, Text } from '@/shared/ui';

import styles from './veesList.module.scss';

interface IVeesList {
  items: string[] // TODO
}

export const VeesList = ({}: IVeesList) => (
  <Background border={false} className={clsx(styles.wrapper, 'mt-8')}>
    <Flex className={styles.content} gap="large" vertical={true}>
      <Flex className={styles.chipList} gap={4}>
        <Chip><Text color="text-yellow-500">Спина</Text></Chip>
      </Flex>
      <div>
        <Text as="p" size="text-sm">
          Горизонтальная тяга
        </Text>
        <Text color="text-base-600" size="text-sm">
          Это некая заметка к упражнению на будущее, а может просто по приколу. Я не знаю
        </Text>
      </div>
    </Flex>
    <Button>^</Button>
  </Background>
);
