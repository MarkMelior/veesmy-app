import { Headers } from '@/widgets/Headers';
import { Navbar } from '@/widgets/Navbar/client';

import { AppRoutes } from '@/shared/constants';
import {
  ExportOutlineIcon,
  FlashOutlineIcon,
  FolderOutlineIcon,
  ImportOutlineIcon,
  LangIcon,
  ThemeIcon,
  VeesIcon,
} from '@/shared/icons';
import { Layout, Section } from '@/shared/ui';

import styles from './page.module.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vees My | Настройки',
};

const Settings = () => (
  <>
    <Headers.Settings />
    <main>
      <Layout className={styles.layout}>
        <Section
          items={[
            {
              color: '#1A80E5',
              href: AppRoutes.SETTINGS,
              icon: <VeesIcon height={26} width={26} />,
              title: 'Тренировки',
            },
            {
              color: '#FFB21A',
              href: AppRoutes.SETTINGS,
              icon: <FolderOutlineIcon />,
              title: 'Настроить группы',
            },
            {
              color: '#FA4838',
              href: AppRoutes.SETTINGS,
              icon: <FlashOutlineIcon />,
              title: 'Упражнения',
            },
          ]}
        />
        <Section
          items={[
            {
              color: '#553FA6',
              icon: <LangIcon />,
              // onClick: () => {},
              rightText: 'Русский',
              title: 'Язык',
            },
            {
              color: '#5AADF2',
              icon: <ThemeIcon />,
              // onClick: () => {},
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
              // onClick: () => {},
              title: 'Импорт настроек',
            },
            {
              color: '#D15347',
              description: 'Сохранить файл',
              icon: <ExportOutlineIcon />,
              // onClick: () => {},
              title: 'Экспорт настроек',
            },
          ]}
        />
      </Layout>
    </main>
    <Navbar />
  </>
);

export default Settings;
