import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userTypes } from '@/hooks/AuthStore';

function UserButton({ user }: { user: userTypes | null }) {
  const signOut = async () => {
    await axios.post('http://localhost:3001/auth/logout');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='w-12 h-12'>
          <AvatarImage src={user?.picture} alt='user-avatar' />
          <AvatarFallback>
            <span className='sr-only'>{user?.name?.charAt(0)}</span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='px-4 py-2'>
        <DropdownMenuItem className='text-base font-medium'>
          {user?.name}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link to='/investor/profile'>
          <DropdownMenuItem className='cursor-pointer font-medium text-primary text-base'>
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className='cursor-pointer text-rose-500 font-medium text-base'
          onSelect={() => signOut()}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
