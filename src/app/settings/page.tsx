import { Headers } from '@/widgets/Headers';
import { Navbar } from '@/widgets/Navbar/client';

import { Layout } from '@/shared/ui';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vees My | Настройки',
};

const Settings = () => (
  <>
    <Headers.Settings />
    <main>
      <Layout>
        Настройки
      </Layout>
    </main>
    <Navbar />
  </>
);

export default Settings;
