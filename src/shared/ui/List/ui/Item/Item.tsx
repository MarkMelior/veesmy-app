import { Divider, Flex, Text } from '@/shared/ui';

import styles from './item.module.scss';

export interface IListItem {
  className?: string
  description?: string
  icon: React.ReactNode
  showDivider?: boolean
  title: string
  value: React.ReactNode
}

export const ListItem = ({
  className,
  description,
  icon,
  showDivider = true,
  title,
  value,
}: IListItem) => (
  <div className={className}>
    <Flex className={styles.wrapper} vertical={true}>
      <Text color="text-base-500" size={0.8}>
        <Flex align="center" gap={2}>
          {icon}
          {title}
        </Flex>
      </Text>
      <Flex justify="between">
        <Text size={0.95}>{value}</Text>
        {description ? <Text color="text-base-700" size={0.875}>{description}</Text> : null}
      </Flex>
    </Flex>
    {showDivider ? <Divider /> : null}
  </div>
);
