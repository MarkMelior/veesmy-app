import { clsx } from 'clsx';

import { getCurrentDateInfo } from '@/shared/lib/utils';
import { Background, Flex, Layout, Text } from '@/shared/ui';

import styles from './header.module.scss';

interface IHeader {
  description?: string | null
  leftActions?: React.ReactNode
  placement?: 'center' | 'start'
  rightActions?: React.ReactNode
  title: string
}

export const Header = ({
  description,
  leftActions,
  placement = 'center',
  rightActions,
  title,
}: IHeader) => {
  const { dayOfMonth, dayOfWeek, monthNumber } = getCurrentDateInfo();

  const currentDate = `Сегодня ${dayOfWeek} ${dayOfMonth}.${monthNumber}`;

  return (
    <Background
      as="header"
      border="bottom"
      className={styles.wrapper}
      opacity={true}
      radius="none"
    >
      <Layout className={styles.layout}>
        {leftActions ? (
          <Flex className={clsx(styles.actions, styles.leftActions)} gap="large">
            {leftActions}
          </Flex>
        ) : null}
        <Flex align={placement} full={true} vertical={true}>
          <Text as="h1" color="text-base-50" weight="font-semibold">
            {title}
          </Text>
          {description !== null && (
            <Text color="text-base-500" size="text-xs">
              {description ?? currentDate}
            </Text>
          )}
        </Flex>
        {rightActions ? (
          <Flex className={clsx(styles.actions, styles.rightActions)} gap="large">
            {rightActions}
          </Flex>
        ) : null}
      </Layout>
    </Background>
  );
};
