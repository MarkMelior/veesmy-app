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

import { ThemesModal } from '@/features/ThemesModal';

import styles from './settingsContent.module.scss';

export const SettingsContent = () => (
  <>
    <Section>
      <Section.Item
        color="#1A80E5"
        icon={<VeesIcon height={26} width={26} />}
        title="Тренировки"
      />
      <Section.Item
        color="#FFB21A"
        icon={<FolderOutlineIcon />}
        title="Настроить группы"
      />
      <Section.Item
        color="#FA4838"
        icon={<FlashOutlineIcon />}
        showDivider={false}
        title="Упражнения"
      />
    </Section>
    <Section>
      <Section.Item
        color="#553FA6"
        icon={<LangIcon />}
        rightText="Русский"
        title="Язык"
      />
      <ThemesModal>
        <Section.Item
          color="#5AADF2"
          icon={<ThemeIcon />}
          rightText="Как в системе"
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
        title="Импорт настроек"
      />
      <Section.Item
        color="#D15347"
        description="Сохранить файл"
        icon={<ExportOutlineIcon />}
        showDivider={false}
        title="Экспорт настроек"
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
