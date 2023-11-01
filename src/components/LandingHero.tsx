import { Link } from 'react-router-dom';

import HeroImage from '@/assets/HeroImage.png';
import { Button } from '@/components/ui/button';

function LandingHero() {
  return (
    <div className='px-8 py-8 lg:px-20'>
      <div className='flex flex-col-reverse gap-y-6 justify-around items-center lg:flex-row mx-auto'>
        <div className='flex flex-col space-y-6 text-center items-center lg:items-start lg:text-left'>
          <h1 className='text-3xl font-bold leading-normal md:text-5xl max-w-screen-sm'>
            Multiply your wealth and achieve sky rocketing returns.
          </h1>
          <p className='text-lg md:text-xl'>
            Your very own platform for exclusive opportunities.
          </p>
          <Button className='font-medium text-lg'>
            <Link to='/sign-in'>Get Started</Link>
          </Button>
        </div>
        <div>
          <img src={HeroImage} alt='' className='h-[400px] w-[45 0px]' />
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
