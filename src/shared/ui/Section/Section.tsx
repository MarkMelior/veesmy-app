import { Fragment } from 'react';

import { ArrowDropdownIcon } from '@/shared/icons';
import type { TLinkOrClick } from '@/shared/types';
import { Button, Divider, Flex, Text } from '@/shared/ui';

import { Background } from '../Background';

import styles from './section.module.scss';

interface ISectionBaseItem {
  color: string
  description?: string
  icon: React.ReactNode
  rightText?: string
  title: string
}

type TSectionItem = TLinkOrClick<ISectionBaseItem>;

interface ISection {
  items: TSectionItem[]
}

export const Section = ({ items }: ISection) => (
  <Background className={styles.wrapper}>
    {items.map(({
      color,
      description,
      href,
      icon,
      onClick,
      rightText,
      title,
    }, index) => (
      <Fragment key={title}>
        <Button
          align="center"
          className={styles.item}
          full={true}
          isActiveAnimation={false}
          onClick={onClick}
          radius="none"
          size="none"
          to={href}
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
        </Button>
        {index !== items.length - 1 ? <Divider className={styles.divider} size="none" /> : null}
      </Fragment>
    ))}
  </Background>
);
