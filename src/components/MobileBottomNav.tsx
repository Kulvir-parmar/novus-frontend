import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { Home, ListTodo, PieChart } from 'lucide-react';

const routes = [
  {
    href: '/investor/dashboard',
    label: 'Home',
    icon: <Home className='h-6 w-6' />,
  },
  {
    href: '/investor/subscribe',
    label: 'Subscribe',
    icon: <ListTodo className='h-6 w-6' />,
  },
  {
    href: '/investor/portfolio',
    label: 'portfolio',
    icon: <PieChart className='h-6 w-6' />,
  },
];

const MobileBottomNav = () => {
  const pathname = useLocation().pathname;

  return (
    <div className='h-16 px-8 md:px-20 fixed bg-background rounded-2xl border-t-2 bottom-0 right-0 left-0 lg:hidden'>
      <div className='flex justify-between items-center h-full'>
        {routes.map(({ label, href, icon }) => (
          <Link
            to={href}
            key={href}
            className={cn(
              'text-xs flex flex-col space-y-2 p-3 font-medium rounded-lg transition items-center',
              pathname === href
                ? 'text-foreground bg-primary/10'
                : 'text-zinc-400'
            )}
          >
            {icon}
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;
