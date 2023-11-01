import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

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

const MobileSiderbar = () => {
  const pathname = useLocation().pathname;

  return (
    <Sheet>
      <SheetTrigger className='ml-auto'>
        <Button asChild variant='ghost' size='icon' className='lg:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <div className='mt-12 space-y-2'>
          {routes.map(({ label, href }) => (
            <Link
              to={href}
              key={href}
              className={cn(
                'text-sm flex p-3 w-full font-medium rounded-lg transition',
                pathname === href
                  ? 'text-foreground bg-foreground/10'
                  : 'text-zinc-400'
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <SheetFooter className='mt-12'>
          <Link to='/sign-in' className='w-full'>
            <Button className='font-medium text-base w-full'>
              Get Started
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSiderbar;
