'use client';

import { useTheme } from 'next-themes';

import { Button, Checkbox, Flex, ModalBase } from '@/shared/ui';

import styles from './themesModal.module.scss';

interface IThemesModal {
  children: React.ReactElement<{ onClick?: () => void }>
}

export const ThemesModal = ({ children }: IThemesModal) => {
  const { setTheme, theme } = useTheme();

  return (
    <ModalBase
      button={children}
      title="Выбери тему"
    >
      <Flex gap="medium" vertical={true}>
        <Button
          className={styles.button}
          full={true}
          icon={<Checkbox checked={theme === 'system'} />}
          onClick={() => setTheme('system')}
          variant="none"
        >
          Как в системе
        </Button>
        <Button
          className={styles.button}
          full={true}
          icon={<Checkbox checked={theme === 'dark'} />}
          onClick={() => setTheme('dark')}
          variant="none"
        >
          Темная тема
        </Button>
        <Button
          className={styles.button}
          full={true}
          icon={<Checkbox checked={theme === 'light'} />}
          onClick={() => setTheme('light')}
          variant="none"
        >
          Светлая тема
        </Button>
      </Flex>
    </ModalBase>
  );
};
