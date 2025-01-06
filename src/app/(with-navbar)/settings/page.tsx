import { Headers } from '@/widgets/Headers';
import { Navbar } from '@/widgets/Navbar/client';

import { Layout } from '@/shared/ui';

import { SettingsContent } from './ui/SettingsContent';

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
        <SettingsContent />
      </Layout>
    </main>
    <Navbar />
  </>
);

export default Settings;
