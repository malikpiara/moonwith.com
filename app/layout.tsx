import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Moonwith Hex',
  description: "Malik's Digital Home",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`antialiased min-h-screen bg-secondary dark:bg-primary text-primary dark:text-secondary ${inter.className}`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='max-w-2xl mx-auto py-10 px-4'>
            <header>
              <div className='flex items-center justify-between'>
                <ModeToggle />
                <nav className='ml-auto font-medium space-x-6'>
                  <Link href='/'>Home</Link>
                  <Link href='/about'>About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
