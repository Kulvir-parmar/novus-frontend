import { Link, NavLink, Outlet } from 'react-router-dom';
import { Rocket } from 'lucide-react';

import { useAuthStore } from '@/hooks/AuthStore';
import UserButton from '@/components/UserButton';
import MobileBottomNav from '@/components/MobileBottomNav';

const routes = [
  {
    href: '/investor/dashboard',
    label: 'Explore',
  },
  {
    href: '/investor/subscribe',
    label: 'Subscribe',
  },
  {
    href: '/investor/portfolio',
    label: 'portfolio',
  },
];

const Navbar = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <div className='px-8 md:px-24'>
        <div className='h-20 py-4 flex items-center'>
          <Link to='/' className='flex items-center'>
            <Rocket className='h-8 w-8 text-primary mr-2' />
            <h1 className='text-2xl font-bold'>Novus Fide</h1>
          </Link>

          <div className='hidden items-center space-x-8 capitalize font-semibold text-lg lg:flex ml-auto'>
            {routes.map(({ label, href }) => (
              <NavLink
                to={href}
                key={href}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary hover:underline transition'
                    : 'hover:underline transition'
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className='ml-auto'>
            <UserButton user={user} />
          </div>
        </div>
      </div>
      <MobileBottomNav />
      <Outlet />
    </>
  );
};

export default Navbar;
