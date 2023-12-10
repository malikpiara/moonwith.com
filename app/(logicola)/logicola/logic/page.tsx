import { Sidebar } from '@/components/logicola/sidebar';

export default function Logic() {
  return (
    <>
      <Sidebar />
      <article className='py-6 prose dark:prose-invert'>
        <h1 className='text-primary dark:text-secondary'>Logicola</h1>
      </article>
    </>
  );
}
