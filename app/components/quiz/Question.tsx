import React from 'react'
import Image from 'next/image'
import { QuestionType } from '@/app/assets/utils/getRandomCathedrals'

export default function Question( props: QuestionType ) {

  const question = props;

  return (
    <div className='w-full flex flex-col items-center justify-center gap-2'>
      <Image
        src={question.question}
        alt={question.question}
        width={600}
        height={500}
        style={{
          objectFit: 'cover',
        }}
        className="w-full min-w-full aspect-video border-8 border-stone-100 shadow-2xl hover:scale-105 transition duration-300"
      />
      
      <div
        className='w-full grid grid-cols-2 gap-2 my-4'
        aria-label="quiz choices"
      >
        {question.options.map((button,key) => (
          <div
            className="col-span-2 md:col-span-1 flex justify-between items-center gap-4 p-4 border border-stone-600/30 group-data-[checked]:bg-stone-700 has-[:checked]:bg-indigo-50 hover:bg-stone-700/15 rounded-lg transition duration-300"
            key={key}
            onClick={() => {
              return button.iscorrect
            }}
          >
            <div className='capitalize font-sans font-semibold pr-3'>{button.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
