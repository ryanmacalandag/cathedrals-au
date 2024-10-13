import React from 'react';
import Link from 'next/link';

const NavSubtle = () => {
  return (
    <div className='z-50 w-full flex flex-row justify-between items-end bg-orange-900/5 text-orange-950'>

      <div className='px-4 md:px-6 xl:px-8 py-6 md:py-4'>
        <Link href={'/'} className='flex flex-row items-center gap-2 text-xl font-regular md:text-2xl tracking-tight text-center transition duration-300' >
          Cathedrals <span className='italic opacity-80'>of</span> Australia
        </Link>
      </div>

      <div>
        <div className='px-4 md:px-6 xl:px-8 py-6 md:py-4'>
          <Link href={'/cathedrals'} className='flex flex-row items-center gap-2 font-regular tracking-tight text-center hover:border-b border-orange-950 transition duration-300' >
            Gallery
          </Link>
        </div>
      </div>

      

    </div>
  )
};

export default NavSubtle;