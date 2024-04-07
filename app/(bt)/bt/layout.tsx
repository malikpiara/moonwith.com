import '../../globals.css';

interface BTLayoutProps {
  children: React.ReactNode;
}

export default function GameLayout({ children }: BTLayoutProps) {
  return (
    <html lang='en'>
      <body className={`antialiased min-h-screen bg-primary z-50`}>
        <main className='flex h-screen z-50'>{children}</main>
      </body>
    </html>
  );
}
