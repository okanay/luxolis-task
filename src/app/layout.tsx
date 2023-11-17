import './globals.css';
import { roboto } from '@/libs/next-fonts/roboto';
import { Providers } from '@/providers/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxolis | Login Task',
  description: 'Created by Okan Ay for Luxolis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
