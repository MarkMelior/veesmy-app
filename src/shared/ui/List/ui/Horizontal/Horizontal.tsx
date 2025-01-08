import { Divider, Flex, Text } from '@/shared/ui';

import styles from './horizontal.module.scss';

export interface IListHorizontalItem {
  title: string
  value: React.ReactNode
}

interface IListHorizontal {
  className?: string
  items: IListHorizontalItem[]
  showDivider?: boolean
}

export const ListHorizontal = ({ className, items, showDivider = true }: IListHorizontal) => (
  <div className={className}>
    <Flex className={styles.wrapper}>
      {items.map(({ title, value }) => (
        <Flex align="center" key={title} vertical={true}>
          <Text color="text-base-500" size={0.8}>{title}</Text>
          <Text weight="font-semibold">{value}</Text>
        </Flex>
      ))}
    </Flex>
    {showDivider ? <Divider /> : null}
  </div>
);
