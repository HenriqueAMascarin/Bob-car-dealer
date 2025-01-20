import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Suspense } from 'react';
import LoadingPage from '@/app/loading';
import Footer from '@/components/Footer';

const InterFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bob’s car dealer',
  description: 'Making your dream with cars.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterFont.variable} antialiased tw-min-h-[100vh] tw-min-w-[100%] tw-flex tw-flex-col tw-justify-center`}>
        <Header />
        
        <Suspense fallback={<LoadingPage />}>
          <main className="tw-flex tw-w-full tw-flex-col tw-items-stretch tw-justify-start tw-min-h-full tw-pb-[70px] tw-flex-grow">
            {children}
          </main>
        </Suspense>

        <Footer />
      </body>
    </html>
  );
}
