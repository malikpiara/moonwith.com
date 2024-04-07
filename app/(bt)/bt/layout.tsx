import '../../globals.css';

interface BTLayoutProps {
  children: React.ReactNode;
}

export default function GameLayout({ children }: BTLayoutProps) {
  return (
    <html lang='en'>
      <body className={`antialiased min-h-screen bg-primary`}>
        <main className='flex h-screen'>{children}</main>
      </body>
    </html>
  );
}
