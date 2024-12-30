import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import type { Metadata } from 'next';

import './globals.scss';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  description: 'Лучшее приложение для записи результатов тренировок',
  title: 'Veesmy App',
};

interface IRootLayout {
  children: React.ReactNode
}

const RootLayout = ({ children }: Readonly<IRootLayout>) => (
  <html lang="ru" suppressHydrationWarning={true}>
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <ThemeProvider attribute="data-mode">{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
