import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import SideNav from '@/components/Sidenav';
import UrlBar from '@/components/UrlBar';
import BackgroundImageWrapper from '@/components/BackgroundImageWrapper';
import CartProvider from '@/context/CartContext';

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
          <CartProvider>
            <div className="mx-auto my-0 flex h-full max-w-[1100px] flex-col items-center justify-between p-6 md:p-20">
              <UrlBar />
              <div className="flex w-full flex-col items-center gap-6 md:mt-10 md:flex-row">
                <SideNav />
                <main className="w-full">{children}</main>
              </div>
            </div>
          </CartProvider>
        </BackgroundImageWrapper>
      </body>
    </html>
  );
}
