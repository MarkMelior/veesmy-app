import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import { ThemeProvider } from 'next-themes';

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
  <html lang="ru" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider attribute="data-mode">{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
