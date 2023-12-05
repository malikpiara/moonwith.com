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
        className={`antialiased min-h-screen bg-secondary dark:bg-primary text-primary dark:text-gray ${inter.className}`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='max-w-2xl mx-auto py-10 px-4'>
            <header className='flex bg-tertiary w-full absolute left-0 top-0 flex-wrap opacity-80 text-primary'>
              <div className='flex items-center justify-between'>
                <ModeToggle />
                <nav className='ml-auto font-medium space-x-1'>
                  <Link
                    className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
                    href='/'
                  >
                    Home
                  </Link>
                  <Link
                    className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
                    href='/about'
                  >
                    About
                  </Link>
                  <Link
                    className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
                    href='/projects'
                  >
                    Work
                  </Link>
                  <Link
                    className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
                    href='/dashboard'
                  >
                    Software
                  </Link>
                  <Link
                    className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
                    href='/friends'
                  >
                    Friends
                  </Link>
                  <Link
                    className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
                    href='/contact'
                  >
                    Get in touch
                  </Link>
                </nav>
              </div>
            </header>
            <main className='sm:mt-10'>{children}</main>
          </div>
          <p className='uppercase text-xs [writing-mode:vertical-lr] rotate-180 fixed bottom-20 tracking-wider mx-3 hover:text-tertiary max-sm:hidden transition-all duration-300 cursor-default'>
            Only you know who you can be
          </p>
          <div className='hidden dark:flex bg-primary h-96 border-secondary dark:border-primary rounded-2xl overflow-hidden max-sm:hidden'>
            <div className='bg-primary h-[40rem] w-[40rem] m-auto block rounded-full shadow-[inset_41px_2px_70px_rgba(252,249,242)] animate-pulse blur-md  transition-all before:content-[""] relative -bottom-36 border-8 hover:scale-125 duration-300 ease-in hover:border-tertiary' />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
