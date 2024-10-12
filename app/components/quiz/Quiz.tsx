'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { QuestionType } from './getRandomCathedrals';
import Link from 'next/link';
import { HomeIcon } from '@radix-ui/react-icons';

const MAX_QUIZ_ITEMS = 10;

export default function Quiz( randomquiz: QuestionType[] ) {
  
  const quiz = randomquiz;

  const [ currentQuestion, setCurrentQuestion ] = useState(0);
  const [ score, setScore ] = useState(0);
  const [ quizEnd, setQuizEnd ] = useState(false);

  function handleOptionClick(isCorrect:boolean) {

    if (currentQuestion < MAX_QUIZ_ITEMS-1) {
    
    } else {
      setQuizEnd(true); 
    }

    setCurrentQuestion(currentQuestion+1);
    if (isCorrect) {
      setScore(() => score+1);
    } else setScore(score);
    console.log(isCorrect);
  }

  return (
    <>
      {
        quizEnd ? (
          <div className='flex flex-col items-center justify-center gap-6'>

            <div className='flex flex-col gap-4 text-center'>
              <div className='text-2xl tracking-tight'>
                <p>
                  { 
                    score > 7 ? 'Congratulations! '
                    : score < 8 && score > 4 ? 'Not bad! ' 
                    : 'You can do better! '
                  }
                </p>
                <p>You scored {score} out of { MAX_QUIZ_ITEMS }.</p>
              </div>
              <Link href={"/"} className="w-full md:w-fit flex flex-row gap-6 justify-between items-center uppercase font-sans text-sm text-white font-bold tracking-widest px-8 py-6 my-4 rounded bg-teal-800 hover:bg-teal-600 transition duration-300">
                <HomeIcon></HomeIcon>
                Back to Home
              </Link>
            </div>

          </div>
        ) : 
        (
          <div className='w-full flex flex-col items-center justify-center gap-2'>
            <div className='w-full text-sm'>
              <p>{currentQuestion + 1}/{MAX_QUIZ_ITEMS}</p>
            </div>
            <Image
              src={quiz[currentQuestion].question}
              alt={quiz[currentQuestion].question}
              width={600}
              height={500}
              style={{
                objectFit: 'cover',
              }}
              className="w-full min-w-full aspect-video border-8 border-stone-100 shadow-2xl hover:scale-105 transition duration-300"
            />
            
            <div
              className='w-full grid grid-cols-2 gap-2'
              aria-label="quiz choices"
            >
              {quiz[currentQuestion].options.map((button,key) => (
                <div
                  className="cold-span-2 md:col-span-1 flex justify-between items-center gap-4 p-4 border border-stone-600/30 group-data-[checked]:bg-stone-700 has-[:checked]:bg-indigo-50 hover:bg-stone-700/15 rounded-lg transition duration-300"
                  key={key}
                  onClick={() => {
                    handleOptionClick(button.iscorrect)
                  }}
                >
                  <div className='capitalize'>{button.name}</div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    </>
  )
}
