import React from 'react';
import { GearIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import cathedralIcon from '../assets/icons/church-religion-svgrepo-com.svg';
import Link from 'next/link';

const NavMain = () => {
  return (
    <div className='fixed z-50 w-full flex flex-row justify-between items-center bg-teal-950 text-white'>

      <div className='px-4 md:px-6 xl:px-8'>
        <Link href={'/'} className='flex flex-row items-baseline gap-2 text-white text-lg font-light translate-y-1' >
          <Image
            src={cathedralIcon}
            alt='cathedral icon'
            width={22}
            height={22}
            style={{
              objectFit: 'cover', // cover, contain, none
              color: '#fff',
            }}
            className='invert'
          />
          CATHEDRALS
        </Link>
      </div>

      <div className='group px-4 md:px-6 xl:px-6 py-6 text-teal-100 hover:text-teal-950 bg-teal-900 hover:bg-teal-300 transition duration-300'>
        <div className='group-hover:rotate-180 p-2 transition duration-300'>
          <GearIcon width='22' height='22' />
        </div>
      </div>

    </div>
  )
};

export default NavMain;