'use client';
import Link from 'next/link';
import '../../globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/logicola/navbar';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Navbar />
      <button onMouseOver={() => console.log('Mouse over!')}>
        Test Button
      </button>
      <main className='flex'>{children}</main>
    </>
  );
}
