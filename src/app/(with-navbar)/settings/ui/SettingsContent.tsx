'use client';

import {
  ExportOutlineIcon,
  FlashOutlineIcon,
  FolderOutlineIcon,
  ImportOutlineIcon,
  LangIcon,
  ThemeIcon,
  VeesIcon,
} from '@/shared/icons';
import { Button, Section } from '@/shared/ui';

import styles from './settingsContent.module.scss';

export const SettingsContent = () => (
  <>
    <Section
      items={[
        {
          color: '#1A80E5',
          icon: <VeesIcon height={26} width={26} />,
          onClick: () => { /* void */ },
          title: 'Тренировки',
        },
        {
          color: '#FFB21A',
          icon: <FolderOutlineIcon />,
          onClick: () => { /* void */ },
          title: 'Настроить группы',
        },
        {
          color: '#FA4838',
          icon: <FlashOutlineIcon />,
          onClick: () => { /* void */ },
          title: 'Упражнения',
        },
      ]}
    />
    <Section
      items={[
        {
          color: '#553FA6',
          icon: <LangIcon />,
          onClick: () => { /* void */ },
          rightText: 'Русский',
          title: 'Язык',
        },
        {
          color: '#5AADF2',
          icon: <ThemeIcon />,
          onClick: () => { /* void */ },
          rightText: 'Как в системе',
          title: 'Оформление',
        },
      ]}
    />
    <Section
      items={[
        {
          color: '#39C680',
          description: 'Загрузить файл',
          icon: <ImportOutlineIcon />,
          onClick: () => { /* void */ },
          title: 'Импорт настроек',
        },
        {
          color: '#D15347',
          description: 'Сохранить файл',
          icon: <ExportOutlineIcon />,
          onClick: () => { /* void */ },
          title: 'Экспорт настроек',
        },
      ]}
    />
    <Button
      className={styles.logout}
      color="red"
      disabled={true}
      full={true}
      radius="large"
      size="large"
      variant="bordered"
    >
      Выйти с аккаунта
    </Button>
  </>
);
