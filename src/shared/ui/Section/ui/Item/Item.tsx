import { ArrowDropdownIcon } from '@/shared/icons';
import { Button, Divider, Flex, Text } from '@/shared/ui';

import styles from './item.module.scss';

interface ISectionItemBaseItem {
  color: string
  description?: string
  icon: React.ReactNode
  onClick?: () => void
  rightText?: string
  showDivider?: boolean
  title: string
}

export const SectionItem = ({
  color,
  description,
  icon,
  onClick,
  rightText,
  showDivider = true,
  title,
}: ISectionItemBaseItem) => (
  <Button
    align="center"
    className={styles.item}
    full={true}
    isActiveAnimation={false}
    onClick={onClick}
    radius="none"
    size="none"
    variant="none"
  >
    <Flex align="center" gap={12}>
      <Flex
        align="center"
        className={styles.icon}
        justify="center"
        style={{ backgroundColor: color }}
      >
        {icon}
      </Flex>
      <Flex align="start" full={true} vertical={true}>
        <Text className={styles.title} size={0.95}>{title}</Text>
        <Text color="text-base-600" size={0.8}>{description}</Text>
      </Flex>
      <Text color="text-base-700" size={0.9}>
        <Flex align="center" gap={8} justify="end">
          {rightText}
          <ArrowDropdownIcon className={styles.arrow} />
        </Flex>
      </Text>
    </Flex>
    {showDivider ? <Divider className={styles.divider} size="none" /> : null}
  </Button>
);
