import { Background } from '@/shared/ui/Background';

import { SectionItem } from '../Item/Item';

import styles from './section.module.scss';

interface ISection {
  children: React.ReactNode
}

export const Section = ({ children }: ISection) => (
  <Background className={styles.content}>
    {children}
  </Background>
);

Section.Item = SectionItem;
