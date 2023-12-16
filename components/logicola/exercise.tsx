'use client';
import React, { useState } from 'react';
import Option from './Option';
import { questions } from '@/app/(logicola)/content';

const Exercise = () => {
  const [questionIdx, setQuestionIdx] = React.useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);

  const question = questions[questionIdx];

  return (
    <div className='max-w-7xl p-6 bg-white border border-slate-200 rounded-lg mb-6'>
      <h3 className='mb-2 text-xl font-bold tracking-tight text-slate-900'>
        1.
      </h3>
      <hr className='h-px my-4 bg-slate-200 border-0'></hr>
      <div className='mx-auto w-full max-w-screen-xl p-4'>
        <div className='md:flex flex-col md:justify-between gap-5'>
          <div className='flex flex-col sm:gap-72 self-center mb-6 text-lg'>
            <div>{question.prompt}</div>
          </div>

          {question.options.map((option) => {
            return (
              <Option
                key={option.id}
                label={option.label}
                onClick={() => {
                  setSelectedOptionId(option.id);
                }}
              />
            );
          })}
        </div>
      </div>
      <hr className='h-px my-4 bg-slate-200 border-0'></hr>
      {selectedOptionId != null && (
        <h1>
          Option {selectedOptionId} was selected! {question.correctId} is the
          correct answer.
        </h1>
      )}
      <button
        type='button'
        className='text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
      >
        Check answer
      </button>
    </div>
  );
};

export default Exercise;
