import { Link } from 'react-router-dom';
import { Chrome } from 'lucide-react';

import { Button } from '@/components/ui/button';

const SignIn = () => {
  const loginWithGoogle = async () => {
    try {
      window.open('http://localhost:3001/auth/google', '_self');
    } catch (error) {
      console.log('[SIGN_IN]', error);
    }
  };

  return (
    <div className='flex flex-col items-center lg:mt-32'>
      <div className='h-screen w-full p-16 bg-foreground lg:rounded-lg text-background gap-y-6 lg:h-full lg:w-5/12 space-y-6'>
        <h1 className='text-2xl font-bold text-center lg:text-3xl'>
          Welcome 👋
        </h1>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-2 text-gray-500 bg-foreground'>
              Google Sign In
            </span>
          </div>
        </div>
        <Button
          onClick={loginWithGoogle}
          className='w-full font-medium text-md'
        >
          <Chrome className='h-6 w-6 mr-4' />
          Continue with Google
        </Button>
        <p className='text-xs font-medium text-center md:text-sm'>
          By clicking Continue, you agree to Novus Fide&apos;s{' '}
          <span className='text-blue-500'>Terms & conditions</span> and{' '}
          <span className='text-blue-500'>Privacy Policy</span>
        </p>
        <p className='text-xs font-medium text-center md:text-sm'>
          Are you a founder looking for funding?{' '}
          <span className='text-blue-500 underline'>
            <Link to='/startup'>Apply here </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
