import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Light } from '@/shared/ui';

import { InitialProvider } from './initial-provider';

import type { Metadata } from 'next';

import './globals.scss';
import '@/shared/styles/custom.scss';
import '@/shared/styles/theme.scss';

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
        <ThemeProvider attribute="data-mode" defaultTheme="dark">
          <InitialProvider>
            {children}
          </InitialProvider>
          <Light />
          <div id="modal-root" />
          <div id="message-root" />
        </ThemeProvider>
      </body>
    </html>
  )
);

export default RootLayout;
