import Link from 'next/link';
import { ModeToggle } from '../mode-toggle';

interface NavItem {
  label: string;
  destination: string;
}

/**
 * This component displays a navbar for Moonwith's main website.
 * To add new items to the navigation, add the items to the items constant.
 */
export function Header() {
  const items: NavItem[] = [
    { label: 'Home', destination: '/' },
    { label: 'About', destination: '/about' },
    { label: 'Work', destination: '/projects' },
    { label: 'Software', destination: '/dashboard' },
    { label: 'Friends', destination: '/friends' },
    { label: 'Get in Touch', destination: '/contact' },
  ];
  return (
    <header className='flex w-full absolute left-0 top-2 flex-wrap opacity-80 text-primary dark:text-gray'>
      <div className='flex items-center justify-between'>
        <ModeToggle />
        <nav className='ml-auto font-semibold space-x-1'>
          {items.map((item: NavItem) => {
            return (
              <Link
                key={item.label}
                className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
                href={item.destination}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
