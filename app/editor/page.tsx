'use client';
import { useState, useRef } from 'react';

const Editor = () => {
  const editorRef = useRef(null);
  const [, setRenderTrigger] = useState({});

  const forceUpdate = () => setRenderTrigger({});

  const getContent = () => editorRef.current?.innerText || '';

  const countCharacters = () => getContent().length;

  const countWords = () => {
    const words = getContent().trim().split(/\s+/);
    return words.length;
  };

  const countSentences = () => {
    const sentences = getContent().split(/[.!?]/).filter(Boolean);
    return sentences.length;
  };

  const countParagraphs = () => {
    const paragraphs = getContent().split('\n\n').filter(Boolean);
    return paragraphs.length;
  };

  const countAdverbs = () => {
    const words = getContent().trim().split(/\s+/);
    const adverbs = words.filter((word) => word.endsWith('ly'));
    return adverbs.length;
  };

  return (
    <main className='py-6 prose dark:prose-invert'>
      <h1 className='text-primary dark:text-secondary italic'>
        Hemingway. A stylechecker
      </h1>

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
    </main>
  );
};

export default Editor;
