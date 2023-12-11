import Link from 'next/link';
import '../../globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/logicola/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Logicola',
  description: "Malik's Digital Home",
  creator: 'Malik Piara',
  keywords: [
    'personal blog',
    'daily blog',
    'product management',
    'product enablement',
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
        className={`antialiased min-h-screen bg-white dark:bg-primary text-primary dark:text-slate ${inter.className}`}
      >
        <Navbar />
        <main className='flex'>{children}</main>
      </body>
    </html>
  );
}
