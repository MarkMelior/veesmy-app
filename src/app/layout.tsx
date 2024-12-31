import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import type { Metadata } from 'next';

import './globals.scss';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  description: 'Лучшее приложение для записи результатов тренировок',
  title: 'Veesmy App',
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
        </ThemeProvider>
      </body>
    </html>
  )
);

export default RootLayout;
