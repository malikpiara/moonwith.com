import '../../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Casa Piara',
  description:
    'Casa Piara. The knowledge and content hub of the Piarali family.',
  creator: 'Malik Piara',
  keywords: ['casa piara', 'piara', 'piarali', 'piarali family'],
  publisher: 'Malik Piara',
  openGraph: {
    images: '/malik_mini.jpeg',
    authors: ['Malik'],
  },
  icons: {
    icon: '/next.svg',
  },
};

interface CasaPiaraProps {
  children: React.ReactNode;
}

export default function CasaPiara({ children }: CasaPiaraProps) {
  return (
    <html lang='en'>
      <body
        className={`antialiased min-h-screen bg-white text-primary ${inter.className}`}
      >
        <main className='flex bg-neutral-100 w-full'>{children}</main>
      </body>
    </html>
  );
}
