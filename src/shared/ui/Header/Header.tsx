import { clsx } from 'clsx';

import { LogoIcon } from '@/shared/icons';
import { Background, Flex, Layout, Loading, Text } from '@/shared/ui';

import { CurrentDate } from './utils/CurrentDate';

import styles from './header.module.scss';

interface IHeader {
  description?: string | null
  leftActions?: React.ReactNode
  loading?: boolean
  placement?: 'center' | 'start'
  rightActions?: React.ReactNode
  showLogo?: boolean
  title: string
}

export const Header = ({
  description,
  leftActions,
  loading,
  placement = 'center',
  rightActions,
  showLogo,
  title,
}: IHeader) => (
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
      {loading ? (
        <Flex align={placement} gap={8} justify="center">
          <Loading />
          Обновление...
        </Flex>
      ) : (
        <Flex align={placement} vertical={true}>
          <Text as="h1" color="text-base-50" weight="font-semibold">
            <Flex align="center" gap={4}>
              {title}
              {showLogo ? <LogoIcon className={styles.logo} /> : null}
            </Flex>
          </Text>
          {description === null ? null : (
            <Text color="text-base-500" size="text-xs">
              {description ?? <CurrentDate />}
            </Text>
          )}
        </Flex>
      )}
      {rightActions ? (
        <Flex className={clsx(styles.actions, styles.rightActions)} gap="large">
          {rightActions}
        </Flex>
      ) : null}
    </Layout>
  </Background>
);
