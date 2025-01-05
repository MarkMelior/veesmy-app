import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Light } from '@/shared/ui';

import type { Metadata } from 'next';

import './globals.scss';
import '@/shared/styles/custom.scss';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  description: 'Самое удобное приложение для записи результатов тренировок.',
  title: 'Vees My | Заметки тренировок',
};

interface IRootLayout {
  children: React.ReactNode
}

const RootLayout = ({ children }: IRootLayout) => (
  (
    <html lang="ru" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="data-mode">
          {children}
          <Light />
          <div id="modal-root" />
        </ThemeProvider>
      </body>
    </html>
  )
);

export default RootLayout;
