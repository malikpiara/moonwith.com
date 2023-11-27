'use client';
import { useState, useRef, FC } from 'react';

const Editor: FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [, setRenderTrigger] = useState<{}>({});

  const forceUpdate = (): void => setRenderTrigger({});

  const getContent = (): string => editorRef.current?.innerText || '';

  const countCharacters = (): number => getContent().length;

  const countWords = (): number => {
    const words = getContent().trim().split(/\s+/);
    return words.length;
  };

  const countSentences = (): number => {
    const sentences = getContent().split(/[.!?]/).filter(Boolean);
    return sentences.length;
  };

  const countParagraphs = (): number => {
    const paragraphs = getContent().split('\n\n').filter(Boolean);
    return paragraphs.length;
  };

  const countAdverbs = (): number => {
    const words = getContent().trim().split(/\s+/);
    const adverbs = words.filter((word) => word.endsWith('ly'));
    return adverbs.length;
  };

  return (
    <main className='py-6 prose dark:prose-invert'>
      <h1 className='text-primary dark:text-secondary italic'>Mercury</h1>

      <div
        ref={editorRef}
        className='rounded dark:bg-primary text-lg focus:outline-none'
        contentEditable
        onInput={forceUpdate}
      />

      <div className='flex gap-2'>
        <p>
          <span className='font-bold'>Characters:</span> {countCharacters()}
        </p>
        <p>
          <span className='font-bold'>Words:</span> {countWords()}
        </p>
        <p>
          <span className='font-bold'>Sentences:</span> {countSentences()}
        </p>
        <p>
          <span className='font-bold'>Paragraphs:</span> {countParagraphs()}
        </p>
        <p>
          <span className='font-bold'>Adverbs:</span> {countAdverbs()}
        </p>
      </div>
      {countAdverbs() >= 2 && (
        <div className='bg-tertiary w-fit rounded transition ease-in-out duration-300 px-3 dark:text-primary'>
          <p className=' font-semibold'>
            Aim for 1 or fewer adverbs to make your writing crisp.
          </p>
          <p>&quot;He ran quickly&quot; becomes &quot;He sprinted&quot;.</p>
        </div>
      )}
    </main>
  );
};

export default Editor;
