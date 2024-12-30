import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import './globals.scss';

import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Veesmy App',
  description: 'Лучшее приложение для записи результатов тренировок',
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
