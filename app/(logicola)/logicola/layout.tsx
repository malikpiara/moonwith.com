import Link from 'next/link';
import '../../globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/logicola/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Logicola',
  description:
    'LogiCola is a program to help students learn logic. This is a web version of the original software built by the late Professor Harry Gensler.',
  creator: 'Malik Piara',
  keywords: [
    'logic',
    'propositional logic',
    'introduction to logic',
    'download logicola',
  ],
  publisher: 'Malik Piara',
  openGraph: {
    images: '/malik_mini.jpeg',
    authors: ['Malik'],
  },
  icons: {
    icon: '/next.svg',
  },
};

interface LCLayoutProps {
  children: React.ReactNode;
}

export default function LCLayout({ children }: LCLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`antialiased min-h-screen bg-white text-primary ${inter.className}`}
      >
        <Navbar />
        <main className='flex'>{children}</main>
      </body>
    </html>
  );
}
