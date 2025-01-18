'use client';

import localforage from 'localforage';
import { useTheme } from 'next-themes';

import { NOT_IMPLEMENTED } from '@/shared/constants';
import {
  ExportOutlineIcon,
  FlashOutlineIcon,
  FolderOutlineIcon,
  ImportOutlineIcon,
  LangIcon,
  ResetIcon,
  ThemeIcon,
  VeesIcon,
} from '@/shared/icons';
import { openMessage } from '@/shared/lib/open-message';
import { Button, Section } from '@/shared/ui';

import { ThemesModal } from '@/features/ThemesModal';

import { initialMockLocalforage } from '@/persist-storage/mock/initial-mock';

import styles from './settingsContent.module.scss';

const getThemeName = (theme: string | undefined) => {
  switch (theme) {
    case 'system':
      return 'Как в системе';
    case 'dark':
      return 'Темная тема';
    case 'light':
      return 'Светлая тема';
    default:
      return 'Как в системе';
  }
};

export const SettingsContent = () => {
  const { theme } = useTheme();

  return (
    <>
      <Section>
        <Section.Item
          color="#1A80E5"
          icon={<VeesIcon height={26} width={26} />}
          onClick={() => openMessage(NOT_IMPLEMENTED)}
          title="Тренировки"
        />
        <Section.Item
          color="#FFB21A"
          icon={<FolderOutlineIcon />}
          onClick={() => openMessage(NOT_IMPLEMENTED)}
          title="Настроить группы"
        />
        <Section.Item
          color="#FA4838"
          icon={<FlashOutlineIcon />}
          onClick={() => openMessage(NOT_IMPLEMENTED)}
          showDivider={false}
          title="Упражнения"
        />
      </Section>
      <Section>
        <Section.Item
          color="#553FA6"
          icon={<LangIcon />}
          onClick={() => openMessage(NOT_IMPLEMENTED)}
          rightText="Русский"
          title="Язык"
        />
        <ThemesModal>
          <Section.Item
            color="#5AADF2"
            icon={<ThemeIcon />}
            rightText={getThemeName(theme)}
            showDivider={false}
            title="Оформление"
          />
        </ThemesModal>
      </Section>
      <Section>
        <Section.Item
          color="#39C680"
          description="Загрузить файл"
          icon={<ImportOutlineIcon />}
          onClick={() => openMessage(NOT_IMPLEMENTED)}
          title="Импорт настроек"
        />
        <Section.Item
          color="#D15347"
          description="Сохранить файл"
          icon={<ExportOutlineIcon />}
          onClick={() => openMessage(NOT_IMPLEMENTED)}
          showDivider={false}
          title="Экспорт настроек"
        />
      </Section>
      <Section name="⚙️ Для разработчиков">
        <Section.Item
          color="#8D6E63"
          description="Все ваши данные будут перезаписаны"
          icon={<ImportOutlineIcon />}
          onClick={() => {
            initialMockLocalforage();
            openMessage({
              content: 'Mock-данные успешно подгружены!',
              description: 'Перезапустите приложение',
              duration: 5,
            });
          }}
          title="Загрузить mock-данные"
        />
        <Section.Item
          color="#FA4838"
          description="Все ваши данные будут удалены"
          icon={<ResetIcon height={24} width={24} />}
          onClick={() => {
            localforage.clear();
            openMessage({
              content: 'Все ваши данные удалены!',
              description: 'Перезапустите приложение',
              duration: 5,
              type: 'error',
            });
          }}
          showDivider={false}
          title="Очистить все данные"
        />
      </Section>
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
};
