import React from 'react'
import { Cathedrals } from '@/app/data/cathedrals'
import Image from 'next/image';

export default function CathedralsGallery() {
  const cathedrals = Cathedrals;

  return (
    <div className='w-full flex flex-col gap-4 md:gap-8 xl:gap-8'>
      <div className='w-full px-4 md:px-6 py-4 bg-orange-900/10'>
        {/* filter bar */}
        <div>Filter</div>
      </div>
      <div>
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4">
          {
            cathedrals.map((cathedral,key) => {
              return (
                <div key={key} className="col-span-3 flex flex-col gap-2 mb-2">
                  <div>
                    <Image
                      src={cathedral.img}
                      alt={cathedral.name}
                      width={600}
                      height={500}
                      style={{
                        objectFit: 'cover',
                      }}
                      className="w-full min-w-full aspect-video border-4 border-stone-100 shadow-none hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div>
                    <div className='flex flex-col md:flex-col flex-wrap justify-start items-start'>
                      <h3 className='text-xl md:text-xl xl:text-2xl flex-shrink-0'>{cathedral.name}</h3>
                      <p className='text-xs lg:text-sm font-sans uppercase'>{cathedral.diocese} • {cathedral.state}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
