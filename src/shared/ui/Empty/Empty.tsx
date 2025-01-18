import { Image } from '../client';
import { Flex } from '../Flex';
import { Text } from '../Text';

import styles from './empty.module.scss';

interface IEmpty {
  description?: React.ReactNode
  icon?: React.ReactNode
  title?: string
}

export const Empty = ({
  description,
  icon = (
    <Image
      alt="empty"
      height={512}
      src="/images/weight.png"
      width={512}
    />
  ),
  title = 'Ничего не найдено...',
}: IEmpty) => (
  <Flex
    align="center"
    className={styles.wrapper}
    full={true}
    gap={8}
    justify="center"
    vertical={true}
  >
    <div className={styles.icon}>
      {icon}
    </div>
    <Flex align="center" vertical={true}>
      <Text align="text-center" color="text-base-400" size="text-sm">
        {title}
      </Text>
      <Text align="text-center" color="text-base-600" size={0.7}>
        {description}
      </Text>
    </Flex>
  </Flex>
);
