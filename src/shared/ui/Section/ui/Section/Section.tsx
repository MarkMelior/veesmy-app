import { Background, Text } from '@/shared/ui';

import { SectionItem } from '../Item/Item';

import styles from './section.module.scss';

interface ISection {
  children: React.ReactNode
  name?: string
}

export const Section = ({ children, name }: ISection) => (
  <Background className={styles.content}>
    {name ? (
      <Text
        className={styles.name}
        color="text-base-600"
      >
        {name}
      </Text>
    ) : null}
    {children}
  </Background>
);

Section.Item = SectionItem;
