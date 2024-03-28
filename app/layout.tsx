import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import SideNav from '@/components/Sidenav';
import UrlBar from '@/components/UrlBar';
import BackgroundImageWrapper from '@/components/BackgroundImageWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plant UI',
  description: 'Beautiful Plant Shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundImageWrapper source="/static/bg-images/bg-1.png">
          <div className="justify-enter mx-auto flex h-full max-w-[1200px] flex-col items-center justify-between p-6 md:p-20">
            <UrlBar />
            <div className="flex w-full flex-col items-center gap-6 md:mt-10 md:flex-row">
              <SideNav />
              <main className="w-full">{children}</main>
            </div>
          </div>
        </BackgroundImageWrapper>
      </body>
    </html>
  );
}
