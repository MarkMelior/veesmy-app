import { Background, Flex, Layout, Text } from '@/shared/ui';

import styles from './header.module.scss';

interface IHeader {
  description?: string
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
}: IHeader) => (
  <Background
    as="header"
    border="bottom"
    className={styles.wrapper}
    radius="none"
  >
    <Layout className={styles.layout}>
      {leftActions}
      <Flex align={placement} full={true} vertical={true}>
        <Text as="h1" className={styles.title}>{title}</Text>
        <Text className={styles.description}>{description}</Text>
      </Flex>
      {rightActions}
    </Layout>
  </Background>
);
