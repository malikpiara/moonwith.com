'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { allPosts } from 'content-collections';
import Link from 'next/link';

let mockPosts = [
  {
    title: "Don't use acronyms",
  },
  {
    title: 'Turning 26 years-old',
  },
  {
    title: 'Activity Map. A way to visualise and improve my writing frequency.',
  },
  {
    title: 'A riff on the Agile Manifesto',
  },
  {
    title: 'Show me your bad writing',
  },
];

//I was thinking about using articles[i].title.match but I dropped it for .includes()
function search(query: string, articles: any) {
  let search_results = [];

  for (let i: number = 0; i <= articles.length - 1; i++) {
    if (articles[i].title.toLowerCase().includes(query.toLowerCase())) {
      search_results.push(articles[i]);
    }
  }
  return search_results;
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    setQuery(query); // saving the user query on state.
    //search(query, mockPosts); // running the search function with the user query.
    setResults(search(query, allPosts));
  }

  console.log(allPosts);

  return (
    <>
      <form onSubmit={handleSubmit} className='flex mb-3'>
        <Input name='search' placeholder='Search' />
        <Button type='submit'>Search</Button>
      </form>
      <div id='search-results' className='flex flex-col space-y-10'>
        <p className='font-mono text-xs'>
          Search results for &quot;{query}&quot;
        </p>
        <div className='space-y-2'>
          {results.map((article) => {
            return (
              <Link
                key={article.title}
                className='hover:bg-eggshell rounded-xl transition-all duration-700 p-2 dark:hover:bg-eggshell/5 flex'
                href={`/posts/${article.slug}`}
              >
                {article.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
