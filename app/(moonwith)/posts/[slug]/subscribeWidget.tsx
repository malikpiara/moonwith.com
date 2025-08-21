'use client';
import { TypographyH1 } from '@/components/moonwith/h1';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSignup() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    if (!email) return;

    window.open(
      `https://malikpiara.substack.com/subscribe?email=${encodeURIComponent(
        email
      )}`,
      '_blank'
    );
  }

  return (
    <>
      <div className='bg-[#6AB25E]/15 px-6 py-8 rounded-lg mt-10'>
        <h4 className='m-0 mb-3 dark:text-[#FBF9F2]'>
          🌳 Grow with me. Every other day, I’ll send you a letter—personal,
          honest, and meant for you.
        </h4>
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <div className='flex w-full items-center gap-2'>
            <Input
              type='email'
              name='email'
              className='w-full grow border-none dark:bg-primary'
              placeholder='Type your email...'
              required
            />
            <Button
              type='submit'
              variant='default'
              className='text-white dark:bg-[#6AB25E] shrink font-semibold'
              size='lg'
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
