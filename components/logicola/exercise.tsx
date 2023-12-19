'use client';
import React, { useState } from 'react';
import Option from './Option';
import { questions } from '@/app/(logicola)/content';
import Link from 'next/link';

interface ExerciseProps {
  initialQuestionIdx: number;
}

const Exercise: React.FC<ExerciseProps> = ({ initialQuestionIdx = 0 }) => {
  const [questionIdx, setQuestionIdx] = useState(initialQuestionIdx);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);

  const question = questions[questionIdx];

  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className='max-w-7xl p-6 bg-white border border-stone-200 rounded-lg mb-6'>
      <h3 className='mb-2 text-xl font-bold tracking-tight text-stone-900'>
        {questionIdx + 1}.
      </h3>
      <div className='mx-auto w-full max-w-screen-xl p-4'>
        <div className='md:flex flex-col md:justify-between gap-5'>
          <div className='flex flex-col sm:gap-72 self-center mb-6 text-lg'>
            <div>{question.prompt}</div>
          </div>

          {question.options.map((option) => {
            return (
              <Option
                isActive={option.id === selectedOptionId}
                isCorrect={option.id === question.correctId}
                showSolution={showSolution}
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
      <hr className='h-px my-4 bg-stone-200 border-0' />
      {selectedOptionId != null && showSolution && (
        <div className='p-2 mb-3 text-stone-800'>
          You selected option {selectedOptionId + 1}. The correct answer is{' '}
          {question.correctId + 1}.
        </div>
      )}

      <div className='flex justify-between'>
        <button
          type='button'
          disabled={selectedOptionId == null}
          onClick={() => {
            setShowSolution(true);
          }}
          className={`text-white focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
            selectedOptionId == null
              ? ' bg-stone-200 cursor-not-allowed'
              : 'bg-logicolaPrimary hover:opacity-90'
          }`}
        >
          Check answer
        </button>

        {/* I'm displaying a "next" button as long as
      there are exercises left in the array. */}
        {questions.indexOf(question) != questions.length - 1 && (
          <Link
            href={`/logicola/logic/basic-propositional-logic/easier-translations/${
              questions.indexOf(question) + 2
            }`}
          >
            <button
              type='button'
              className={`text-logicolaPrimary rounded-lg text-sm font-semibold px-5 py-2.5 me-2 mb-2 border border-logicolaPrimary hover:opacity-90 `}
            >
              Next
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Exercise;
