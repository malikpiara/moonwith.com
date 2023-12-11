import Link from 'next/link';
import '../../globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/logicola/navbar';

const inter = Inter({ subsets: ['latin'] });

interface LCLayoutProps {
  children: React.ReactNode;
}

export default function LCLayout({ children }: LCLayoutProps) {
  return (
    <>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-primary text-primary dark:text-slate ${inter.className}`}
      >
        <Navbar />
        <main className='flex'>{children}</main>
      </body>
    </>
  );
}
