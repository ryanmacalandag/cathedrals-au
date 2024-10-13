import React from 'react';
import Link from 'next/link';

const NavSubtle = () => {
  return (
    <div className='z-50 w-full flex flex-row justify-between items-baseline bg-orange-900/5 text-orange-950'>

      <div className='px-4 md:px-6 xl:px-8 pt-4 md:pt-5 pb-2 md:pb-3'>
        <Link href={'/'} className='flex flex-row items-center gap-2 text-xl font-regular md:text-2xl tracking-tight text-center transition duration-300' >
          Cathedrals <span className='italic opacity-80'>of</span> Australia
        </Link>
      </div>

      <div className='h-full'>
        <div className='h-full flex flex-row justify-between items-center gap-3 px-4 md:px-6 xl:px-8'>
          <Link href={'/cathedrals'} className='flex flex-row items-center gap-2 font-bold font-sans uppercase tracking-wider text-xs text-center hover:border-b border-orange-950 transition duration-300' >
            Browse
          </Link>
          <Link href={'/quiz'} className='flex flex-row items-center gap-2 font-bold font-sans uppercase tracking-wider text-xs text-center hover:border-b border-orange-950 transition duration-300' >
            Quiz
          </Link>
        </div>
      </div>
      
    </div>
  )
};

export default NavSubtle;