'use client';

import { Button, Flex, ModalBase } from '@/shared/ui';

import styles from './themesModal.module.scss';

interface IThemesModal {
  children: React.ReactElement<{ onClick?: () => void }>
}

export const ThemesModal = ({ children }: IThemesModal) => (
  <ModalBase
    button={children}
    title="Выбери тему"
  >
    <Flex gap="medium" vertical={true}>
      <Button
        className={styles.button}
        full={true}
        variant="none"
      >
        Как в системе
      </Button>
      <Button
        className={styles.button}
        full={true}
        variant="none"
      >
        Темная тема
      </Button>
      <Button
        className={styles.button}
        full={true}
        variant="none"
      >
        Светлая тема
      </Button>
    </Flex>
  </ModalBase>
);
