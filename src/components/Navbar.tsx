import { Link, NavLink, Outlet } from 'react-router-dom';
import { Rocket } from 'lucide-react';

import { Button } from '@/components/ui/button';
import MobileSiderbar from '@/components/MobileSidebar';

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/fundraising',
    label: 'Fundraising',
  },
  {
    href: '/about-us',
    label: 'About us',
  },
];

const Navbar = () => {
  return (
    <>
      <div className='px-8 md:px-24'>
        <div className='h-20 py-4 flex items-center'>
          <Link to='/' className='flex items-center'>
            <Rocket className='h-8 w-8 text-primary mr-2' />
            <h1 className='text-2xl font-bold'>Novus Fide</h1>
          </Link>

          <MobileSiderbar />

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

          <div className='hidden lg:flex ml-auto'>
            <Link to='/sign-in'>
              <Button className='font-medium text-base'>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
