import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Animated Sidebar',
  description: 'A modern dashboard layout showcasing an animated sidebar with smooth interactions.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} light`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
